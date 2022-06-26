import { React, useState, useEffect } from 'react'

function EmailRendered({ templateProp }) {
  const [body, setBody] = useState(() =>
    templateProp.length === 0
      ? 'Please select a template'
      : setBody(templateProp[0].tempBody)
  )
  useEffect(() => setBody(templateProp), [templateProp])

  //     templateProp.length === 0
  //       ? 'Please select a template'
  //       : templateProp[0].tempBody
  //   console.log(jimmy)
  return (
    <div>
      <textarea name="" id="" cols="30" rows="10">
        {body}
      </textarea>
    </div>
  )
}

export default EmailRendered
