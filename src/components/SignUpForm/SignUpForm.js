import { Component } from "react";
import { signUp } from '../../utilities/users-service';
import styles from './SignUpForm.module.scss'

export default class SignUpForm extends Component {
state = {
  name: '',
  email: '',
  password: '',
  confirm: '',
  error: ''
};

handleChange = (evt) => {
  this.setState({
    [evt.target.name]: evt.target.value,
    error: ''
  });
};

handleSubmit = async (evt) => {
  evt.preventDefault();
  try {
    const formData = {...this.state};
    delete formData.confirm;
    delete formData.error;
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await signUp(formData);
    // Baby step
    // this.props.setUser(user);
    // window.location.reload()
    this.props.setShowLogin(true)
    this.setState({
      name: '',
      email: '',
      password: '',
      confirm: '',
      error: ''
    })
  } catch {
    // An error happened on the server
    this.setState({ error: 'Sign Up Failed - Try Again' });
  }
};

// We must override the render method
// The render method is the equivalent to a function-based component
// (its job is to return the UI)
render() {
  const disable = this.state.password !== this.state.confirm;
  return (
    <div className={styles.SignUpForm}>
      <h1 className={styles.h1}>Sign Up</h1>
      <div className={styles.formContainer}>
        <form className={styles.form} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Name</label>
            <input className={styles.input} type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Email</label>
            <input className={styles.input} type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Password</label>
            <input className={styles.input} type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Confirm</label>
            <input className={styles.input} type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
          </div>
          <button className={styles.btn} type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className={styles.errorMessage}>&nbsp;{this.state.error}</p>
    </div>
  );
}
}