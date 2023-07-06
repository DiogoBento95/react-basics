import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function Product() {
    let content = null;
    const { id } = useParams()
    const url = `https://64a40400c3b509573b56ec23.mockapi.io/products1/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setProduct({
            loading: true,
            data:null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    if(product.error) {
        return (
            content = <p> There seems to have been an error. </p>
        )
    }

    if(product.loading) {
        return (
            content = <Loader></Loader>
        )
    }

    if(product.data) {

        return (
            <div>
                <React.Fragment>
                    <h1 className="text-2xl font-bold mb-3"> 
                        {product.data.name} 
                    </h1>
                    <div>
                        <img
                            src={product.data.images}
                            alt={product.data.name}
                        />
                    </div>
                    <div className="font-bold text-xl mb-3">
                        $ {product.data.price}
                    </div>
                    <div>
                        {product.data.description}
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