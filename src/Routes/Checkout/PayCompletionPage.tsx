import React from 'react'
import { Link } from 'react-router-dom'
import "./PayCompletionPage.styles.scss"

const PayCompletionPage = () => {
  return (
      <div className="success-message-container">
          <h2>Payment Successful 🎉</h2>
          <Link to="/">Back to Homepage</Link>
      </div>
  )
}

export default PayCompletionPage