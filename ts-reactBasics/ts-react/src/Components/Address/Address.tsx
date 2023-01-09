import React from 'react'
import { IUser } from '../../types'

interface IUserAddressProps {
  user : IUser
}

const Address = ({ user: {address}} : IUserAddressProps)  => {
  return (
    <div><i>{address}</i></div>
  )
}

export default Address