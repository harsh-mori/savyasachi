import '../../styles/components/ProtectionLayer.css';

const ProtectionLayer = ({ children }) => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleDragStart = (e) => e.preventDefault();

    return (
        <div
            className="protection-container"
            onContextMenu={handleContextMenu}
            onDragStart={handleDragStart}
        >
            {children}
        </div>
    );
};

export default ProtectionLayer;
