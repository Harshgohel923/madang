import React from 'react'
import { Link } from 'react-router-dom';

const Chefs = () => {
    return (
        <>
            <section className="chefs_part blog_item_section section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="section_tittle">
                                <p>Team Member</p>
                                <h2>Our Experience Chefs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src="img/team/chefs_1.png" alt="" />
                                </div>
                                <div className="single_blog_text text-center">
                                    <h3>Adam Billiard</h3>
                                    <p>Chef Master</p>
                                    <div className="social_icon">
                                        <Link to="/"> <i className="ti-facebook"></i> </Link>
                                        <Link to="/"> <i className="ti-twitter-alt"></i> </Link>
                                        <Link to="/"> <i className="ti-instagram"></i> </Link>
                                        <Link to="/"> <i className="ti-skype"></i> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src="img/team/chefs_2.png" alt="" />
                                </div>
                                <div className="single_blog_text text-center">
                                    <h3>Fred Macyard</h3>
                                    <p>Chef Master</p>
                                    <div className="social_icon">
                                        <Link to="/"> <i className="ti-facebook"></i> </Link>
                                        <Link to="/"> <i className="ti-twitter-alt"></i> </Link>
                                        <Link to="/"> <i className="ti-instagram"></i> </Link>
                                        <Link to="/"> <i className="ti-skype"></i> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src="img/team/chefs_3.png" alt="" />
                                </div>
                                <div className="single_blog_text text-center">
                                    <h3>Justin Stuard</h3>
                                    <p>Chef Master</p>
                                    <div className="social_icon">
                                        <Link to="/"> <i className="ti-facebook"></i> </Link>
                                        <Link to="/"> <i className="ti-twitter-alt"></i> </Link>
                                        <Link to="/"> <i className="ti-instagram"></i> </Link>
                                        <Link to="/"> <i className="ti-skype"></i> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src="img/team/chefs_1.png" alt="" />
                                </div>
                                <div className="single_blog_text text-center">
                                    <h3>Justin Stuard</h3>
                                    <p>Chef Master</p>
                                    <div className="social_icon">
                                        <Link to="/"> <i className="ti-facebook"></i> </Link>
                                        <Link to="/"> <i className="ti-twitter-alt"></i> </Link>
                                        <Link to="/"> <i className="ti-instagram"></i> </Link>
                                        <Link to="/"> <i className="ti-skype"></i> </Link>
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
export default Chefs;