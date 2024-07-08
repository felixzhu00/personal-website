import { motion } from 'framer-motion'

interface HoverButtonProps {
  text: string
  className?: string
}

const HoverButton = ( {text, className} : HoverButtonProps) => {
  return (
    <div className="relative inline-block text-secondary ml-[15px]">
    {/* Original Shape */}
    <motion.div
      className={`absolute left-0 top-0 h-full w-full rounded bg-secondary border border-secondary ${className}`}
      initial={{ opacity: 1 }}
      whileHover={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    />

    {/* Button */}
    <motion.button
      className={`relative z-10 rounded bg-primary border border-secondary ${className}`}
      whileHover={{ x: -4, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {text}
    </motion.button>
  </div>
  )
}

export default HoverButton
