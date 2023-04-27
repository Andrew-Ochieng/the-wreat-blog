// imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogDetails from './components/BlogDetails';
import Create from './pages/Create';
import About from './pages/About';
import Home from './pages/Home';
import useFetch from './components/useFetch';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import './App.css';



function App() {
  const { data: blogs, error, isLoading} = useFetch('http://localhost:1337/api/blogs?populate=image')
  // console.log(blogs)

  return (
    <div>
      <BrowserRouter>
        <div className="App m-0 p-0">
          <Navbar />
            <Routes>
              <Route path='/' element={ <Home blogs={blogs} error={error} isLoading={isLoading} /> }/>
              <Route path='/about' element={ <About /> }/>
              <Route path='/:id' element={ <BlogDetails blogs={blogs} /> }/>
              <Route path='/create' element={ <Create /> }/>
            </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
