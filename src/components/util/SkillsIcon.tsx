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
    <div className="flex aspect-square h-[150px] flex-col items-center justify-between rounded bg-[#112240] p-4 text-center">
      <SVGIcon SvgComponent={icon} className={`h-1/2 w-1/2 grow ${className}`} color={color} />
      <p className="m-0 w-full font-sans text-[26px] font-semibold text-textAccent sm:text-[14px]">{text}</p>
    </div>
  )
}

export default SkillsIcon
