import { React, useState, useEffect } from 'react'
import EmailRendered from './EmailRendered'
import NavBar from './NavBar'

const Email = () => {
  const [clients, setClients] = useState([])
  const [templates, setTemplates] = useState([])
  const [filteredClient, setFilteredClient] = useState('')
  const [filteredTemplate, setFilteredTemplate] = useState('')
  const [templateProp, setTemplateProp] = useState([])

  function handleClientChange(e) {
    setFilteredClient(e.target.value)
  }
  function handleTemplateChange(e) {
    setFilteredTemplate(e.target.value)
  }

  useEffect(() => {
    const templateProp = templates.filter(
      template => template.tempName === filteredTemplate
    )

    setTemplateProp(templateProp)
  }, [filteredTemplate])

  useEffect(() => {
    fetch('http://localhost:4000/clients')
      .then(resp => resp.json())
      .then(obj => setClients(obj))
  }, [])
  useEffect(() => {
    fetch('http://localhost:4000/templates')
      .then(resp => resp.json())
      .then(obj => setTemplates(obj))
  }, [])

  return (
    <div>
      <NavBar />
      <h1>Email</h1>
      <select name="clientFilter" id="" onChange={handleClientChange}>
        <option value="">Select a client</option>

        {clients.map(client => (
          <option key={client.id} value={client.clientName}>
            {client.clientName}
          </option>
        ))}
      </select>
      <select name="templateFilter" id="" onChange={handleTemplateChange}>
        <option value="">Select a template</option>
        {templates.map(template => (
          <option key={template.id} value={template.tempName}>
            {template.tempName}
          </option>
        ))}
      </select>
      <p>{templateProp.length === 0 ? ' ' : templateProp[0].tempBody}</p>
      {/* <EmailRendered templateProp={templateProp} /> */}
    </div>
  )
}

export default Email
