import React,{useEffect} from 'react';
import Message from "../Components/shared/Message";

import {useDispatch,useSelector} from 'react-redux';
import {Row,Col,Form,Button,Card,Image,ListGroup, ListGroupItem} from 'react-bootstrap';
import { addToCart,removeFormCart} from '../actions/cartAction';
import {Link,useParams,useNavigate,useLocation} from "react-router-dom";

const CartScreen = () => {
    const {id} =  useParams();
    const history = useNavigate();
    const location = useLocation();

    const qty=location.search? Number(location.search.split('=')[1]):1
    const dispatch=useDispatch()
    const cart=useSelector(state=>state.cart)
    const {cartItems}=cart;
    
    useEffect(()=>{
        if(id){
            dispatch(addToCart(id,qty))     
        }
    },[dispatch,id,qty]);

    console.log(cartItems) 

    const removeFromCartHandler=(id)=>{
        dispatch(removeFormCart(id));
    };
    const checkout=(id)=>{
        history.push("/login?redirect=shipping");
    };
    return (
    <>
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {
                    cartItems.length===0?(
                        <Message>Add Items.Your Cart is empty for Now
                            <Link to="/">Go Back</Link>
                        </Message>
                    ):(<ListGroup variant="flush">
                        {
                            cartItems.map(item=>(
                                <ListGroupItem key={item.product}>
                                    <Row>
                                        <Col md={3}>
                                        <Image src={item.image} alt={item.name}fluid rounded></Image>
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={2}>${item.price}</Col>
                                        <Col md={2}>
                                            <Form.Control as="select" value={item.qty} onChange={e => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                            {
                                                
                                                [...Array(item.countInStock).keys()].map((x)=>(
                                                <option key={x+1} value={x+1} >{x+1}</option>
                                                ))
                                            }
                                            </Form.Control>
                                            <Button type='button' variant='light' onClick={()=> removeFromCartHandler(item.product)}>
                                                <p className='text-danger'>Remove</p>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>)
                }
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>SubTotal ({cartItems.reduce((acc,item)=>acc+item.qty,0)}) items</h3>
                            ${cartItems.reduce((acc,item)=>acc+item.qty *item.price,0).toFixed(2)}
                        </ListGroupItem>
                        <Button type="button" className='btn-block' disabled={
                            cartItems.length===0} onClick={checkout} >Proceed To CheckOut</Button>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  );
};

export default CartScreen;