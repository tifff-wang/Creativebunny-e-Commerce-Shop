import React, { useState } from 'react'
import FormInput from '../Form-input/FormInput'
import Button from '../Button/Button'
import { selectedCurrentUser } from '../../Store/User/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import './ShippingForm.styles.scss'
import { setDeliveryDetailSaved } from '../../Store/Checkout/checkoutSlice'

const defaultFormFields = {
    firstName: '',
    lastName: '',
    deliveryAddress: '',
    message: '',
}

const ShippingForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { firstName, lastName, deliveryAddress, message } = formFields
    const currentUser = useSelector(selectedCurrentUser)
    const [formInEdit, setformInEdit] = useState(true)
    const dispatch = useDispatch()

    const handleChange = (event: any) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        setformInEdit(false)
        dispatch(setDeliveryDetailSaved(true))
    }

    const handleClick = (event:any) =>{
      setformInEdit(true)
      dispatch(setDeliveryDetailSaved(false))
    }
    

    return (
        <>
            {formInEdit ? (
                <div className="delivery-detail-container">
                    <h2>Delivery Detail</h2>
                    <div className="email-container">
                        <p>Email:{currentUser?.email} </p>
                        <div>Edit</div>
                    </div>

                    <form onSubmit={handleSubmit}>
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
                <div>
                    <h2>Delivery Detail</h2>
                    <div className="delivery-detail-summary">
                        <p>{currentUser?.email}</p>
                        <p>
                            {formFields.firstName}
                            {formFields.lastName}
                        </p>
                        <p>{formFields.deliveryAddress}</p>
                        <p>Delivery note: {formFields.message}</p>
                        <button className="edit-button" onClick={handleClick}>
                            edit
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default ShippingForm
