import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

// The editor core
import Editor, { Editable, createEmptyState } from 'ory-editor-core'
import 'ory-editor-core/lib/index.css' // we also want to load the stylesheets

// Require our ui components (optional). You can implement and use your own ui too!
import { Trash, DisplayModeToggle, Toolbar } from 'ory-editor-ui'
import 'ory-editor-ui/lib/index.css'

// Load some exemplary plugins:
import slate from 'ory-editor-plugins-slate' // The rich text area plugin
import 'ory-editor-plugins-slate/lib/index.css' // Stylesheets for the rich text area plugin
import parallax from 'ory-editor-plugins-parallax-background' // A plugin for parallax background images
import 'ory-editor-plugins-parallax-background/lib/index.css' // Stylesheets for parallax background images

require('react-tap-event-plugin')() // react-tap-event-plugin is required by material-ui which is used by ory-editor-ui so we need to call it here

// Define which plugins we want to use. We only have slate and parallax available, so load those.
const plugins = {
  content: [slate()], // Define plugins for content cells
  layout: [parallax({ defaultPlugin: slate() })] // Define plugins for layout cells
}

// Creates an empty editable
const content = createEmptyState()

// Instantiate the editor
const editor = new Editor({
  plugins,
  // pass the content state - you can add multiple editables here
  editables: [content],
})

export const HomeView = () => (
  <div>
    <h4>This is a duck, because Redux!</h4>
    <img className='duck' src={DuckImage} />
    <Editable editor={editor} id={content.id}/>
    <Trash editor={editor}/>
    <DisplayModeToggle editor={editor}/>
    <Toolbar editor={editor}/>
  </div>
)

export default HomeView
