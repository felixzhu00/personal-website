import React from 'react'

interface SVGIconProps {
  className?: string
  ariaLabel?: string
  color?: string
  SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const SVGIcon: React.FC<SVGIconProps> = ({
  className = 'h-8 w-8',
  ariaLabel,
  color,
  SvgComponent,
}) => {
  return (
    <SvgComponent className={className} aria-label={ariaLabel} fill={color} />
  )
}

export default SVGIcon
