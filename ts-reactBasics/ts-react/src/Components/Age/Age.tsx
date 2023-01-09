import React from 'react'
import { IUser } from '../../types'

interface IUserAgeProps {
  user : IUser
}

const Age = ({ user: { age }} : IUserAgeProps) => {
  return (
    <div><i>{age}</i></div>
  )
}

export default Age

