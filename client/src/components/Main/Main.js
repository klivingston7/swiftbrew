import React from "react";
import "./Main.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Main = props => (
    <React.Fragment>

        <Carousel showArrows={true} showThumbs={false} autoPlay={true} interval={4000} infiniteLoop={true}>
            <div class="carousel-item active">
                <img class="first-slide" src="/media/bannerMultCups.jpg" alt="First slide" />
                <div class="container">
                    <div class="carousel-caption text-left">
                        <h1 class="carH" style={{ fontWeight: "600" }}>Group Orders</h1>
                        <p class="carCap">Create and save order templates with ease for future use!</p>
                        <p><a class="btn btn-lg car-Btn" href="/cart" role="button">Create an Order</a></p>
                    </div>
                </div>
            </div>
            <div class="carousel-item active">
                <img class="second-slide" src="/media/bannerBeans.jpg" alt="Second slide" />
                <div class="container">
                    <div class="carousel-caption">
                        <h1 style={{ fontWeight: "600" }}>Coffee Break</h1>
                        <p class="carCap">Fuel up with any one of our craft drinks and baked treats that are sure to please.</p>
                        <p><a class="btn btn-lg car-Btn" href="/menu" role="button">Check out our Menus</a></p>
                    </div>
                </div>
            </div>
            <div class="carousel-item active">
                <img class="third-slide" src="/media/bannerPhone.jpg" alt="Third slide" />
                <div class="container">
                    <div class="carousel-caption text-right">
                        <h1 style={{ fontWeight: "600" }}>Coming Soon</h1>
                        <p class="carCap">Order directly from the app? Save your personal favorites? Split the tab by name? We're working
                               on that and more! If you have any other ideas or feedback, drop us a note.</p>
                        <p><a class="btn btn-lg car-Btn" href="/contact" role="button">Contact Us</a></p>
                    </div>
                </div>
            </div>
        </Carousel>
        {/* <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="first-slide" src="/media/bannerMultCups.jpg" alt="First slide" />
                    <div class="container">
                        <div class="carousel-caption text-left">
                            <h1 class="carH" style={{ fontWeight: "600" }}>Group Orders</h1>
                            <p class="carCap">Create and save order templates with ease for future use!</p>
                            <p><a class="btn btn-lg car-Btn" href="/cart" role="button">Create an Order</a></p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="second-slide" src="/media/bannerBeans.jpg" alt="Second slide" />
                    <div class="container">
                        <div class="carousel-caption">
                            <h1 style={{ fontWeight: "600" }}>Coffee Break</h1>
                            <p class="carCap">Fuel up with any one of our craft drinks and baked treats that are sure to please.</p>
                            <p><a class="btn btn-lg car-Btn" href="/menu" role="button">Check out our Menus</a></p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="third-slide" src="/media/bannerPhone.jpg" alt="Third slide" />
                    <div class="container">
                        <div class="carousel-caption text-right">
                            <h1 style={{ fontWeight: "600" }}>Coming Soon</h1>
                            <p class="carCap">Order directly from the app? Save your personal favorites? Split the tab by name? We're working
                               on that and more! If you have any other ideas or feedback, drop us a note.</p>
                            <p><a class="btn btn-lg car-Btn" href="/contact" role="button">Contact Us</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div> */}


        <div class="container">
            <div class="row">
                <div class="col-md-3 text-center" style={{ opacity: ".85" }}>
                    <h2 class="colHead">Coffee</h2>
                    <div class="colOver">
                        <img class="columnImg" src="/media/blkcup.jpg" alt="Coffee" />
                        <div class="overlay">
                            <p class="text">From americanos to cold brews we've got something delicious to fill your cup.</p>
                        </div>
                    </div>
                    <p><a class="btn col-Btn" href="/menu/coffee" role="button">View details &raquo;</a></p>
                </div>
                <div class="col-md-3 text-center" style={{ opacity: ".85" }}>
                    <h2 class="colHead">Frappucino</h2>
                    <div class="colOver">
                        <img class="columnImg" src="/media/frapp2.jpg" alt="Frappucino" />
                        <div class="overlay">
                            <p class="text">Looking to something a little different? Find great tasting frappucino with
      names like Ultra Caramel, Triple Mocha, and Vanilla Bean to name a few.</p>
                        </div>
                    </div>
                    <p><a class="btn col-Btn" href="/menu/frappucino" role="button">View details &raquo;</a></p>
                </div>
                <div class="col-md-3 text-center" style={{ opacity: ".85" }}>
                    <h2 class="colHead">Tea</h2>
                    <div class="colOver">
                        <img class="columnImg" src="/media/tea3.jpg" alt="Tea" />
                        <div class="overlay">
                            <p class="text">Eveything from tea lattes to iced teas to perfectly brewed cups, discover the breadth of
      handcrafted teas we offer.</p>
                        </div>
                    </div>
                    <p><a class="btn col-Btn" href="/menu/tea" role="button">View details &raquo;</a></p>
                </div>
                <div class="col-md-3 text-center" style={{ opacity: ".85" }}>
                    <h2 class="colHead">Bakery</h2>
                    <div class="colOver">
                        <img class="columnImg" src="/media/BAKED.jpg" alt="Bakery" />
                        <div class="overlay">
                            <p class="text">Choose from baked goods that are thoughtfully crafted with high-quality ingredients and the
      oh-so-good taste you’re craving. </p>
                        </div>
                    </div>
                    <p><a class="btn col-Btn" href="/menu/bakery" role="button">View details &raquo;</a></p>
                </div>
            </div>

            <hr />

        </div>
    </React.Fragment>

);

export default Main;