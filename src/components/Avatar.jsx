import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, src }) { //desestruturação do props

    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
        />
    )
}