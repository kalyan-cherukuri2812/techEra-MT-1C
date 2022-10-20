import './index.css'

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import Header from '../Header'

export default class Home extends Component {
  state = {list: [], loader: true, failerView: false}

  retry = () => {
    this.getData()
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/te/courses')
    const respData = await response.json()
    console.log(respData.courses)
    if (response.ok) {
      const data = respData.courses.map(each => ({
        id: each.id,
        logoUrl: each.logo_url,
        name: each.name,
      }))
      this.setState({list: data, loader: false, failerView: false})
    } else {
      this.setState({failerView: true, loader: false})
    }
  }

  render() {
    const {list, loader, failerView} = this.state
    return (
      <div>
        <Header />
        <div className="home-bg-card">
          <h1 className="home-h">Courses</h1>
          {loader ? (
            <div loader="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <ul>
              {list.map(each => (
                <Link key={each.id} className="link" to={`/courses/${each.id}`}>
                  <li>
                    <img className="li-img" src={each.logoUrl} alt={each.id} />
                    <p className="li-h">{each.name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          )}
          {failerView ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png "
                alt="failure view"
              />
              <h1>Oops! Something Went Wrong</h1>
              <p>We cannot seem to find the page you are looking for</p>
              <button onClick={this.retry} type="button">
                Retry
              </button>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}
