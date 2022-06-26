import React from 'react'
import NavBar from './NavBar'

const Email = () => {
  return (
    <div>
      <NavBar />
      <h1>Email</h1>
      <select name="clientFilter" id="">
        <option value="Dina">Dina</option>
        <option value="Jimmy">Jimmy</option>
      </select>
    </div>
  )
}

export default Email
