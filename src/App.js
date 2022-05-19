
import './App.css';
import Home from './Routing/Home';
import Pages from './Routing/Pages';
import Post from './Routing/Post'
import Authors from'./Routing/Authors'
import Tags from './Routing/Tags';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  console.log("hello");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/post' element={<Post />}/>
          <Route path='/pages' element={<Pages />}/>
          <Route path='/authors' element={<Authors/>}/>
          <Route path='/tags' element={<Tags/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
