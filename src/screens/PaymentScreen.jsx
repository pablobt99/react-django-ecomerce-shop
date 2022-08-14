import React , {useState, useEffect} from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { useNavigate } from "react-router";
//import { savePaymentMethod } from '../actions/cartActions'

function PaymentScreen() {
    const cart = useSelector(state => state.cart)
    const{ shippingAddress } = cart
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [paymentMethod, setPaymentMethod] = useState('PayPal')
    if(!shippingAddress.address){
        navigate('/shipping')
    }
    const submitHandler = (e) => {
      e.preventDefault()
      //dispatch(savePaymentMethod(paymentMethod))
      navigate('/placeorder')
    }
    return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>
            Select Method
            <Col>
              <Form.Check
                type='radio'
                label='Paypal or Credit Card'
                id='Paypal'
                name= 'paymentMethod'
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              >

              </Form.Check>
            </Col>
          </Form.Label>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen