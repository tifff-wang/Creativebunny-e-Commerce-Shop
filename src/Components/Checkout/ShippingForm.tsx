import React, { useState } from 'react'
import FormInput from '../Form-input/FormInput'
import Button from '../Button/Button'
import { selectedCurrentUser } from '../../Store/User/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import './ShippingForm.styles.scss'
import { setDeliveryDetailSaved } from '../../Store/Checkout/checkoutSlice'

const ShippingForm = () => {
    const currentUser = useSelector(selectedCurrentUser)

    const defaultFormFields = {
        email: currentUser?.email,
        firstName: '',
        lastName: '',
        deliveryAddress: '',
        message: '',
    }
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, firstName, lastName, deliveryAddress, message } = formFields

    const [formInEdit, setformInEdit] = useState(true)
    const dispatch = useDispatch()

    const handleChange = (event: any) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        setformInEdit(false)
        dispatch(setDeliveryDetailSaved(true))
    }

    const handleClick = async (event: any) => {
        setformInEdit(true)
        await dispatch(setDeliveryDetailSaved(false))
    }

    return (
        <>
            <div className="delivery-detail-container">
                <h2>2. Delivery Detail</h2>
                <p className="delivery-method">
                    Delivery Method: NZPost Standard Delivery
                </p>
                {formInEdit ? (
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <FormInput
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="fullname-container">
                                <FormInput
                                    label="First name"
                                    name="firstName"
                                    type="text"
                                    value={firstName}
                                    onChange={handleChange}
                                    required
                                />

                                <FormInput
                                    label="Last name"
                                    name="lastName"
                                    type="text"
                                    value={lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <FormInput
                                    label="Delivery address"
                                    name="deliveryAddress"
                                    type="text"
                                    value={deliveryAddress}
                                    onChange={handleChange}
                                    required
                                />

                                <FormInput
                                    label="Notes to delivery person (optional). ex: leave at front door "
                                    name="message"
                                    type="text"
                                    value={message}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="save-button-container">
                                <Button buttonType="inverted" type="submit">
                                    Save
                                </Button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="delivery-detail-summary">
                        <p>{email}</p>
                        <p>
                            {firstName}&nbsp;
                            {lastName}
                        </p>
                        <p>{deliveryAddress}</p>
                        <p>Delivery note: {message}</p>
                        <button className="edit-button" onClick={handleClick}>
                            edit
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default ShippingForm
