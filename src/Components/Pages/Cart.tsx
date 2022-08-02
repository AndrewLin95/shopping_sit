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
   totalQty: number,
   removeItem: (arg1: number) => void
}

const Cart:FC<Props> = ({ cart, price, totalQty, removeItem }) => {

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
                        <button onClick={() => {removeItem(value.id)}}>Remove</button>
                    </div>
                )
            })}
            <div id='cartSpacer'></div>
            <div id='cartTotalPrice'>
                <div id='totalPriceText'>Total Price:</div>
                <div id='cartPriceValue'>$ {price}</div>
                <div id='totalQty'>{totalQty}</div>
            </div>
        </div>
    )
}

export default Cart;