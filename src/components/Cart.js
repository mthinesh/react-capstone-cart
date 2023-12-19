import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrItem, decrItem, removeItem, toggleCart } from '../reduxtoolkit/actions/cartActions';


const Cart = () => {

    const { isCartOpen, cart } = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();


    const cartTotal = cart.map(item => {
        console.log(item.price,item.quantity);
        return item.price * item.quantity;
    }).reduce((preVal, curVal) => {
        return preVal + curVal;
    }, 0);


    if (isCartOpen) {
        return (
            <>
                <div id="cart">
                    <div className="cart_content">
                        <div className="cart_head">
                            <h2>Cart <small>({cart.length})</small></h2>
                            <div
                                title="Close"
                                className="close_btn"
                                onClick={() => dispatch(toggleCart(false))}
                            >
                                {/* <span>&times;</span> */}
                            </div>
                        </div>

                        <div className="cart_body">
                            {

                                cart.map(item => {
                                    const { id, title, price,description,category, image ,quantity} = item;
                                    return (
                                        <div className="cart_items" key={id}>
                                            <figure class="cart_items_img">
                                                <img src={image}  class="img-thumbnail" alt="product-img" />
                                            </figure>

                                            <div className="cart_items_info">
                                                <h4>{title}</h4>
                                                <h3 className="price">₹ {price.toLocaleString()}</h3>
                                            </div>

                                            <div className="cart_items_quantity">
                                                <span
                                                    onClick={() => dispatch(decrItem(id))}
                                                    class="btn btn-danger"
                                                    title="Minus"
                                                >
                                                    &#8722;
                                                </span>
                                                <b>{quantity}</b>
                                                <span
                                                    onClick={() => dispatch(incrItem(id))}
                                                    class="btn btn-success"
                                                    title="Plus"
                                                >
                                                    &#43;
                                                </span>
                                            </div>

                                            <div
                                                title="Remove Item"
                                                className="cart_items_delete"
                                                onClick={() => dispatch(removeItem(id))}
                                            >
                                                <span >&times;</span>
                                            </div>
                                        </div>

                                    );
                                })
                            }
                        </div>

                        <div className="cart_foot">
                            <h3>
                                <small>Total:</small>
                                <b>₹ {cartTotal.toLocaleString()}</b>
                            </h3>

                            <button
                                type="button"
                                className="checkout_btn"
                                disabled={!cartTotal}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }


};

export default Cart;