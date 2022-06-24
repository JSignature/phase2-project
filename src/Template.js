import { React, useEffect, useState } from 'react'
import NavBar from './NavBar'
import Placeholder from './Placeholder'
import TemplateList from './TemplateList'

const Template = () => {
  const [tempName, setTempName] = useState('')
  const [tempBody, setTempBody] = useState('')
  const [templates, setTemplates] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/templates')
      .then(resp => resp.json())
      .then(obj => setTemplates(obj))
  }, [])

  function handleNewTemplate(e) {
    e.preventDefault()
    const newTempObj = {
      tempName,
      tempBody,
    }

    fetch('http://localhost:4000/templates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTempObj),
    })
      .then(resp => resp.json())
      .then(obj => setTemplates([...templates, obj]))
  }

  return (
    <div>
      <NavBar />
      <form onSubmit={handleNewTemplate}>
        <label htmlFor="Temp_Name">New Template Name</label>
        <input
          type="text"
          name="temp_Name"
          id=""
          onChange={e => {
            setTempName(e.target.value)
          }}
        />{' '}
        <br />
        <label htmlFor="Temp_Body">Enter Email Template</label>
        <textarea
          name="Temp_Body"
          id=""
          cols="30"
          rows="10"
          placeholder="Remember to use placeholders"
          onChange={e => {
            setTempBody(e.target.value)
          }}
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
      <Placeholder />
      <TemplateList templates={templates} />
    </div>
  )
}

export default Template
