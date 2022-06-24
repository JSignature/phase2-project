import React from 'react'

const Placeholder = () => {
  return (
    <div style={{ border: 1 }}>
      <label htmlFor="clientName">Client Name </label>
      <input type="text" name="clientName" id="" />
      <br />
      <label htmlFor="dogName">Dog's Name </label>
      <input type="text" name="dogName" id="" />
      <br />
      <label htmlFor="date">Date </label>
      <input type="text" name="date" id="" />
    </div>
  )
}

export default Placeholder
