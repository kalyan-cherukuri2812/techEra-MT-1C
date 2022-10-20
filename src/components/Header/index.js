import './index.css'

import {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className="header-bg">
        <Link to="/">
          <img
            className="header-logo"
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            alt="website logo"
          />
        </Link>
      </div>
    )
  }
}
