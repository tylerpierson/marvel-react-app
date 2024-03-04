import styles from './UserInfo.module.scss';
import { logOut } from '../../utilities/users-service';

export default function UserInfo({ user, setUser }) {

return (
  <div className={styles.UserInfo}>
    <div>{user.name}</div>
    <div className={styles.email}>{user.email}</div>
  </div>
);
}