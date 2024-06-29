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
    <div className="flex aspect-square h-[11vh] justify-between flex-col items-center justify-center rounded bg-secondary text-center">
      <SVGIcon
        SvgComponent={icon}
        className={`h-1/2 w-1/2 grow ${className}`}
        color={color}
      />
      <p className='bg-gray-500 w-full '>{text}</p>
    </div>
  )
}

export default SkillsIcon
