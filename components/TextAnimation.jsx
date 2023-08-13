'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/pages/page.module.css'


const TextAnimation = () => {
    const phrases = ["CAAURI", "BUSINESS" ,"AFFAIRE" ];
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 1500); // Changez ici le délai en millisecondes
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div style={{ position: 'relative', bottom: '53%', left: '10%' }}>
        <AnimatePresence>
          <motion.div
            key={currentPhraseIndex}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            style={{ position: 'absolute', top: 0, left: 0 }}
          >
            <h1 style={{fontSize: '45px'}} className={styles['text-animation']}>{phrases[currentPhraseIndex]}</h1>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };
  
  export default TextAnimation;
  