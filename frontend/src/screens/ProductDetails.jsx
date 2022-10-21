import React ,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Row,Col,Button,Image,ListGroup,ListGroupItem, Form } from "react-bootstrap";
import {listProductsDetails} from '../actions/productActions'
import {useParams,useNavigate} from "react-router-dom";
import Rating from '../Components/Rating';
import {Link} from 'react-router-dom';
import Loader from '../Components/shared/Loader';
import Message from '../Components/shared/Message';


const ProductDetails = () => {
  const [qty,setQty]=useState(1);
  const dispatch=useDispatch();
  const productDetails= useSelector(state=>state.productDetails)
  const {id} = useParams();
  const history = useNavigate();
  const {loading,error,product}=productDetails;
    useEffect(()=>{
      dispatch(listProductsDetails(id))
    },[dispatch,id]);

    const addToCartHandler = () => {
      history(`/cart/${id}?qty=${qty}`)
    }

    return (
    <div>
      <Link to='/' className='btn'>
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
        Go Back</Link>
      {
      loading ? <Loader/> : error ? <Message variant="danger">{error}</Message>:
      
        <Row>
        <Col md={6}>
        <Image src={product.image} alt={product.name } fluid ></Image>
        </Col> 
        <Col md ={3}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>{product .name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={product.rating} text={`${product.numReviews} Reviews`}/>
            </ListGroupItem>
            <ListGroupItem>Price: ${product.price}</ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroupItem>
            <Row>
              <Col>Status :</Col>
              <Col >{product.countInStock >0 ? `${product.countInStock} In stock`:'out of stock'}</Col>
            </Row>
          </ListGroupItem>
          {
            product.countInStock > 0 &&(
              <ListGroupItem>
                <Row>
                  <Col>Qty</Col>
                  <Form.Control as="select" value={qty} onChange={e => setQty(e.target.value)}>
                  {
                    
                    [...Array(product.countInStock).keys()].map((x)=>(
                      <option key={x+1} value={x+1} >{x+1}</option>
                    ))
                  }
                  </Form.Control>
                </Row>
              </ListGroupItem>
            )
          }
          <ListGroupItem>
              <Button onClick={addToCartHandler} className='btn-block my-3 ' type='button'  disabled={product.countInStock===0}>Add to Cart</Button>
          </ListGroupItem>
        </Col>
        </Row>
      }
    </div>
  )
}

export default ProductDetails