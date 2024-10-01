import React from 'react'

interface SVGIconProps {
  iconName: string
  className?: string
  SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const SVGIcon = ({ iconName, className = 'h-8 w-8', SvgComponent }: SVGIconProps) => {
  const isMonoColor = iconName === 'express' || iconName === 'bash'

  const strokeColor = isMonoColor ? 'var(--text-950)' : ''

  const fillColor = isMonoColor ? 'var(--text-950)' : ''

  return <SvgComponent className={className} stroke={strokeColor} fill={fillColor} style={{ transition: 'stroke 0s' }} />
}

export default SVGIcon
