import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import * as usersService from '../../utilities/users-service';
import styles from './LoginForm.module.scss'

export default function LoginForm({ setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');

const navigateTo = useNavigate()

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await usersService.login(credentials);
    setUser(user);
    navigateTo('/user')
  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div className={styles.LoginForm}>
    <h1 className={styles.h1}>Login</h1>
    <div className={styles.formContainer}>
      <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Email</label>
          <input  className={styles.input} type="text" name="email" value={credentials.email} onChange={handleChange} required />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Password</label>
          <input className={styles.input} type="password" name="password" value={credentials.password} onChange={handleChange} required />
        </div>
        <button className={styles.btn} type="submit">LOG IN</button>
      </form>
    </div>
    <p className={styles.errorMessage}>&nbsp;{error}</p>
  </div>
);
}