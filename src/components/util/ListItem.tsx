import { ComponentProps } from 'react'

export const ListItem = ({ children }: ComponentProps<'li'>) => {
  return <li className="my-2">{children}</li>
}

export default ListItem
