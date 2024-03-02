require('dotenv').config()
require('./database')
const fetch = require('node-fetch')
const Category = require('../models/category')
const Item = require('../models/item')

(async function() {
  try {
    const superheros = [
      'Avengers',
      'X-Men',
      'Fantastic Four',
      'Spider-Man',
      'Thor',
      'Deadpool',
      'Captain America',
    ]

    const publicKey = process.env.PUBLIC_KEY
    const privateKey = process.env.PRIVATE_KEY
    const timestamp = new Date().getTime().toString()
    const hash = require('crypto').createHash('md5').update(timestamp + privateKey + publicKey).digest('hex')
    const baseUrl = 'https://gateway.marvel.com/v1/public'

    const comics = []
    for (const name of superheros) {
      const response = await fetch(`${baseUrl}/comics?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&titleStartsWith=${name}`)
      const data = await response.json()

      if (!data || !data.data || !data.data.results || data.data.results.length === 0) {
        console.log(`No data found for ${name}`)
        continue
      }

      let index = 3
      while (comics.filter(comic => comic.category.name === name).length < 10 && index < data.data.results.length) {
        const comicData = data.data.results[index]
        const thumbnail = comicData.thumbnail
        if (!thumbnail || thumbnail.path.includes('image_not_available')) {
          index++
          continue
        }
        const item = {
          name: comicData.title,
          image: `${thumbnail.path}.${thumbnail.extension}`,
          price: comicData.prices.find(price => price.type === 'printPrice').price,
          category: {
            name: name,
          }
        }
        comics.push(item)
        index++
      }
    }

    await Category.deleteMany({})
    await Item.deleteMany({})
    const categories = await Category.create(comics.map(comic => comic.category))
    const items = await Item.create(comics.map(comic => ({
      ...comic,
      category: categories.find(category => category.name === comic.category.name)
    })))
    console.log('Comics:', items)

  } catch (error) {
    console.error(error)
  }

  process.exit()

})()
