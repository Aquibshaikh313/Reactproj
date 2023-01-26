import { Link } from "react-router-dom";

import './HomeComponent.css';


export function HomeComponent() {
    return (
        <div className="text-center">
            <h2 className="home">Shopping Home</h2>
           
            <div id="carouselExampleDark" class="carousel carousel-dark slide mt-2" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 3"></button>

                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src="/Images/bg.png" class="d-block w-100" height="500px" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                              
                            </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="/Images/mens.png" class="d-block w-100" height="500px" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                              
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/Images/womens.png" class="d-block w-100" height="500px" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                              
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/Images/jewellery.png" class="d-block w-100"height="500px" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                              
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}
