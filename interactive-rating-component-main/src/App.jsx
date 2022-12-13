import './App.css'

import { useState } from 'react'

import Card from './components/ui/Card'
import Footer from './components/content/Footer'
import Rating from './components/content/Rating'
import ThankYou from './components/content/ThankYou'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedRating, setSelectedRating] = useState(null)

  function handleRatingClick(rating) {
    setSelectedRating(rating)
  }

  function submitHandler() {
    setIsSubmitted(true)
  }

  function resetHandler() {
    setSelectedRating(null)
    setIsSubmitted(false)
  }

  return (
    <>
      <main>
        <Card>
          <Rating
            isActiveSlide={!isSubmitted}
            activeRating={selectedRating}
            onRatingClick={handleRatingClick}
            handleSubmit={submitHandler}
          />
          <ThankYou
            isActiveSlide={isSubmitted}
            selectedRating={selectedRating}
            onReset={resetHandler}
          />
        </Card>
      </main>
      <Footer />
    </>
  )
}

export default App
