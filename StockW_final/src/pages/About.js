import styles from '../pages_css/About.css';
import Navbar from '../compenents/Navbar.js';
import Footer from '../compenents/Footer.js';
import React, { useEffect } from 'react';

import image1 from '../images/About/StockXchange-Paris-26-1200x800.avif'
import image2 from '../images/About/Committed_To_Whats_Right-400x400.png'
import image3 from '../images/About/Champions_For_Our_Custoemr-400x400.png'
import image4 from '../images/About/Hungry_For-Whats_Next-400x400.png'
import human1 from '../images/About/site-Greg-1-800x800.avif'
import human2 from '../images/About/site-Laura-2-800x800.avif'
import human3 from '../images/About/19.jpg'


const About = () => {
    const handleScroll = () => {
        const navbar = document.querySelector('.stickynavbar');
        const scrolled = window.scrollY > 0;

        if (scrolled) {
            navbar.classList.add('stickynavbar--scrolled');
        } else {
            navbar.classList.remove('stickynavbar--scrolled');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (

        <div className="About">
            <Navbar />

            <div className="stickynavbar w-nav">
                <div className="navbarcontainer-5 w-container">
                    <div className="navbar-content-8">
                        <div className="navbar-brand-6">
                            <div className="text-23">Company</div>
                        </div>
                        <nav role="navigation" className="navbar-menu-5 w-nav-menu">
                            <a href="#overview" className="navbar-link-11 w-nav-link" >
                                <div className="text-23">Overview</div>
                            </a>
                            <a href="#leadership" className="navbar-link-12 w-nav-link" >
                                <div className="text-23">Leadership</div>
                            </a>
                            <a href="#core-values" className="navbar-link-13 w-nav-link" >
                                <div className="text-23">Core Values</div>
                            </a>
                        </nav>
                    </div>

                </div>
            </div>
            <div id="overview" className="overview">
                <div className="container-12">
                    <div className="column-14">
                        <div className="image-wrapper">
                            <img
                                src={image1}
                                loading="lazy"
                                width="560"
                                height="392.90045166015625"
                                alt=""
                                className="image"
                            />
                        </div>
                    </div>
                    <div className="column-15">
                        <div className="column-15">
                            <div className="text-24">Purpose</div>
                            <div className="text-25">
                                To empower everyone to connect to culture through their passions.<br></br>
                                To be the trusted global platform for consuming and trading current culture.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="leadership" className="team-rectangles">
                <div className="container-13">
                    <div className="section-title-4">
                        <div className="text-26">Our Leadership</div>
                    </div>
                    <div className="columns-4">
                        <div className="card">
                            <div className="image-wrapper-2">
                                <img
                                    src={human1}
                                    loading="lazy"
                                    width="368"
                                    height="180"
                                    alt=""
                                    className="image-2"
                                />
                            </div>
                            <div className="info">
                                <div className="name">Kevin Cutler</div>
                                <div className="description">As StockW CEO, Kevin Cutler leads a team of more than 1,500 employees and oversees operations in North America, Europe, and Asia. Prior to joining StockX, Scott served as senior vice president of the Americas at eBay and president of StubHub.</div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image-wrapper-2">
                                <img
                                    src={human2}
                                    loading="lazy"
                                    width="368"
                                    height="180"
                                    alt=""
                                    className="image-2"
                                />
                            </div>
                            <div className="info">
                                <div className="name">Laura Lewis</div>
                                <div className="description">Laura Lewis is a co-founder of StockW and today serves as a chief operating officer she has been at the forefront of the mobile applications industry since its inception and led design and development for some of the first mobile phone applications available in </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image-wrapper-2">
                                <img
                                    src={human3}
                                    loading="lazy"
                                    width="368"
                                    height="180"
                                    alt=""
                                    className="image-2"
                                />
                            </div>
                            <div className="info">
                                <div className="name">Andy Lisk</div>
                                <div className="description">As StockW's chief people officer, Andy Lisk leads the company's global human resources department, which encompasses its training and leadership development, diversity and inclusion, and talent recruitment functions.Andy previously served as chief people officer at Zenefits. </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="core-values" className="core-values">
                <div className="columns-5">
                    <div className="column-15">
                        <div className="content-6">
                            <div className="intro">
                                <div className="title">Core Values</div>
                            </div>
                        </div>
                    </div>
                    <div className="intro">
                        <div className="feature">
                            <img
                                src={image2}
                                loading="lazy"
                                width="80"
                                height="80"
                                alt=""
                                className="image-3"
                                style={{ border: '2px solid black' }}
                            />
                            <div className="text-22">
                                We believe in the power of truth, authenticity, and transparency. We do the right thing, and we do it right.
                            </div>
                        </div>
                        <div className="feature">
                            <img
                                src={image3}
                                loading="lazy"
                                width="80"
                                height="80"
                                alt=""
                                className="image-3"
                                style={{ border: '2px solid black' }}
                            />
                            <div className="text-22">
                                We’re always listening and always learning so we can deliver the quality experience our customers deserve every single day.
                            </div>
                        </div>
                        <div className="feature">
                            <img
                                src={image4}
                                loading="lazy"
                                width="80"
                                height="80"
                                alt=""
                                className="image-3"
                                style={{ border: '2px solid black' }}
                            />
                            <div className="text-22">
                                We are committed to learning, growing and disrupting. We push ourselves and each other against the status quo, and we are not afraid to make mistakes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>

    );
};

export default About;