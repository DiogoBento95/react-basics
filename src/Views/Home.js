import React, { useEffect, useState } from "react";
import axios from "axios";
import HelloWorld from '../Components/HelloWorld';
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Home() {
    let content = null
    const url = 'https://64a40400c3b509573b56ec23.mockapi.io/products1'
    let products = useAxiosGet(url)

    if(products.error) {
        return (
            content = <p> There seems to have been an error. </p>
        )
    }

    if(products.loading) {
        return (
            content = <Loader></Loader>
        )
    }

    if(products.data) {

        return (
            content =
            <div>
                <React.Fragment>
                    {products.data.map((product) => (
                        <div key={product.id}>
                            <ProductCard
                                product={product}
                            />
                        </div>
                    ))}
                </React.Fragment>
            </div>
        )

    }

    return (
        <React.Fragment>
            <HelloWorld name="Diogo"/>
            <h1 className='font-bold text-2xl'> Best Sellers </h1>

            {content}

        </React.Fragment>
    )
}

export default Home