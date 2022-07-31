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
    updateCart: {
        item1: string,
        item2: string
    }
}

const Products:FC<Props> = ( { updateCart } ) => {
    const arrayofObjects: Catalog[] = catalog();

    return (
        <div id="productPage">
            {
                Object.entries(arrayofObjects).map(([key, value]) => {
                    return(
                        <div className='products' key={key}>
                            <img className='productImg' src={require(`Images/${value.img}`)} alt='product' height='100px' width='100px'></img>
                            <div>{value.description}</div>
                            <div>$ {value.price}</div>
                            <button onClick={() => {updateCart}}>Add to Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;