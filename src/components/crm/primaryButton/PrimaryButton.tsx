import React, { ReactNode } from 'react'
import './PrimaryButton.scss'

type BorderRadiusType = 'xsm' | 'sm' | 'md' | 'lg'

type BackgroundColorGradientType =
  | 'gradient-blue'
  | 'gradient-pink'
  | 'gradient-green'
  | 'gradient-orange'
  | 'gradient-cyan'
  | 'gradient-violet'

type BackgroundColorType =
  | 'gray'
  | 'secondary-gray'
  | 'bright-purple'
  | 'blue'
  | 'deep-blue'
  | 'pink'
  | 'green'
  | 'purple'
  | 'orange'
  | 'cyan'
  | 'violet'
  | 'bgGray'

type FullBackgroundColorType = BackgroundColorType | BackgroundColorGradientType

type PrimaryButtonType<T extends boolean> = {
  children: ReactNode
  isBackgroundExist: T
  borderRadius: BorderRadiusType
  backColor: T extends true ? FullBackgroundColorType : BackgroundColorType
  isDark: boolean
  width?: string
  isIconColorExist?: boolean
}

const PrimaryButton = <T extends boolean>({
  children = 'СОХРАНИТЬ',
  isBackgroundExist,
  borderRadius = 'xsm',
  backColor,
  isDark = false,
  width,
  isIconColorExist,
  ...rest
}: PrimaryButtonType<T>) => {
  return (
    <button
      style={{ width: width }}
      className={`button ${isDark ? 'buttonDark' : ''} ${isBackgroundExist ? 'exist' : 'transparent'} ${backColor} ${borderRadius} ${(isIconColorExist && 'svg-' + backColor) || ''}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
