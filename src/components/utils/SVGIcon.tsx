import React from 'react'

interface SVGIconProps {
  className?: string
  fillColor?: string
  strokeColor?: string
  SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const SVGIcon = ({ className = 'h-8 w-8', fillColor, strokeColor, SvgComponent }: SVGIconProps) => {
  return <SvgComponent className={className} stroke={strokeColor} fill={fillColor} style={{ transition: 'stroke 0s' }} />
}

export default SVGIcon
