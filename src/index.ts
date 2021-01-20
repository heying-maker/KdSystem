import ReactDom from 'react-dom'
import { app } from './App'

const el = document.createElement('div')
document.body.append(el)

ReactDom.render(app, el)
