import React from "react";

const DotsIcon = ({ size = 27 }) => {
    return (
        <svg
            width={size}
      
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        
        >
            <path
                d="M12 6.99998C9.1747 6.99987 6.99997 9.24998 7 12C7.00003 14.55 9.02119 17 12 17C14.7712 17 17 14.75 17 12"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default DotsIcon;
