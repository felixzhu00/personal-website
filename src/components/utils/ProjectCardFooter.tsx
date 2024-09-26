import React, { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'

export default function ProjectCardFooter({ techStack }: { techStack: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 4 // Number of items to show at once

  // Calculate the number of items that can be shown
  const maxIndex = Math.ceil(techStack.length / itemsPerPage) - 1

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1)
    }
  }

  return (
    <footer className="mt-5">
      <div className="flex items-center justify-between">
        <button onClick={handlePrev} disabled={currentIndex === 0} className="mr-1 text-primary-500 disabled:opacity-0">
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="w-full overflow-hidden">
          <motion.ul
            className="flex flex-nowrap"
            initial={{ x: '-100%' }}
            animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
            transition={{ duration: 0.5 }}
          >
            {techStack.map((tech, index) => (
              <motion.li
                key={index}
                className="paragraph m-1 whitespace-nowrap rounded-md bg-secondary-300 px-2 py-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <button onClick={handleNext} disabled={currentIndex === maxIndex} className="ml-1 text-primary-500 disabled:opacity-0">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </footer>
  )
}
