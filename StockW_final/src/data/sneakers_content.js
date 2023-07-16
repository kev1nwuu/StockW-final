import nikeImage1 from "../images/sneakers/1.avif";
import nikeImage2 from "../images/sneakers/2.avif";
import adidas1 from "../images/sneakers/3.avif";
import JordanImage1 from "../images/sneakers/4.avif";
import adidas2 from "../images/sneakers/5.avif";
import JordanImage2 from "../images/sneakers/6.avif";
import converseImage1 from "../images/sneakers/7.avif";
import adidas3 from "../images/sneakers/8.avif";
import converseImage2 from "../images/sneakers/9.avif";
import JordanImage3 from "../images/sneakers/10.avif";

const productData = [
    {
      id: 1,
      name: "Nike Dunk Low Retro White Black",
      image:
      nikeImage1,
      productType: "Nike",
      price: 220,
      size: [5,6,7, 8, 9, 10, 11, 12, 13, 14, 15],
      type: ["Men", "Women"]
    },
    {
      id: 2,
      name: "Nike Air Force 1 Low '07",
      image:
      nikeImage2,
      productType: "Nike",
      price: 169,
      size: [5,6,7, 8, 9, 10,11,12,13,14,15],
      type: ["Men", "Women"]
    },
    {
      id: 3,
      name: "adidas Samba OG",
      image:
      adidas1,
      productType: "Adidas",
      price: 177,
      size: [7, 8, 9, 10,11,12,13,14,15],
      type: "Men"

    }, 

    {
      id: 4,
      name: "Jordan 1 Travis Scott Reverse Mocha",
      image:
      JordanImage1,
      productType: "Air Jordan",
      price: 1139,
      size: [7, 8, 9, 10,11,12,13,14,15],
      type: "Men"
    },
    {
      id: 5,
      name: "adidas Yeezy Slide",
      image:
      adidas2,
      productType: "Adidas",
      price: 185,
      size: [5,6,7, 8, 9, 10, 11, 12, 13, 14, 15],
      type: ["Men", "Women"]
    },
    {
      id: 6,
      name: "Jordan 1 Fragment x Travis Scott",
      image:
      JordanImage2,
      productType: "Air Jordan",
      price: 1419,
      size: [7, 8, 9, 10,11,12,13,14,15],
      type: "Men"
    },
    {
      id: 7,
      name: "Converse Chuck Taylor All-Star 70",
      image:
      converseImage1,
      productType: "Converse",
      price: 170,
      size: [5,6,7, 8, 9, 10, 11, 12, 13, 14, 15],
      type: ["Men", "Women"]
    },
    {
      id: 8,
      name: "adidas adiFOM Stan Smith Mule",
      image:
      adidas3,
      productType: "Adidas",
      price: 190,
      size: [5, 6, 7, 8, 9, 10, 11],
      type: "Women"
    },
    {
      id: 9,
      name: "Converse Chuck Taylor All-Star Lift Platform",
      image:
      converseImage2,
      productType: "Converse",
      price: 179,
      size: [5, 6, 7, 8, 9, 10, 11],
      type: "Women"
    },
    {
      id: 10,
      name: "Jordan 11 Retro",
      image:
      JordanImage3,
      productType: "Air Jordan",
      price: 80,
      size: [1, 2, 3, 4, 5],
      type: "Child"
    }

    
  ];
  export default productData;