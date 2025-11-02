import { AnimatePresence, motion, easeOut } from 'framer-motion'
import { useLocation, useOutlet } from 'react-router-dom'
import styles from './index.module.css'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
}

export const AnimatedRoutes = () => {
  const location = useLocation()
  const element = useOutlet()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={styles['page-transition']}
        key={location.pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
      >
        {element}
      </motion.div>
    </AnimatePresence>
  )
}
