import React, { FC } from 'react';
import Catalog from '../../Assets/catalog.json';

interface catalogArray{
    id: number,
    description: string
    price: number,
}

const Products:FC = () => {
    let catalog: any = Catalog;

    console.log(Catalog);
    return (
        <div id="main">
            {
                Object.entries(catalog).map(([key, value]) => {
                    return(
                        <div>
                            {value.description} {key} {value.price}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;