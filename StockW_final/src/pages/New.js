import Navbar from '../compenents/Navbar.js';
import Footer from '../compenents/Footer.js';
import { Link } from 'react-router-dom';

import React, { useEffect, useState } from "react";
import SliderContent from "../compenents/SliderContent.js";
import Dots from "../compenents/Dots.js";
import Arrows from "../compenents/Arrows.js";
import sliderImage from "../data/slider_news.js";
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarElement } from 'chart.js';

Chart.register(LinearScale, CategoryScale, BarElement);

const len = sliderImage.length - 1;


function New(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const chartData = {
    labels: ['Nike', 'Adidas', 'Jordan', 'Dior', 'Louis Vuitton'],
    datasets: [
      {
        label: 'USA',
        data: [4888, 3200, 2400, 1800, 1200],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Canada',
        data: [2353, 4231, 3213, 1700, 1000],
        backgroundColor: 'rgba(239, 207, 227,0.6)',
        borderColor: 'rgba(239, 207, 227, 1)',
        borderWidth: 1,
      },
      {
        label: 'France',
        data: [1111, 2222, 3333, 4003, 4666],
        backgroundColor: 'rgba(60, 179, 113, 0.6)',
        borderColor: 'rgba(60, 179, 113, 1)',
        borderWidth: 1,
      },

      {
        label: 'England',
        data: [3000, 2600, 2200, 1700, 1000],
        backgroundColor: 'rgba(90, 34, 139, 0.6)',
        borderColor: 'rgba(90, 34, 139, 1)',
        borderWidth: 1,
      },

      {
        label: 'China',
        data: [3900, 3467, 3231, 1700, 1000],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Sales',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Brands',
        },
      },
    },

  };



  return (
    <>
      <Navbar />


      <div className="quick_click_3">
        <div className="container">
          <Link to="/sneakers" className="navbar-link Sneakersq-link">
            <div className="text-q">Sneakers</div>
          </Link>

          <a href="/shoes" className="navbar-link Shoesq-link">
            <div className="text-q">Shoes</div>
          </a>
        </div>
      </div>


      <div className="slider-container" >
        <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />
        <Dots
          activeIndex={activeIndex}
          sliderImage={sliderImage}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>

      <div className="Chart" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '400px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Monthly Top 5 Brand Sales Chart</h1>
          <Bar data={chartData} options={chartOptions} />
          <div className="legend">
            <span style={{ color: 'blue' }}>USA</span> |
            <span style={{ color: 'pink' }}>Canada</span>|
            <span style={{ color: 'green' }}>France</span>|
            <span style={{ color: 'purple' }}>England</span>|
            <span style={{ color: 'red' }}>China</span>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}




export default New;