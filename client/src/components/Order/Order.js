import React from "react";
import "./Order.css";

const Order = props => (
    <div>
        <div className="container">
            <header className="">
                <h1>Order Templates</h1>
            </header>
            <hr />
            <div className="show">
                <a className="btn car-Btn" href="/cart">
                    Current Order
            </a>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Monday Crew</h2>

                            <table className="table">
                                <tr>
                                    <th>Product</th>
                                    <th>Category</th>
                                    <th>Cost</th>
                                </tr>
                                <tr>
                                    <td>Swift Brewed - Blonde</td>
                                    <td>Hot Coffee</td>
                                    <td>$2.45</td>
                                </tr>
                                <tr>
                                    <td>Cold Brew</td>
                                    <td>Cold Coffee</td>
                                    <td>$3.25</td>
                                </tr>
                                <tr>
                                    <td>Caffe Americano</td>
                                    <td>Hot Coffee</td>
                                    <td>$2.95</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Leadership Team</h2>

                            <table className="table">
                                <tr>
                                    <th>Product</th>
                                    <th>Category</th>
                                    <th>Cost</th>
                                </tr>
                                <tr>
                                    <td>Vanilla Bean Creme</td>
                                    <td>Cold Frappucino</td>
                                    <td>$3.95</td>
                                </tr>
                                <tr>
                                    <td>Chai Tea Latte</td>
                                    <td>Hot Tea</td>
                                    <td>$4.25</td>
                                </tr>
                                <tr>
                                    <td>Flat White</td>
                                    <td>Hot Coffee</td>
                                    <td>$5.12</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    </div>
);
export default Order;