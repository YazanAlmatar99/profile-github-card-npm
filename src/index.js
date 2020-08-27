import React from 'react'

import Card from './components/Card'

export const ExampleComponent = ({ username }) => {
  return (
    <div>
    <Card username = {username}/>
    </div>
  )
}
