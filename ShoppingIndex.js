import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './ShoppingIndex.css';
import { useSelector } from "react-redux";

import { HomeComponent } from "./HomeComponent";
import { CategoriesComponent } from "./CategoriesComponent";
import { ProductsComponent } from "./ProductsComponent";
import { DetailsComponent } from "./DetailsComponent";
import { Cart } from "./Cart";
import { About } from "./About"; 
import { Contact } from "./Contact";


export function ShoppingIndex() {
   // We get a state of addItems
   const state = useSelector((state) => state.handleCart)
   return (
      <div className="Container ">
         <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="container-fluid">
                  <a className="navbar-brand fw-bold fs-4" href="http://localhost:3000/home">OS COLLECTION</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item d-flex">
                           <a className="nav-link active" aria-current="page" href="/home">Home</a>
                           <a className="nav-link active" aria-current="page" href="/categories">Categories</a>
                           <a className="nav-link" aria-current="page" href="/about">About</a>
                           <a className="nav-link" aria-current="page" href="/contact">Contact</a>

                        </li>

                     </ul>
                     <div className="button d-flex ">
                     <span className="bi bi-cart4" id="count">Cart[{state.length}]</span>


                        
                     </div>
                  </div>
               </div>
            </nav>

            <section>
               <Routes>
                  <Route exact path="/home" element={<HomeComponent />} />
                  <Route exact path="/categories" element={<CategoriesComponent />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/contact" element={<Contact />} />
                  <Route exact path="/products/:category" element={<ProductsComponent />} />
                  <Route exact path="/details/:id/" element={<DetailsComponent />} />
                  <Route exact path="/Cart" element={Cart} />
                  <Route exact path="/" element={<HomeComponent />} />
                  <Route exact path="*" element={<h3><code>Page You Requested Not Found</code></h3>} />
               </Routes>
            </section>
            <footer>

            </footer>
         </BrowserRouter>
      </div>
   )
}