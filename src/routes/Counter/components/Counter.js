import React from 'react'
import PropTypes from 'prop-types'

// The editor core
import Editor, { Editable, actions, createEmptyState } from 'ory-editor-core'

import 'ory-editor-core/lib/index.css' // we also want to load the stylesheets
require('react-tap-event-plugin')() // react-tap-event-plugin is required by material-ui which is used by ory-editor-ui so we need to call it here

// Require our ui components (optional). You can implement and use your own ui too!
import { Trash, DisplayModeToggle, Toolbar } from 'ory-editor-ui'
import 'ory-editor-ui/lib/index.css'

// The rich text area plugin
import slate from 'ory-editor-plugins-slate'
import 'ory-editor-plugins-slate/lib/index.css'

// The spacer plugin
import spacer from 'ory-editor-plugins-spacer'
import 'ory-editor-plugins-spacer/lib/index.css'

// The image plugin
import image from 'ory-editor-plugins-image'
import 'ory-editor-plugins-image/lib/index.css'

// The parallax plugin
import parallax from 'ory-editor-plugins-parallax-background'
import 'ory-editor-plugins-parallax-background/lib/index.css'

// The divider plugin
import divider from 'ory-editor-plugins-divider'

// Renders json state to html, can be used on server and client side
import { HTMLRenderer } from 'ory-editor-renderer'


// Define which plugins we want to use. We only have slate and parallax available, so load those.
const plugins = {
  content: [slate(), spacer, image, divider], // Define plugins for content cells
  layout: [parallax({ defaultPlugin: slate() })] // Define plugins for layout cells
}

// Creates an empty editable
const state = createEmptyState()

// Instantiate the editor
const editor = new Editor({
  plugins,
  defaultPlugin: slate(),
  // pass the content state - you can add multiple editables here
  editables: [state],
})


export const Counter = (props) => (
  <div style={{ margin: '0 auto' }}>
    <h2>Counter: {props.counter}</h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
   {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
      <Editable editor={editor} state={state} id={state.id}/>
      <Trash editor={editor}/>
      <DisplayModeToggle editor={editor}/>
      <Toolbar editor={editor}/>
  </div>

)

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  doubleAsync: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired
}

export default Counter
