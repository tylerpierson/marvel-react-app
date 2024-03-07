import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} setShowLogin={setShowLogin} />}
      <div className={styles.btnContainer}>
        <h3 className={styles.h3} onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
    </main>
  );
}