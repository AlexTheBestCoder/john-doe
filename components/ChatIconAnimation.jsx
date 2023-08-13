"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';


const ChatIconAnimation = () => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpansion = () => {
      setIsExpanded((prevExpanded) => !prevExpanded);
    };
  
    return (
      <div>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: isExpanded ? 1.2 : 1 }}
          transition={{ duration: 0.3 }}
          onClick={toggleExpansion}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-message-circle"
          >
           Hello
          </svg>
        </motion.div>
        <p>{isExpanded ? "Discutons" : ""}</p>
      </div>
    );
  };
  
  export default ChatIconAnimation;
  