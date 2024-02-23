import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import './App.css';
import Login from './screens/login'
import Home from './screens/Home'
import CreatePost from "./screens/createPost";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element=  {<Login/>} />
          <Route exact path='/home' element=  {<Home/>} />
          <Route exact path='/create-post' element=  {<CreatePost/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
