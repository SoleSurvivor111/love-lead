declare module '*.svg' {
  import { FC, SVGProps } from 'react'
  export const ReactComponent: FC<SVGProps<SVGElement>>
}

declare module '*.sass' {
  const content: { [className: string]: string }
  export = content
}
