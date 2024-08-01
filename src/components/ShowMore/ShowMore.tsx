import React, { useState } from 'react';

interface ShowMoreProps {
  text: string;
}

const ShowMore: React.FC<ShowMoreProps> = ({ text }) => {
   const [isExpanded, setIsExpanded] = useState(false);
  // const isExpanded = false;
  // Define the maximum number of characters to show when not expanded
  const maxCharacters = 100;

  // Function to toggle the expanded state
        const toggleExpanded = () => {
          console.log(!isExpanded)
   setIsExpanded(!isExpanded);
  };

  return (
    <div className="">
      <p className="text-gray-700">
        {isExpanded ? text : `${text.substring(0, maxCharacters)}...`}
        
      </p>
      <button
        className="text-blue-500 hover:underline focus:outline-none"
        onClick={toggleExpanded}
      >
        {text.length < 100 ? '' : isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default ShowMore;
