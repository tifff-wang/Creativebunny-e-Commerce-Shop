import React, {
    ChangeEvent,
    FormEvent,
    MouseEvent,
    useEffect,
    useState,
} from 'react'
import FormInput from '../Form-input/FormInput'
import Button from '../Button/Button'
import { selectedCurrentUser } from '../../Store/User/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import './ShippingForm.styles.scss'
import {
    setDeliveryDetailSaved,
    setDeliveryInfo,
} from '../../Store/Checkout/checkoutSlice'
import {
    currentDeliveryDetailSaved,
    currentDeliveryInfoStatus,
} from '../../Store/Checkout/checkoutSelector'

const ShippingForm = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectedCurrentUser)
    const currentDeliveryInfo = useSelector(currentDeliveryInfoStatus)
    const isDeliveryInfoSaved = useSelector(currentDeliveryDetailSaved)
    const [formFields, setFormFields] = useState(currentDeliveryInfo)
    const { email, firstName, lastName, deliveryAddress, message } = formFields
    const [formInEdit, setformInEdit] = useState(!isDeliveryInfoSaved)

    useEffect(() => {
        if (currentUser?.email && !formFields.email) {
            setFormFields((prevFields) => ({
                ...prevFields,
                email: currentUser.email,
            }))
        }
    }, [currentUser, formFields.email])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setformInEdit(false)
        dispatch(setDeliveryDetailSaved(true))
        dispatch(setDeliveryInfo(formFields))
    }

    const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
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
                                    id="email-input"
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
                                    id="firstName-input"
                                    name="firstName"
                                    type="text"
                                    value={firstName}
                                    onChange={handleChange}
                                    required
                                />

                                <FormInput
                                    label="Last name"
                                    id="lastName-input"
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
                                    id="deliveryAddress-input"
                                    name="deliveryAddress"
                                    type="text"
                                    value={deliveryAddress}
                                    onChange={handleChange}
                                    required
                                />

                                <FormInput
                                    label="Notes to delivery person (optional). ex: leave at front door"
                                    id="message-input"
                                    name="message"
                                    type="text"
                                    value={message}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="save-button-container">
                                <Button buttonType="default" type="submit">
                                    Save
                                </Button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="delivery-detail-summary">
                        <p>{currentDeliveryInfo.email}</p>
                        <p>
                            {currentDeliveryInfo.firstName}&nbsp;
                            {lastName}
                        </p>
                        <p>{currentDeliveryInfo.deliveryAddress}</p>
                        <p>Delivery note: {currentDeliveryInfo.message}</p>
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
