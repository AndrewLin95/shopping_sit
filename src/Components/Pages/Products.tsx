import React, { FC } from 'react';
import catalog from 'Assets/catalog'

interface Catalog{
    id: number,
    description: string,
    price: number,
    img: string,
    test?: {
        pizza: boolean,
        toppings: boolean
    }
}

interface Props{
    updateCart: (arg1: string, arg2: number, arg3: string, arg4: number) => void
}

const Products:FC<Props> = ({ updateCart }) => {
    const arrayofObjects: Catalog[] = catalog();

    return (
        <div id='productPage'>
            {Object.entries(arrayofObjects).map(([key, value]) => {
                return(
                    <div className='products' key={key}>
                        <img className='productImg large' src={require(`Images/${value.img}`)} alt='product'></img>
                        <div>{value.description}</div>
                        <div>$ {value.price}</div>
                        <button onClick={() => {updateCart(value.description, value.price, value.img, value.id)}}>Add to Cart</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;