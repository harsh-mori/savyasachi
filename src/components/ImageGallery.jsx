import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageGallery.css';

const ImageGallery = ({ images = [] }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Pan state for dragging zoomed images
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const imageContainerRef = useRef(null);
  const lightboxContainerRef = useRef(null);

  // Open lightbox with specific image
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
    document.body.style.overflow = 'hidden';
    document.body.classList.add('lightbox-open');
  };

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
    setIsFullscreen(false);
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    document.body.style.overflow = 'auto';
    document.body.classList.remove('lightbox-open');
  }, []);

  // Toggle fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!lightboxContainerRef.current) return;

    if (!document.fullscreenElement) {
      lightboxContainerRef.current.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen();
    }
  }, []);

  // Navigate to next image
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, [images.length]);

  // Navigate to previous image
  const previousImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, [images.length]);

  // Zoom in
  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  // Zoom out
  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
    if (zoomLevel <= 1.5) {
      setPanPosition({ x: 0, y: 0 });
    }
  };

  // Reset zoom
  const resetZoom = () => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  // Mouse drag handlers for panning
  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - panPosition.x,
        y: e.clientY - panPosition.y,
      });
      e.preventDefault();
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextImage(); // Swipe left - next image
    } else if (distance < -minSwipeDistance) {
      previousImage(); // Swipe right - previous image
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          closeLightbox();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextImage();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          previousImage();
          break;
        case '+':
        case '=':
          e.preventDefault();
          zoomIn();
          break;
        case '-':
        case '_':
          e.preventDefault();
          zoomOut();
          break;
        case '0':
          e.preventDefault();
          resetZoom();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextImage, previousImage, toggleFullscreen]);

  // Add mouse event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart, panPosition]);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (!images || images.length === 0) {
    return (
      <div className="image-gallery-empty">
        <p>No images available</p>
      </div>
    );
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="image-gallery">
        <div className="image-gallery-grid">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-item-inner">
                <img
                  src={image.src}
                  alt={image.alt || `Image ${index + 1}`}
                  loading="lazy"
                />
                <div className="gallery-item-overlay">
                  <svg
                    className="gallery-zoom-icon"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  {image.title && (
                    <p className="gallery-item-title">{image.title}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Lightbox Dialog Container */}
            <motion.div
              ref={lightboxContainerRef}
              className="lightbox-dialog"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Sidebar - Close & Fullscreen */}
              <div className="lightbox-sidebar-left">
                <button
                  className="sidebar-btn sidebar-btn-close"
                  onClick={closeLightbox}
                  aria-label="Close lightbox"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span className="btn-label">Close</span>
                </button>


              </div>

              {/* Center - Image & Title */}
              <div className="lightbox-center">
                {/* Image Title at Top - Desktop Only, Mobile has Close Button */}
                <div className="lightbox-title-top">
                  {images[currentImageIndex].title && (
                    <span className="lightbox-title-text">{images[currentImageIndex].title}</span>
                  )}
                  {/* Mobile-only Close Button */}
                  <button
                    className="sidebar-btn sidebar-btn-close sidebar-btn-icon-only mobile-close-btn"
                    onClick={closeLightbox}
                    aria-label="Close lightbox"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                {/* Image Container */}
                <div
                  ref={imageContainerRef}
                  className="lightbox-image-container"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ position: 'relative', display: 'inline-block' }}
                    >
                      <motion.img
                        src={images[currentImageIndex].src}
                        alt={images[currentImageIndex].alt || `Image ${currentImageIndex + 1}`}
                        className="lightbox-image"
                        draggable={false}
                        onMouseDown={(e) => e.preventDefault()}
                        onContextMenu={(e) => e.preventDefault()}
                      />
                      {/* Internal Image Watermark */}
                      <div className="watermark-overlay" style={{ top: 0, left: 0, width: '100%', height: '100%', transform: 'none', background: 'transparent' }}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div key={i} className="watermark-row" style={{ opacity: 0.4 }}> {/* Higher opacity for internal image watermark */}
                            {Array.from({ length: 3 }).map((_, j) => (
                              <span key={j} className="watermark-text" style={{ fontSize: '14px', padding: '20px', whiteSpace: 'nowrap', transform: 'rotate(-30deg)', display: 'block' }}>Savyasachi Engineering</span>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Bottom - Navigation & Zoom Controls */}
              <div className="lightbox-bottom">
                <div className="lightbox-controls-left">
                  {images.length > 1 && (
                    <button
                      className="sidebar-btn sidebar-btn-nav"
                      onClick={previousImage}
                      aria-label="Previous image"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                      <span className="btn-label">Previous</span>
                    </button>
                  )}
                </div>

                <div className="lightbox-controls-center">

                </div>

                <div className="lightbox-controls-right">
                  {images.length > 1 && (
                    <button
                      className="sidebar-btn sidebar-btn-nav"
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      <span className="btn-label">Next</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  )}

                  <div className="lightbox-counter">
                    <span className="counter-current">{currentImageIndex + 1}</span>
                    <span className="counter-separator">/</span>
                    <span className="counter-total">{images.length}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
