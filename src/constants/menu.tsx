import { AutomationDuoToneWhite } from '@/icons/automation-duo-tone-white'
import { HomeDuoToneWhite } from '@/icons/home-duo'
import { RocketDuoToneWhite } from '@/icons/rocket-duo'

import { SettingsDuoToneWhite } from '@/icons/setting-duo'
import { v4 as uuid } from 'uuid'
  
export type FieldProps = {
    label: string
    id: string
}
  
type SideBarProps = {
    icon: React.ReactNode
} & FieldProps
  
export const SIDEBAR_MENU: SideBarProps[] = [
    {
      id: uuid(),
      label: 'home',
      icon: <HomeDuoToneWhite />,
    },
    {
      id: uuid(),
      label: 'automations',
      icon: <AutomationDuoToneWhite />,
    },
    {
      id: uuid(),
      label: 'integrations',
      icon: <RocketDuoToneWhite />,
    },
    {
      id: uuid(),
      label: 'settings',
      icon: <SettingsDuoToneWhite />,
    },
]