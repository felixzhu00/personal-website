import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggleButton() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark', !isDark)
  }

  return (
    <button onClick={toggleTheme} className="fixed bottom-4 right-4 cursor-pointer rounded-full bg-gray-200 p-3 shadow-lg dark:bg-gray-700">
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{
              duration: 0.2, // Very fast transition duration
              ease: 'easeInOut', // Smooth ease for fast but smooth transition
            }}
          >
            <Moon className="h-6 w-6 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{
              duration: 0.2, // Very fast transition duration
              ease: 'easeInOut', // Smooth ease for fast but smooth transition
            }}
          >
            <Sun className="h-6 w-6 text-yellow-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}
