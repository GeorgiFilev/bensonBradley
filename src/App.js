import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import { useState } from 'react';
import Login from './Login';
import Footer from './Footer';

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const person = { name: "yosi", age: 30 };
  // const link = "http:///www.google.com";
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log('has authentication');
    setLoggedIn(true);
  }

  const handleLogout = () => {
    console.log('logout');
    setLoggedIn(false);
  }
  return (
    <Router>
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home loggedIn={loggedIn} handleLogout={handleLogout}></Home>
            </Route>
            <Route exact path="/create">
              <Create loggedIn={loggedIn} />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails loggedIn={loggedIn} />
            </Route>
            <Route exact path="/login">
              <Login handleLogin={handleLogin}></Login>
            </Route>
            <Route path="*">
              <Home loggedIn={loggedIn}></Home>
            </Route>
          </Switch>
        </div>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
