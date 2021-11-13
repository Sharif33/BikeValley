import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import LogIn from './LogIn/LogIn/LogIn';
import PrivateRoute from './LogIn/PrivateRoute/PrivateRoute';
import Register from './LogIn/Register/Register';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Review from './Pages/Dashboard/Review/Review';
import ExploreBikes from './Pages/Home/ExploreBikes/ExploreBikes';
import Home from './Pages/Home/Home/Home';
import SingleBike from './Pages/Home/SingleBike/SingleBike';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/bikes">
            <ExploreBikes></ExploreBikes>
          </Route>
          <PrivateRoute exact path="/bike/:id">
            <SingleBike></SingleBike>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/reviews">
            <Review></Review>
          </PrivateRoute>
          <Route exact path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route exact path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
