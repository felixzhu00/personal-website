import React from 'react'
import SVGIcon from './SVGIcon'

interface SkillsIconProps {
  className?: string
  color?: string
  text?: string
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
const SkillsIcon = ({ className, color, icon, text }: SkillsIconProps) => {
  return (
    <div className="flex aspect-square h-[9.5vh] flex-col items-center justify-center rounded bg-secondary text-center">
      <SVGIcon
        SvgComponent={icon}
        className={`h-1/2 w-1/2 ${className}`}
        color={color}
      />
      <p>{text}</p>
    </div>
  )
}

export default SkillsIcon
