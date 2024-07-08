import { motion } from 'framer-motion'

interface HoverButtonProps {
  innerClass?: string
  outerClass?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
}

const HoverButton = ({ innerClass, outerClass, children, onClick }: HoverButtonProps) => {
  return (
    <div className={`relative ${outerClass} inline-block text-secondary`}>
      {/* Original Shape */}
      <motion.div
        className={`absolute left-0 top-0 h-full w-full rounded border border-secondary bg-secondary ${innerClass}`}
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Button */}
      <motion.button
        className={`relative z-10 rounded border border-secondary bg-primary ${innerClass}`}
        whileHover={{ x: -4, y: -2 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
      >
        {children}
      </motion.button>
    </div>
  )
}

export default HoverButton
