# Marvel Comic Shop - MarvelVerse Comics
This is an **E-Commerce Application**, a streamlined example 
showcasing a RESTful API seamlessly integrated with a backend **MongoDB** database.

## What's included
Within the clone, the following directories and files will be found:
```
marvel-react-app
    |-- config
    |   |-- checkToken.js
    |   |-- database.js
    |   |-- ensureLoggedIn.js
    |   |-- seed.js
    |-- controllers
    |   |-- api
    |   |   |-- items.js
    |   |   |-- orders.js
    |   |   |-- users.js
    |-- models
    |   |-- category.js
    |   |-- item.js
    |   |-- itemSchema.js
    |   |-- order.js
    |   |-- user.js
    |-- public
    |   |-- css
    |   |   |-- styles.css
    |   |-- img
    |   |   |-- logo.png
    |   |-- js/dist
    |   |-- index.html
    |-- routes
    |   |-- api
    |   |   |-- items.js
    |   |   |-- orders.js
    |   |   |-- users.js
    |-- src
    |   |-- components
    |   |   |-- CategoryList
    |   |   |   |-- CategoryList.js
    |   |   |   |-- CategoryList.module.scss
    |   |   |-- Footer
    |   |   |   |-- Footer.js
    |   |   |   |-- Footer.module.scss
    |   |   |-- LineItem
    |   |   |   |-- LineItem.js
    |   |   |   |-- LineItem.module.scss
    |   |   |-- LoginForm
    |   |   |   |-- LoginForm.js
    |   |   |   |-- LoginForm.module.scss
    |   |   |-- MenuList
    |   |   |   |-- MenuList.js
    |   |   |   |-- MenuList.module.scss
    |   |   |-- MenuListItem
    |   |   |   |-- MenuListItem.js
    |   |   |   |-- MenuListItem.module.scss
    |   |   |-- NavBar
    |   |   |   |-- NavBar.js
    |   |   |   |-- NavBar.module.scss
    |   |   |-- OrderDetail
    |   |   |   |-- OrderDetail.js
    |   |   |   |-- OrderDetail.module.scss
    |   |   |-- OrderList
    |   |   |   |-- OrderList.js
    |   |   |   |-- OrderList.module.scss
    |   |   |-- OrderListItem
    |   |   |   |-- OrderListItem.js
    |   |   |   |-- OrderListItem.module.scss
    |   |   |-- SignUpForm
    |   |   |   |-- SignUpForm.js
    |   |   |   |-- SignUpForm.module.scss
    |   |   |-- UserInfo
    |   |   |   |-- UserInfo.js
    |   |   |   |-- UserInfo.module.scss
    |   |-- pages
    |   |   |-- AuthPage
    |   |   |   |-- AuthPage.js
    |   |   |   |-- AuthPage.module.scss
    |   |   |-- NewOrderPage
    |   |   |   |-- NewOrderPage.js
    |   |   |   |-- NewOrderPage.module.scss
    |   |   |-- OrderHistoryPage
    |   |   |   |-- OrderHistoryPage.js
    |   |   |   |-- OrderHistoryPage.module.scss
    |   |-- router
    |   |   |-- AppRouter.module.scss
    |   |   |-- index.js
    |   |   |-- routes.js
    |   |-- scss
    |   |   |-- styles.scss
    |   |-- utilities
    |   |   |-- items-api.js
    |   |   |-- orders-api.js
    |   |   |-- send-request.js
    |   |   |-- users-api.js
    |   |   |-- users-service.js
    |   |-- index.html
    |   |-- index.js
    |   |-- main.js
    |-- .babelrc
    |-- .gitignore
    |-- .prettierrc
    |-- app-server.js
    |-- gulpfile.js
    |-- package-lock.json
    |-- package.json
    |-- postcss.config.js
    |-- README.md
    |-- server.js
    |-- webpack.config.js
```
## Included Models ('category', 'itemSchema', 'order', 'user')
### Category Model
```
const categorySchema = new Schema({
  name: { type: String, required: true },
  sortOrder: Number
}, {
  timestamps: true
});
```
### Item Model
```
const itemSchema = new Schema({
  name: { type: String, required: true },
  image: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number, required: true, default: 0 },
  description: { type: String, required: true }
}, {
  timestamps: true
});
```
### Order Model
```
const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  lineItems: [lineItemSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});
```
### User Model
```
const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minlength: 3,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});
```

## Getting Started
1. Navigate to where the directory will be stored within your computer.
2. Clone the repository into your computer by using git clone followed by the SSH link found on my [GitHub](https://github.com/tylerpierson/marvel-react-app/tree/main)
3. Once the directory is cloned onto your computer, run ```npm i``` in the command line to install
    all of the dependencies found within my package.json file.
4. Within the root folder, touch .env and add in your personal MongoDB connection String in the following
    format: **mongodb+srv://piertyler:<\password>@cluster0.ozwjnx2.mongodb.net/?retryWrites=true&w=majority**
5. While still in the .env file, include a secret [SHA256](emn178.github.io/online-tools/sha256.html) key in the following
    format: **SECRET=<\secretKey>**. Also include a **PUBLIC_KEY** and a **PRIVATE_KEY** obtained from the Marvel Developer website in order to gain access to the Marvel API:
    **PUBLIC_KEY:<\your_personal_Marvel_public_key>**.
    **PRIVATE_KEY:<\your_personal_Marvel_private_key>**.
    **Save updated code**

## Running the Application
1. After installing the proper packages and files, run **npm run seed** to ensure that the seed file is properly set up for the application. Due to the large number of files in the API, this could take a couple minutes to process.
2. After the seed file has finished running, run **npm run dev** to begin running the application in the browser.
3. This should bring you to a login page where you are give the option of logging in with an existing account, or signing up with a new account.

## Adding more files to the directory
The comics that are currently in the application are based off of the characters names that are inputted in the seed file under the "Superheros" variable. In order to add more comics, you would need to add your desired Marvel superhero into that variable list. Since not all of the heroes in the Marvel API have comics associated with their names, not all of them will return and therefore will not be visible in the CategoryList.

Another method of adding more comics, or changing the comics that are currently in the directory is by going to the following code block in the seed file:
```
    let index = 0;
    while (comics.filter(comic => comic.category.name === name).length < 30 && index < data.data.results.length) {
    const comicData = data.data.results[index];
    const thumbnail = comicData.thumbnail;

    if (!thumbnail || thumbnail.path.includes('image_not_available')) {
        index++;
        continue;
    }
    }
```
By changing the **index** from 0 to your desired starting point, and by changing the **length** from 30 to the amount of comics you would like displayed, you will in turn change some of the comics listed. One thing to note, however, is that by changing the index to a higher number, you risk losing some of the characters that have less comics than your newly inputted number.