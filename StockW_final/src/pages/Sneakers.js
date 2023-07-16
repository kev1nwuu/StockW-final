import React, { useState } from 'react';
import Navbar from '../compenents/Navbar.js';
import Footer from '../compenents/Footer.js';
import styles from '../pages_css/Sneakers.css';
import Products from '../compenents/products';
import contents1 from '../data/sneakers_content.js';


import { Link } from 'react-router-dom';

const FacetedSearch = ({ facets, onFilterChange }) => {
    return (
        <div className="faceted-search-container">
            {facets.map(facet => (
                <div key={facet.name} className="facet">
                    <h3>{facet.name}</h3>
                    {facet.filters.map(filter => (
                        <div key={filter.name}>
                            <label>{filter.name}</label>
                            <input
                                type="checkbox"
                                checked={filter.checked}
                                onChange={() => onFilterChange(facet.name, filter.name)}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};


const Sneakers = () => {
    const [facets, setFacets] = useState([
        {
            name: "Brand",
            filters: [
                { name: "Nike", checked: false },
                { name: "Air Jordan", checked: false },
                { name: "Converse", checked: false },
                { name: "Adidas", checked: false }

            ]
        },
        {
            name: "Size",
            filters: [...Array(14).keys()].map(i => ({ name: i + 1, checked: false })).concat([{ name: 15, checked: false }])
        },

        {
            name: "Type",
            filters: [
                { name: "Men", checked: false },
                { name: "Women", checked: false },
                { name: "Child", checked: false }
            ]
        },

        {
            name: "Price",
            filters: [
                { name: "Under $100", checked: false },
                { name: "$100 - $500", checked: false },
                { name: "$500 - $1000", checked: false },
                { name: "$1000 - $2000", checked: false },
                { name: "$2000+", checked: false },
            ]
        }
    ]);

    const handleFilterChange = (facetName, filterName) => {
        setFacets(prevFacets => {
            // Find the index of the facet that was changed
            const facetIndex = prevFacets.findIndex(facet => facet.name === facetName);
            // Find the index of the filter that was changed
            const filterIndex = prevFacets[facetIndex].filters.findIndex(filter => filter.name === filterName);
            // Create a new array of facets with the updated filter
            const newFacets = [...prevFacets];
            newFacets[facetIndex] = {
                ...newFacets[facetIndex],
                filters: newFacets[facetIndex].filters.map((filter, index) => index === filterIndex ? { ...filter, checked: !filter.checked } : { ...filter, checked: false })
            };
            return newFacets;
        });
    };

    const filteredProducts = contents1.filter(product => {
        // Check if any brand filters are selected
        const brandFilters = facets.find(facet => facet.name === "Brand").filters;
        const selectedBrands = brandFilters.filter(filter => filter.checked).map(filter => filter.name);
        if (selectedBrands.length > 0 && !selectedBrands.includes(product.productType)) {
            return false;
        }

        // Check if any size filters are selected
        const sizeFilters = facets.find(facet => facet.name === "Size").filters;
        const selectedSizes = sizeFilters.filter(filter => filter.checked).map(filter => filter.name);
        if (selectedSizes.length > 0 && !selectedSizes.some(size => product.size.includes(size))) {
            return false;
        }

        // Check if any type filters are selected
        const typeFilters = facets.find(facet => facet.name === "Type").filters;
        const selectedTypes = typeFilters.filter(filter => filter.checked).map(filter => filter.name);
        if (selectedTypes.length > 0 && !selectedTypes.some(type => product.type.includes(type))) {
            return false;
        }

        // Check if any price filters are selected
        const priceFilters = facets.find(facet => facet.name === "Price").filters;
        const selectedPrices = priceFilters.filter(filter => filter.checked).map(filter => filter.name);
        if (selectedPrices.length > 0) {
            let inRange = false;
            for (const priceRange of selectedPrices) {
                const [minPrice, maxPrice] = priceRange.split(" - ").map(price => parseInt(price.replace(/[^\d]/g, "")));
                if (product.price >= minPrice && (maxPrice === undefined || product.price <= maxPrice)) {
                    inRange = true;
                    break;
                }
            }
            if (!inRange) {
                return false;
            }
        }

        return true;
    });


    return (
        <div className="sd-sneakers">
            <Navbar />
            <div className="quick_click_3">
                <div className="container">
                    <Link to="/sneakers" className="navbar-link Sneakersq-link" >
                        <div className="text-q1">Sneakers</div>
                    </Link>

                    <Link to="/Shoes" className="navbar-link Shoesq-link">
                        <div className="text-q2">Shoes</div>
                    </Link>

                </div>
            </div>


            <div className="sneakers-container">
                <h2 className="sneakers-title">Sneakers</h2>
                <h3 className="sneakers-description">
                    Every sneaker you want is always available and verified by StockW. Buy new sneakers from Air Jordan, adidas, Nike, Converse, and more coming soon!
                </h3>
            </div>

            <div className="columns-container">
                <div className="sneakers-left">
                    <FacetedSearch
                        facets={facets}
                        onFilterChange={handleFilterChange}
                    />
                </div>

                <div className="sneakers-right">
                    <div className="vectors-wrapper-3"></div>
                    <div className="sneakers-right-display">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.slice(0, 10).map(content => (
                                <Products
                                    key={content.id}
                                    image={content.image}
                                    name={content.name}
                                    price={content.price}
                                />
                            ))
                        ) : (
                            <div className="sorry">
                                <p>Nothing to see here! Please change your filters.</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Sneakers;
