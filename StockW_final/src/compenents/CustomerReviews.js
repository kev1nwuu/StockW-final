import React, { useState } from 'react';
import stlye from './CustomerReviews.css'

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([
        {
            name: 'John Doe',
            rating: 4,
            size: 'US 9',
            description: 'Great shoes, very comfortable and stylish.',
        },
        {
            name: 'Jane Smith',
            rating: 5,
            size: 'US 7',
            description: 'I love these sneakers! Perfect fit and excellent quality.',
        },
        {
            name: 'Sam Johnson',
            rating: 3,
            size: 'US 8',
            description: 'Decent shoes, but they could be more durable.',
        },
    ]);

    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [selectedSize, setSelectedSize] = useState('');
    const [description, setDescription] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(Number(e.target.value));
    };

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmitReview = (e) => {
        e.preventDefault();

        const newReview = {
            name: name,
            rating: rating,
            size: selectedSize,
            description: description,
        };

        setReviews([...reviews, newReview]);

        // Clear form fields
        setName('');
        setRating(0);
        setSelectedSize('');
        setDescription('');
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starClass = i <= rating ? 'star-filled' : 'star-empty';
            stars.push(<span key={i} className={`star ${starClass}`} />);
        }
        return stars;
    };

    return (
        <div className="customerReviews">
            <div className="totalRatings">
                <h3>Total Ratings</h3>
                <div className="ratingStars">{renderStars(4)}</div>

                <div className="addReview">
                    <h3>Add a Review</h3>
                    <form onSubmit={handleSubmitReview}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" value={name} onChange={handleNameChange} required />
                        </div>
                        <div>
                            <label htmlFor="rating">Rating:</label>
                            <select id="rating" value={rating} onChange={handleRatingChange} required>
                                <option value={0}>Select rating</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="size">Size:</label>
                            <input type="text" id="size" value={selectedSize} onChange={handleSizeChange} required />
                        </div>
                        <div>
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" value={description} onChange={handleDescriptionChange} required />
                        </div>
                        <button type="submit">Post</button>
                    </form>
                </div>
            </div>
            <div className="customerComments">
                <h2>Customer Reviews</h2>
                {reviews.length === 0 ? (
                    <p>No reviews yet.</p>
                ) : (
                    reviews.map((review, index) => (
                        <div key={index} className="review">
                            <div className="reviewHeader">
                                <span className="reviewerName">{review.name}</span>
                                <div className="ratingStars">{renderStars(review.rating)}</div>
                            </div>
                            <div className="reviewBody">
                                <p className="reviewSize">Size: {review.size}</p>
                                <p className="reviewDescription">{review.description}</p>
                            </div>
                        </div>
                    ))
                )}
                
            </div>
        </div>
    );
};

export default CustomerReviews;
