import React from 'react'
import { IUser } from '../../types'

interface IUserNameChangeProps {
  user : IUser,
  onChanged(e: React.ChangeEvent<HTMLInputElement>): void
}

const NameChange = ({user: {name}, onChanged} : IUserNameChangeProps) => {
  return (
    <div>
      <h1>Change the name of '{name}' here</h1>
      <input type="text" value={name} onChange={onChanged} />
    </div>
  )
}

export default NameChange