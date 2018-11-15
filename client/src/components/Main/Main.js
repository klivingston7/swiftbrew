import React from "react";
import "./Main.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Main = props => (
    <React.Fragment>

        <Carousel showArrows={true} showThumbs={false} autoPlay={true} interval={4000} infiniteLoop={true}>
            <div className="carousel-item active">
                <img className="first-slide" src="/media/bannerMultCups.jpg" alt="First slide" />
                <div className="container">
                    <div className="carousel-caption text-left">
                        <h1 className="carH" style={{ fontWeight: "600" }}>Group Orders</h1>
                        <p className="carCap">Create and save order templates with ease for future use!</p>
                        <p><a className="btn btn-lg car-Btn" href="/cart" role="button">Create an Order</a></p>
                    </div>
                </div>
            </div>
            <div className="carousel-item active">
                <img className="second-slide" src="/media/bannerBeans.jpg" alt="Second slide" />
                <div className="container">
                    <div className="carousel-caption">
                        <h1 className="carH" style={{ fontWeight: "600" }}>Coffee Break</h1>
                        <p className="carCap">Fuel up with any one of our craft drinks and baked treats that are sure to please.</p>
                        <p><a className="btn btn-lg car-Btn" href="/menu" role="button">Check out our Menus</a></p>
                    </div>
                </div>
            </div>
            <div className="carousel-item active">
                <img className="third-slide" src="/media/bannerPhone.jpg" alt="Third slide" />
                <div className="container">
                    <div className="carousel-caption text-right">
                        <h1 className="carH" style={{ fontWeight: "600" }}>Coming Soon</h1>
                        <p className="carCap">Order directly from the app? Save your personal favorites? Split the tab by name? We're working
                               on that and more! If you have any other ideas or feedback, drop us a note.</p>
                        <p><a className="btn btn-lg car-Btn" href="/contact" role="button">Contact Us</a></p>
                    </div>
                </div>
            </div>
        </Carousel>

        <div className="container main">
            <div className="row">
                <div className="col-md-3 text-center" style={{ opacity: ".85" }}>
                    <h2 className="colHead">Coffee</h2>
                    <div className="colOver">
                        <img className="columnImg" src="/media/blkcup.jpg" alt="Coffee" />
                        <div className="overlay">
                            <p className="text">From americanos to cold brews we've got something delicious to fill your cup.</p>
                        </div>
                    </div>
                    <p className="mainBTN"><a className="btn col-Btn" href="/menu/coffee" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-md-3 text-center" style={{ opacity: ".85" }}>
                    <h2 className="colHead">Frappucino</h2>
                    <div className="colOver">
                        <img className="columnImg" src="/media/frapp2.jpg" alt="Frappucino" />
                        <div className="overlay">
                            <p className="text">Looking to something a little different? Try one of our frappucinos that're sure to
                            satisfy your tastebuds.</p>
                        </div>
                    </div>
                    <p className="mainBTN"><a className="btn col-Btn" href="/menu/frappucino" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-md-3 text-center" style={{ opacity: ".85" }}>
                    <h2 className="colHead">Tea</h2>
                    <div className="colOver">
                        <img className="columnImg" src="/media/tea3.jpg" alt="Tea" />
                        <div className="overlay">
                            <p className="text">Eveything from tea lattes to iced teas to perfectly brewed cups, discover the breadth of
      handcrafted teas we offer.</p>
                        </div>
                    </div>
                    <p className="mainBTN"><a className="btn col-Btn" href="/menu/tea" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-md-3 text-center" style={{ opacity: ".85" }}>
                    <h2 className="colHead">Bakery</h2>
                    <div className="colOver">
                        <img className="columnImg" src="/media/BAKED.jpg" alt="Bakery" />
                        <div className="overlay">
                            <p className="text">Choose from baked goods that are thoughtfully crafted with high-quality ingredients and the
      oh-so-good taste you’re craving. </p>
                        </div>
                    </div>
                    <p className="mainBTN"><a className="btn col-Btn" href="/menu/bakery" role="button">View details &raquo;</a></p>
                </div>
            </div>

            <hr />

        </div>
    </React.Fragment>

);

export default Main;