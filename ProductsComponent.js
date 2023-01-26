import { useEffect, useState } from "react"
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from "react-router-dom"
import { DetailsComponent } from "./DetailsComponent";
import { Button } from "bootstrap";
import { CategoriesComponent } from "./CategoriesComponent";
import './ProductComponent.css'



export function ProductsComponent() {
    const [categoryname, setCategoryName] = useState([]);
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState();
    const params = useParams();
    let navigate = useNavigate();
    useEffect(() => {
         {
            
            setCategoryName(params.category.toUpperCase());
            fetch(`http://fakestoreapi.com/products/category/${params.category}`)
                .then(response => response.json())
                .then(data => {
                    setProducts(data);
                    data.toUpperCase();
                    console.log(data);
                })
        }
    }, [])
    return (
        <div className="container text-center">
            <div className="d-flex justify-content-center mt-2 ">
                <h2 className="text-center me-3">{categoryname}</h2>
                <Link to="/categories" className="btn btn-outline-primary py-1 my-1">Back to Categories</Link>

            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    products.map(product =>
                        <div className="card" color="yellow" style={{ width: '340px', padding: '10px', margin: '10px' }}>
                            <img key={product.id} src={product.image} width="300px" height="220px" className=" m-2 p-2" border="1" />
                            <div className="card-body" height="150px">
                                <h5 className="card-title">${product.price}</h5>
                                <p className="card-text text-primary">{product.title.substring(0, 12)}</p>
                                <Link className="btn btn-outline-success w-100" to={'/details/' + product.id} key={product.id} >Buy Now<span className="bi bi-cart4 "></span></Link>
                            </div>
                        </div>

                    )

                }
            </div>

        </div >
    )
}