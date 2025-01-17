import React from 'react'
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <>
            <section className="food_menu gray_bg">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="section_tittle">
                                <p>Popular Menu</p>
                                <h2>Delicious Food Menu</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="nav nav-tabs food_menu_nav" id="myTab" role="tablist">
                                <Link className="active" id="Special-tab" data-toggle="tab" to="/" role="tab"
                                    aria-controls="Special" aria-selected="false">Special
                                    <img src="img/icon/play.svg" alt="play" /></Link>
                                <Link id="Breakfast-tab" data-toggle="tab" to="/" role="tab" aria-controls="Breakfast"
                                    aria-selected="false">Breakfast <img src="img/icon/play.svg" alt="play" /></Link>
                                <Link id="Launch-tab" data-toggle="tab" to="/" role="tab" aria-controls="Launch"
                                    aria-selected="false">Launch <img src="img/icon/play.svg" alt="play" /></Link>
                                <Link id="Dinner-tab" data-toggle="tab" to="/" role="tab" aria-controls="Dinner"
                                    aria-selected="false">Dinner <img src="img/icon/play.svg" alt="play" /> </Link>
                                <Link id="Sneaks-tab" data-toggle="tab" to="/" role="tab" aria-controls="Sneaks"
                                    aria-selected="false">Snacks <img src="img/icon/play.svg" alt="play" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active single-member" id="Special" role="tabpanel"
                                    aria-labelledby="Special-tab">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="single_food_item media">
                                                <img src="img/food_menu/single_food_1.png" className="mr-3" alt="..." />
                                                <div className="media-body align-self-center">
                                                    <h3>Pork Sandwich</h3>
                                                    <p>They're wherein heaven seed hath nothing</p>
                                                    <h5>₹ 40.00</h5>
                                                </div>
                                            </div>
                                            <div className="single_food_item media">
                                                <img src="img/food_menu/single_food_2.png" className="mr-3" alt="..." />
                                                <div className="media-body align-self-center">
                                                    <h3>Roasted Marrow</h3>
                                                    <p>They're wherein heaven seed hath nothing</p>
                                                    <h5>₹ 40.00</h5>
                                                </div>
                                            </div>
                                            <div className="single_food_item media">
                                                <img src="img/food_menu/single_food_3.png" className="mr-3" alt="..." />
                                                <div className="media-body align-self-center">
                                                    <h3>Summer Cooking</h3>
                                                    <p>They're wherein heaven seed hath nothing</p>
                                                    <h5>₹ 40.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="single_food_item media">
                                                <img src="img/food_menu/single_food_4.png" className="mr-3" alt="..." />
                                                <div className="media-body align-self-center">
                                                    <h3>Easter Delight</h3>
                                                    <p>They're wherein heaven seed hath nothing</p>
                                                    <h5>₹ 40.00</h5>
                                                </div>
                                            </div>
                                            <div className="single_food_item media">
                                                <img src="img/food_menu/single_food_5.png" className="mr-3" alt="..." />
                                                <div className="media-body align-self-center">
                                                    <h3>Tiener Schnitze</h3>
                                                    <p>They're wherein heaven seed hath nothing</p>
                                                    <h5>₹ 40.00</h5>
                                                </div>
                                            </div>
                                            <div className="single_food_item media">
                                                <img src="img/food_menu/single_food_6.png" className="mr-3" alt="..." />
                                                <div className="media-body align-self-center">
                                                    <h3>Chicken Roast</h3>
                                                    <p>They're wherein heaven seed hath nothing</p>
                                                    <h5>₹ 40.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Menu;