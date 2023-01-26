import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";
import { ProductsComponent } from "./ProductsComponent";

export function CategoriesComponent() {
    const [categories, setCategories] = useState([]);
    const [user, setUser] = useState();
    let navigate = useNavigate();
    useEffect(() => {
        {

            fetch('http://fakestoreapi.com/products/categories')
                .then(response => response.json())
                .then(data => {

                    setCategories(data);
                })
        }
    }, [])


    return (
        <div className="container">
            <div className=" justify-content-center d-flex"><h2 className="me-3 text-center">Product Categories </h2>

            </div>
            <hr className="text-grey" />

            <div className="container text-center">

                {

                    categories.map(category =>


                        <Link className="btn btn-outline-dark me-2 py-1 my-1" to={'/products/' + category}>{category.toUpperCase()}</Link>



                    )


                }
            </div>
        </div>
    )
}