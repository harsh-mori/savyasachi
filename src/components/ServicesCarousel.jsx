import { useState } from 'react';
import { siteData } from '../data/siteData';
import './ServicesCarousel.css';

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const services = siteData.services;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="services-carousel-premium">
      <div className="carousel-container-premium">
        {/* Left Side - Image with Overlay */}
        <div className="carousel-left">
          <div className="image-container-premium">
            {services.map((service, index) => (
              <div
                key={index}
                className={`image-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={service.image} alt={service.title} />
                <div className="image-overlay-gradient"></div>
              </div>
            ))}

            {/* Big Number Overlay */}
            <div className="number-overlay">
              <span className="big-number">{String(currentSlide + 1).padStart(2, '0')}</span>
            </div>

            {/* Service Title on Image */}
            <div className="image-title">
              <h2>{services[currentSlide].title}</h2>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="carousel-right">
          <div className="content-area">
            {/* Progress Sidebar */}
            <div className="progress-sidebar">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`progress-line ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'completed' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  <span className="progress-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="content-main">
              <div className="content-inner" key={currentSlide}>
                <div className="label-section">
                  <span className="service-label">Service {String(currentSlide + 1).padStart(2, '0')}</span>
                  <div className="label-line"></div>
                </div>

                <h3 className="service-title-premium">{services[currentSlide].title}</h3>

                <p className="service-description-premium">
                  {services[currentSlide].description}
                </p>

                <div className="features-premium">
                  <div className="features-header">Key Features</div>
                  <div className="features-list">
                    {services[currentSlide].features.map((feature, index) => (
                      <div key={index} className="feature-premium">
                        <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
                        <div className="feature-content">{feature}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="nav-controls-premium">
                  <button
                    className="nav-btn-premium prev"
                    onClick={prevSlide}
                    aria-label="Previous"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                    </svg>
                  </button>

                  <div className="nav-indicator-premium">
                    <span>{currentSlide + 1}</span>
                    <div className="indicator-bar">
                      <div
                        className="indicator-fill"
                        style={{ width: `${((currentSlide + 1) / services.length) * 100}%` }}
                      ></div>
                    </div>
                    <span>{services.length}</span>
                  </div>

                  <button
                    className="nav-btn-premium next"
                    onClick={nextSlide}
                    aria-label="Next"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
