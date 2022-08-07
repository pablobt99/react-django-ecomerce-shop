import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import  Message from '../components/Message'
import { addToCart } from '../actions/cartActions'
import { useSearchParams, setSearchParams } from 'react-router-dom'


function CartScreen({ location }) {
    const {id} = useParams();
    const productId = id;
    const [searchParams, setSearchParams] = useSearchParams();
    const qty = searchParams.get("qty");

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems}  = cart

    useEffect(() =>{
        if(productId){
            dispatch(addToCart(productId, parseInt(qty)))
        }
    }, [dispatch, productId, qty])


    const removeFromCartHander = (id) => {
        
    }
    console.log(cartItems)
  return (
    <Row>
        <Col md={8}>
            <h1>Shoping Cart</h1>
            {cartItems.length === 0 ? (
                <Message variant='info'>
                    Youre cart is empty <Link to='/'>Go Back</Link> 
                </Message>
            ) : (
                <ListGroup>
                    {cartItems.map(item =>(
                        <ListGroup.Item key={item.product}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image} alt={item.name} fluid rounded/>
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </Col>
                                <Col md={2}>
                                    ${item.price}
                                </Col>
                                <Col md={3}>
                            <Form.Control
                            as="select"
                            value={item.qty}
                            onChange={(e) => dispatch(addToCart(item.product, parseInt(e.target.value)))}
                            >
                              {
                                [...Array(item.countInStock).keys()].map((x) => (
                                  <option key={x + 1} value={x + 1}>{x + 1}</option>
                                ))
                              }
                            </Form.Control>
                                </Col>
                                <Col md={1}>
                                    <Button
                                    type='button'
                                    variant='light'
                                    onClick={() => removeFromCartHander(item.product)}
                                    >
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Col>
        <Col md={4}>
            <Card>
                <ListGroup>
                    <ListGroup.Item>
                        <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
  )
}

export default CartScreen