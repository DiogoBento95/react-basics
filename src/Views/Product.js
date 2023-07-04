import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams()
    const url = `https://64a40400c3b509573b56ec23.mockapi.io/products1/${id}`
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProduct(response.data)
            })
    }, [url])

    if(product) {

        return (
            <div>
                <React.Fragment>
                    <h1 className="text-2xl font-bold mb-3"> 
                        {product.name} 
                    </h1>
                    <div>
                        <img
                            src={product.images}
                            alt={product.name}
                        />
                    </div>
                    <div className="font-bold text-xl mb-3">
                        $ {product.price}
                    </div>
                    <div>
                        {product.description}
                    </div>
                </React.Fragment>
            </div>
        )

    }

    return (
        <div>
            <React.Fragment>
                <h1> Sorry, we couldn't find what you're looking for. </h1>
            </React.Fragment>
        </div>
    )

}

export default Product