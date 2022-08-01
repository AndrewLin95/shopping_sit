import { FC } from 'react';


interface Obj{
    description?: string,
    price?: number,
    img?: string,
    quantity?: number
}

interface Props{
   cart: Obj,
   price: number,
}

const Cart:FC<Props> = ({ cart, price }) => {

    return (
        <div id='cartPage'>
            <div id='cartHeader'>
                <div id='cartItemHeader'>Items</div>
                <div id='cartPriceHeader'>Price</div>
                <div id='cartQuantityHeader'>Quantity</div>
            </div>
            {Object.entries(cart).map(([key, value]) => {
                return(
                    <div className='cart' key={key}>
                        <img className='productImg small' src={require(`Images/${value.img}`)} alt='product'></img>
                        <div className='cartDescription'>{value.description}</div>
                        <div>$ {value.price}</div>
                        <div>{value.quantity} </div>
                    </div>
                )
            })}
            <div id='cartSpacer'></div>
            <div id='cartTotalPrice'>
                <div>Total Price:</div>
                <div id='cartPriceValue'>$ {price}</div>
            </div>
        </div>
    )
}

export default Cart;