import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Course from './components/Course'
import Notfound from './components/NotFound'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={Course} />
    <Route component={Notfound} />
  </Switch>
)
export default App
