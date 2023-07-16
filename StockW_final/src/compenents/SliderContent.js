import { useHistory } from 'react-router-dom';

function SliderContent({ activeIndex, sliderImage }) {
  const history = useHistory();

  const handleImageClick = () => {
    console.log('Image clicked');
    history.push('/sneakers');
  };

  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img
            className="slide-image"
            src={slide.urls}
            alt=""
            onClick={handleImageClick}
            style={{ width: "67%", height: "100%" , cursor: "pointer"}}
          />
          <h2 className="slide-title" style={{ color: 'red' }}>{slide.title}</h2>
          <h3 className="slide-text" style={{ color: 'red' }}>{slide.description}</h3>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;

