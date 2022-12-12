import { useState } from 'react'

import styles from './Rating.module.css'

import { default as star } from '../../assets/images/icon-star.svg'

function Rating(props) {
  const [activeButton, setActiveButton] = useState(null)
  const ratings = [1, 2, 3, 4, 5]

  function handleClick(buttonNumber) {
    setActiveButton(buttonNumber)
    props.onRatingClick(buttonNumber)
  }

  return (
    <section className={`${styles.ratingSection} ${!props.isActiveSlide && styles.slideOut}`}>
      <span>
        <img src={star} alt="star icon" />
      </span>
      <h1>How did we do?</h1>
      <p className={styles.text}>
        Please let us know how we did with your support request. All feedback is appreciated to help
        us improve our offering!
      </p>

      <div className={styles.ratings}>
        {ratings.map((rating, index) => {
          return (
            <button
              className={`${styles.ratingButton} ${
                activeButton === rating ? styles.activeRating : ''
              }`}
              type="button"
              onClick={() => handleClick(rating)}
              key={index}>
              {rating}
            </button>
          )
        })}
      </div>

      <button
        type="submit"
        disabled={!props.isRatingSelected}
        className={`${styles.submitButton} ${!props.isRatingSelected ? styles.disabled : null} ${
          props.isRatingSelected ? styles.submittable : null
        }`}
        onClick={() => props.handleSubmit()}>
        Submit
      </button>
    </section>
  )
}

export default Rating
