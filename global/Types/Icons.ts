export type IconProps = {
  className?: string,
  width: number,
  height: number,
  fill?: string,
  stroke?: string,
  strokeWidth?: string
}

export type RenderIconProps = {
  path: string | null
} & IconProps
