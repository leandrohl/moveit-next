
import Login from '../pages';
import styles from '../styles/components/LoginGitHub.module.css'
import Router from 'next/router'

export function LoginGitHub(){
    return(
        <div className={styles.loginContainer}>
            <div>
                <img src="/logo-full.svg" alt="logo"/>
            </div>
            <section>
                <strong>Bem-vindo</strong>
                <div className={styles.gitHubInfo}>
                    <img src="/icons/logotipo-do-github.svg"/>
                    Faça login com seu Github para começar
                </div>
                <div>
                    <input type="text" className={styles.entrarInput} placeholder="Digite seu username">
                    </input>
                    <button type="button" className={styles.entrarButton} onClick={() => Router.push('/home')}>
                        <img src="/icons/seta-direita.svg" alt="entrar"/>
                    </button>
                </div>
            </section>
        </div>
    );
}