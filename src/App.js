import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './LogIn/LogIn/LogIn';
import Register from './LogIn/Register/Register';
import Bikes from './Pages/Home/Bikes/Bikes';
import Home from './Pages/Home/Home/Home';
// import SingleBike from './Pages/Home/SingleBike/SingleBike';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        {/* <Route exact path="/about">
        <AboutUs></AboutUs>
      </Route> */}
        <Route exact path="/bikes">
          <Bikes></Bikes>
        </Route>
        {/* <PrivateRoute exact path="/resort/:id">
        <SingleBike></SingleBike>
      </PrivateRoute>
      <Route exact path="/contact">
        <ContactUs></ContactUs>
      </Route>
      <PrivateRoute exact path="/myOrders">
        <MyOrders></MyOrders>
      </PrivateRoute>
      <PrivateRoute exact path="/addResort">
        <AddResort></AddResort>
      </PrivateRoute>
      <PrivateRoute exact path="/manageOrder">
        <ManageOrder></ManageOrder>
      </PrivateRoute> */}
        <Route exact path="/login">
          <LogIn></LogIn>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        {/* <Route path="*">
        <NotFound></NotFound>
      </Route> */}
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
