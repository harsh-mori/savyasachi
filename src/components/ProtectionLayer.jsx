import { useEffect, useState } from 'react';
import './ProtectionLayer.css';

const ProtectionLayer = ({ children, watermarkText = "Savyasachi Engineering • Copyright Protected" }) => {
    return (
        <div className="protection-container">
            {/* The Tiled Watermark Overlay */}
            <div className="watermark-overlay">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="watermark-row">
                        {Array.from({ length: 8 }).map((_, j) => (
                            <span key={j} className="watermark-text">{watermarkText}</span>
                        ))}
                    </div>
                ))}
            </div>

            {/* The Protected Content */}
            <div className="protected-content">
                {children}
            </div>
        </div>
    );
};

export default ProtectionLayer;
