import React from 'react'

import { ExampleComponent } from 'github-card'
import 'github-card/dist/index.css'

const App = () => {
  return  (<div>
    < ExampleComponent showFollowers={true} hello="hello" username="yazanalmatar99" />
    </div>

  ) 
}

export default App
