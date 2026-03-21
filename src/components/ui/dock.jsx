import React, { useRef } from 'react'
import { cva } from 'class-variance-authority'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react'

import { cn } from '@/lib/utils'

const DEFAULT_SIZE = 40
const DEFAULT_MAGNIFICATION = 60
const DEFAULT_DISTANCE = 140
const DEFAULT_DISABLEMAGNIFICATION = false

const dockVariants = cva(
  'mx-auto flex h-[58px] w-max max-w-full items-center justify-center gap-1 rounded-2xl border border-white/20 bg-white/5 p-2 shadow-lg shadow-black/10 backdrop-blur-xl backdrop-saturate-200'
)

const Dock = React.forwardRef(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      disableMagnification = DEFAULT_DISABLEMAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = 'middle',
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(Infinity)

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DockIcon) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX,
            size: iconSize,
            magnification: iconMagnification,
            disableMagnification,
            distance: iconDistance,
          })
        }
        return child
      })
    }

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants(), className, {
          'items-start': direction === 'top',
          'items-center': direction === 'middle',
          'items-end': direction === 'bottom',
        })}
      >
        {renderChildren()}
      </motion.div>
    )
  }
)

Dock.displayName = 'Dock'

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  disableMagnification,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}) => {
  const iconRef = useRef(null)
  const padding = Math.max(6, size * 0.2)
  const defaultMouseX = useMotionValue(Infinity)

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val) => {
    const bounds = iconRef.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const targetSize = disableMagnification ? size : magnification

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, targetSize, size]
  )

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      ref={iconRef}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={cn(
        'flex aspect-square cursor-pointer items-center justify-center rounded-full text-white',
        disableMagnification && 'transition-colors hover:bg-white/10',
        className
      )}
      {...props}
    >
      <div className="flex h-full w-full items-center justify-center [&_svg]:shrink-0">
        {children}
      </div>
    </motion.div>
  )
}

DockIcon.displayName = 'DockIcon'

export { Dock, DockIcon, dockVariants }
