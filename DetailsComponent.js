import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/action';
import { Link, useParams } from "react-router-dom";



export function DetailsComponent() {
    const [product, setProduct] = useState({});
    const [category, setCategory] = useState({});
    const params = useParams();

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
        alert(JSON.stringify(product.title + " " + "Added to Cart"));
    }


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);

            })
    }, []);
          return (
        <div className="container-fluid mt-2 p-3">
            <div>
                <h2 className="text-center">Details</h2>
                <dl className="d-flex">
                    <div className="col-3">
                        <dd>
                            <img src={product.image} width="300px" height="300px" />
                        </dd>
                    </div>
                    <div className="col-8">
                        <dt>Title</dt>
                        <dd>{product.title}</dd>
                        <dt>Price</dt>
                        <dd>${product.price}</dd>
                        <dt>Description</dt>
                        <dd>{product.description}</dd>
                        <dt>Rating</dt>
                        <dd><span className="bi bi-star-half text-warning"></span>{product.rating && product.rating.rate}[{product.rating && product.rating.count}]</dd>
                        <div>
                            <button onClick={() => addProduct(product)} className="btn btn-outline-success" ><span className="bi bi-cart4"></span> Add to Cart</button>
                            <Link to={'/products/' + product.category} className="btn btn-primary ms-2">Back to Products</Link>

                        </div>
                    </div>
                </dl>

            </div>


        </div>
    )
}