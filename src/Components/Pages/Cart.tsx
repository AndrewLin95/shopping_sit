import { FC } from 'react';


interface Obj{
    description?: string,
    price?: number,
    img?: string,
    quantity?: number
}

interface Props{
   [key: string]: Obj
}

const Cart:FC<Props> = ({ cart }) => {

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
            <div>
                <div>Total Price:</div>
                <div></div>
            </div>
        </div>
    )
}

export default Cart;