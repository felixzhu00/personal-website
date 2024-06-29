import React from 'react'

interface SVGIconProps {
  className?: string
  color?: string
  SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const SVGIcon = ({
  className = 'h-8 w-8',
  color,
  SvgComponent,
} : SVGIconProps) => {
  return (
    <SvgComponent className={className} fill={color} />
  )
}

export default SVGIcon



