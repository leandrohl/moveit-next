
import styles from '../styles/pages/Login.module.css'

import {LoginGitHub} from '../components/LoginGitHub'

export default function Login(){
  return(
    <div className={styles.container}>
      <div className={styles.logo}>
        {/* <img src="/logo.svg" alt="logo"/> */}
      </div>
      <div>
        <LoginGitHub/>
      </div>
    </div>
  )
}