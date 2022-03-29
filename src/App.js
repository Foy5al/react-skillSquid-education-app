import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CourseDetails from './components/Courses/Course/CourseDetails/CourseDetails';
import Courses from './components/Courses/Courses';
import Enrolled from './components/Enrolled/Enrolled';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Pricing from './components/Pricing/Pricing';


function App() {
  return (
    <div className="App flex-wrapper">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/course/details/:courseId">
            <CourseDetails></CourseDetails>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/price">
            <Pricing></Pricing>
          </Route>
          <Route path="/enrolled">
            <Enrolled></Enrolled>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
