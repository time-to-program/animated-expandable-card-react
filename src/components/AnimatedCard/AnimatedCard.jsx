import React, { useState } from "react";
import "./AnimatedCard.css";
import { motion } from "framer-motion";

const AnimatedCard = () => {
  const [isExpaned, setIsExpaned] = useState(false);

  const animated = {
    layout: "position",
    animate: { opacity: 1 },
    transition: { delay: 0.3 },
    initial: { opacity: 0 },
  };

  return (
    <motion.div
      className="card"
      layout
      onClick={() => {
        setIsExpaned(!isExpaned);
      }}
    >
      <motion.h3 layout="position">Expandable Card 🔥</motion.h3>

      <motion.p layout="position">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sunt
        consequuntur sint ullam blanditiis alias et consectetur animi voluptates
        quibusdam.
      </motion.p>

      {isExpaned && (
        <>
          <motion.img {...animated} src="./images/img1.png" alt="demo image" />

          <motion.p {...animated}>
            Perferendis dolorem! Voluptate iste reprehenderit voluptatem,
            assumenda est commodi, repudiandae enim eveniet cumque praesentium
            neque vero iure.
          </motion.p>

          <motion.div {...animated} className="btn-container">
            <motion.button
              onClick={() => {
                setIsExpaned(!isExpaned);
              }}
            >
              Close
            </motion.button>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default AnimatedCard;
