import styles from './Footer.module.css'

function Footer() {
  return (
    <footer>
      <div className={styles.attribution}>
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.davidpelo.com">David Pelo</a>.
      </div>
    </footer>
  )
}

export default Footer
