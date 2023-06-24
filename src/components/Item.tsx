import type { ItemProps } from '@/types/components'

import clsx from 'clsx'

import { IconBrain } from '@/assets/icons/brain'
import { IconChatRemove } from '@/assets/icons/chat-remove'
import { IconFlash } from '@/assets/icons/flash'
import { IconEye } from '@/assets/icons/eye'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

const iconList: Record<ItemProps['icon'], JSX.Element> = {
  brain: <IconBrain />,
  'chat-remove': <IconChatRemove />,
  eye: <IconEye />,
  flash: <IconFlash />,
}

export function Item({ color, icon, text, value }: ItemProps) {
  return (
    <li
      className={clsx('flex items-center justify-between p-4 rounded-xl', {
        'bg-blue-normal/5 text-blue-normal': color === 'blue',
        'bg-green-normal/5 text-green-normal': color === 'green',
        'bg-red-normal/5 text-red-normal': color === 'red',
        'bg-yellow-normal/5 text-yellow-normal': color === 'yellow',
      })}
    >
      <div className="h-5 w-5">{iconList[icon]}</div>
      <div className="font-medium mr-auto pl-3">{text}</div>
      <div className="font-bold text-navy-dark">
        {value} <span className="opacity-50">/ 100</span>
      </div>
    </li>
  )
}
