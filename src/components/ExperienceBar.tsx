
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){
    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: '58%'}}>
                <span className={styles.currentExperience} style={{left:'58%'}}>
                    388px
                </span>
                </div>
            </div>
            <span>688 xp</span>
        </header>
    )
}