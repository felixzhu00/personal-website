import SVGIcon from './SVGIcon'

interface SkillsIconProps {
  className?: string
  color?: string
  text?: string
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
const SkillsIcon = ({ className, icon, text }: SkillsIconProps) => {
  return (
    <div className="h-50 flex aspect-square flex-col items-center justify-between rounded-md bg-background-100 p-4 text-center sm:h-48 shadow-lg">
      <SVGIcon
        SvgComponent={icon}
        className={`h-1/2 w-1/2 grow ${className}`}
        strokeColor={text == 'Bash Script' || text == 'Express' ? 'var(--text-800)' : ''}
      />
      <p className="paragraph m-0 w-full font-sans font-semibold sm:text-lg">{text}</p>
    </div>
  )
}

export default SkillsIcon
