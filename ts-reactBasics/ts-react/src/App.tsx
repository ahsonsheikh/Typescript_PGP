import React, { useEffect, useState } from 'react';
import Address from './Components/Address/Address';
import Age from './Components/Age/Age';
import Name from './Components/Name/Name';
import NameChange from './Components/NameChange/NameChange';
import { IUser } from './types';

function App() {
  const [user, setUser] = useState<IUser>({
    name: '',
    age: 0,
    address: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const value = e.currentTarget.value

    setUser({ ...user, name: value })
  }

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://randomuser.me/api/')
      const data = await response.json()

      const firstUser = data.results[0]

      setUser(prev => {
        return {
          ...prev,
          name: firstUser.name.first,
          age: firstUser.dob.age,
          address: firstUser.location.street.name,
        }
      })
    }

    getData()
  }, [])

  return (
    <main>
      <Name user={user} />
      <Age user={user} />
      <Address user={user} />
      <NameChange user={user} onChanged={handleChange} />
    </main>
  )
}

export default App
