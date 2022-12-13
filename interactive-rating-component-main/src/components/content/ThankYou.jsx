import styles from './ThankYou.module.css'
import { default as cellphone } from '../../assets/images/illustration-thank-you.svg'

function ThankYou(props) {
  function resetHandler() {
    props.onReset()
  }

  return (
    <section className={`${styles.thankYouSection} ${props.isActiveSlide && styles.slideIn}`}>
      <div>
        <img src={cellphone} alt="cellphone icon" />
      </div>
      <p className={styles.rating}>You selected {props.selectedRating} out of 5</p>
      <h1>Thank you!</h1>
      <p className={styles.text}>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t
        hesitate to get in touch!
      </p>
      <button type="button" className={styles.resetButton} onClick={resetHandler}>Reset</button>
    </section>
  )
}

export default ThankYou
