import './index.css'

import {Component} from 'react'
import Header from '../Header'

export default class Course extends Component {
  state = {coursedata: {}, failerView: false}

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    const respData = await response.json()
    console.log(respData.course_details)
    if (response.ok) {
      const data = {
        id: respData.course_details.id,
        description: respData.course_details.description,
        imageUrl: respData.course_details.image_url,
        name: respData.course_details.name,
      }
      console.log(data)
      this.setState({coursedata: data, failerView: false})
    } else {
      this.setState({failerView: true})
    }
  }

  render() {
    const {coursedata, failerView} = this.state
    return (
      <>
        <Header />
        <div className="course-bg-container">
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
          ) : (
            <div className="course-card">
              <img className="cou-img" src={coursedata.imageUrl} alt="img" />
              <div className="n-d-div">
                <h1 className="cou-n">{coursedata.name}</h1>
                <p className="cou-d">{coursedata.description}</p>
              </div>
            </div>
          )}
        </div>
      </>
    )
  }
}
