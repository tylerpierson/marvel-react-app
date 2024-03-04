import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './NavBar.module.scss';

export default function NavBar(props) {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const location = useLocation();

    const getPageName = () => {
        const pathname = location.pathname;
        if (pathname === '/orders/new') {
            return 'Home';
        } else if (pathname === '/orders') {
            return 'Past Orders';
        }
        
        return 'Browse';
    };

    const isHomePage = location.pathname === '/orders/new';

    return (
        <>
            <nav className={styles.NavBar}>
                <h1 className={styles.h1}>Comic Shop</h1>
                <ul className={styles.ul}>
                    <a className={`${styles.a} ${isHomePage && styles.home}`} href='/orders/new'>
                        <li className={styles.li}>Home</li>
                    </a>
                    {getPageName() !== 'Home' && (
                        <a className={`${styles.a} ${styles.midBtn}`} href={location.pathname}>
                            <li className={styles.li}>{getPageName()}</li>
                        </a>
                    )}
                    {token ? (
                        <a className={`${styles.a} ${styles.logOut}`}
						onClick={() => {
							localStorage.removeItem('token');
							setToken(null);
							window.location.reload();
						}}
						>
                            <div className={styles.animation}></div>
                            <li
                                className={styles.li}

                            >
                                Logout
                            </li>
                        </a>
                    ) : (
                        ''
                    )}
                </ul>
            </nav>
        </>
    );
}
