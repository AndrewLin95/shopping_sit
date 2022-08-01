import { FC } from 'react';


interface Obj{
    description: string,
    price: number,
    img: string,
    quantity: number
}

interface Props{
    [key: string]: any
}

const Cart:FC<Props> = ( cart ) => {

    return (
        <div>  
            {Object.entries(cart).map(([key, value]) => {
                return(
                    <div>
                        Test
                    </div>
                )
            })

            }
        </div>
    )
}

export default Cart;