import { motion } from "framer-motion";
import PropTypes from "prop-types";

function FadeInItem({ index, showOnce = false, children }) {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: showOnce,
      }}
      custom={index}
    >
      {children}
    </motion.div>
  );
}

FadeInItem.propTypes = {
  index: PropTypes.number.isRequired,
  showOnce: PropTypes.bool,
  children: PropTypes.any,
};

export default FadeInItem;
