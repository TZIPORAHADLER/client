import React from 'react';


const PlantDetail = ({ plant, onClose }) => {
    const renderField = (label, value) => {
        if (typeof value === 'object' && value !== null) {
            return (
                <div className="plant-detail-field">
                    <span className="plant-detail-label">{label}:</span> <span className="plant-detail-value">{JSON.stringify(value)}</span>
                </div>
            );
        }
        return (
            <div className="plant-detail-field">
                <span className="plant-detail-label">{label}:</span> <span className="plant-detail-value">{value || 'N/A'}</span>
            </div>
        );
    };

    return (
        <div className="plant-detail-content">
            <h2 className="plant-detail-title">{plant['Latin name']}</h2>
            {plant.Img ? (
                <img
                    src={plant.Img}
                    alt={plant['Latin name']}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'fallback-image-url';
                    }}
                    className="plant-detail-image"
                />
            ) : (
                <p>No image available</p>
            )}
            <div className="plant-detail-info">
                {renderField('Family', plant.Family)}
                {renderField('Categories', plant.Categories)}
                {renderField('Disease', plant.Disease)}
                {renderField('Use', plant.Use)}
                {renderField('Insects', plant.Insects)}
                {renderField('Avaibility', plant.Avaibility)}
                {renderField('Style', plant.Style)}
                {renderField('Bearing', plant.Bearing)}
                {renderField('Light tolered', plant['Light tolered'])}
                {renderField('Height at purchase', plant['Height at purchase'])}
                {renderField('Light ideal', plant['Light ideal'])}
                {renderField('Width at purchase', plant['Width at purchase'])}
                {renderField('Appeal', plant.Appeal)}
                {renderField('Perfume', plant.Perfume)}
                {renderField('Growth', plant.Growth)}
                {renderField('Width potential', plant['Width potential'])}
                {renderField('Common name (fr.)', plant['Common name (fr.)'])}
                {renderField('Pruning', plant.Pruning)}
                {renderField('Height potential', plant['Height potential'])}
                {renderField('Origin', plant.Origin)}
                {renderField('Description', plant.Description)}
                {renderField('Temperature max', plant['Temperature max'])}
                {renderField('Blooming season', plant['Blooming season'])}
                {renderField('Color of leaf', plant['Color of leaf'])}
                {renderField('Watering', plant.Watering)}
                {renderField('Color of blooms', plant['Color of blooms'])}
                {renderField('Zone', plant.Zone)}
                {renderField('Common name', plant['Common name'])}
                {renderField('Available sizes (Pot)', plant['Available sizes (Pot)'])}
                {renderField('Other names', plant['Other names'])}
                {renderField('Temperature min', plant['Temperature min'])}
                {renderField('Pot diameter (cm)', plant['Pot diameter (cm)'])}
                {renderField('Climat', plant.Climat)}
            </div>
        </div>
    );
};

export default PlantDetail;
