import React from 'react'
import SVGIcon from './SVGIcon'

interface SkillsIconProps {
  className?: string
  color?: string
  text?: string
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
const SkillsIcon = ({ className, icon, text }: SkillsIconProps) => {
  return (
    <div className="flex aspect-square h-[172px] flex-col items-center justify-between rounded bg-tri p-4 text-center">
      <SVGIcon SvgComponent={icon} className={`h-1/2 w-1/2 grow ${className}`} strokeColor={text == "Bash Script" ? "var(--color-text-accent)" : ""}/>
      <p className="m-0 w-full font-sans text-[19px] font-semibold text-textAccent sm:text-[17px]">{text}</p>
    </div>
  )
}

export default SkillsIcon
