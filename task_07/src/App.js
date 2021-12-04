
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import BookList from './components/booklist';
import BookDetails from './components/bookdeatils';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/booklist">
            <BookList/>
          </Route>

          <Route exact path="/booklist/:name">
            <BookDetails/>
          </Route>

          <Route exact path="/contact">
            <Contact/>
          </Route>

          

        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
