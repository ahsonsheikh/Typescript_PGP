import React from 'react'
import { IUser } from '../../types'

interface IUserNameProps {
  user : IUser
}

const Name = ({user: { name }} : IUserNameProps) => {
  return (
    <h1>{name}</h1>
  )
}

export default Name