import { iconMap } from '../../assets/svg'
import SVGIcon from './SVGIcon'

interface SkillsIconProps {
  className?: string
  color?: string
  text?: string
  icon: string
}
const SkillsIcon = ({ className, icon, text }: SkillsIconProps) => {
  return (
    <div className="h-56 flex aspect-square flex-col items-center justify-between rounded-md bg-background-100 p-4 text-center shadow-lg sm:h-48">
      <SVGIcon iconName={icon} SvgComponent={iconMap[icon]} className={`h-1/2 w-1/2 grow ${className}`} />
      <p className=" m-0 w-full font-sans font-semibold text-lg">{text}</p>
    </div>
  )
}

export default SkillsIcon
