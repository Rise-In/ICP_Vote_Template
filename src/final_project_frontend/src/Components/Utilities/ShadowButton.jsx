import React, { useState } from 'react';

const styles = {
    padding: '20px 50px',
    border: 'none',
    fontSize: '17px',
    color: '#fff',
    borderRadius: '20px',
    letterSpacing: '2px',
    fontWeight: '700',
    textTransform: 'uppercase',
    transition: '0.5s',
    transitionProperty: 'box-shadow',
    background: 'rgb(107,70,193)',
    boxShadow: '0 0 25px rgb(107,70,193)',
};

const hoverStyles = {
    boxShadow: '0 0 5px rgb(107,70,193), 0 0 25px rgb(107,70,193), 0 0 50px rgb(107,70,193), 0 0 100px rgb(107,70,193)',
};

const ShadowButton = ({ onClick, loading }) => {
    const [isHovered, setIsHovered] = useState(false)


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <button
            onClick={onClick}
            style={isHovered ? { ...styles, ...hoverStyles } : styles}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
        >
            {loading ? "Sending Proposal..." : "Send Proposal"}
        </button>
    );
}


export default ShadowButton;
