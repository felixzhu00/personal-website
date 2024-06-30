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
    <div className='flex flex-col items-center rounded bg-[#112240] text-center justify-between aspect-square h-[150px] p-4'>
        <SVGIcon SvgComponent={icon} className={`h-1/2 w-1/2 grow ${className}`} color={color} />
      <p className="text-[13px] m-0 w-full text-textAccent font-sans font-semibold">{text}</p>
    </div>
  )
}

export default SkillsIcon
