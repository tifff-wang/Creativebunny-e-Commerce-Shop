import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import './PayCompletionPage.styles.scss'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../Store/Cart/cartSlice'

const PayCompletionPage = () => {
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(clearCart())
    }, [])

    return (
        <div className="success-message-container">
            <h2>Payment Successful 🎉</h2>
            <Link to="/">Back to Homepage</Link>
        </div>
    )
}

export default PayCompletionPage
