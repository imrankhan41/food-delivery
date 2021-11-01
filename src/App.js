
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Services from './Pages/Home/Service/Services/Services';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import AuthProvider from './contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';
import PlaceOrder from './Pages/Home/PlaceOrder/PlaceOrder';
import AddUser from './Pages/AddUser/AddUser';
import MyOrders from './Pages/MyOrders/MyOrders';
import MyDetailsOrder from './Pages/MyDetailsOrder/MyDetailsOrder';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import EditUser from './Pages/Edit User/EditUser';

function App() {
  return (
    <div className="App">
 
   <AuthProvider>
   <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/services">
         <Services></Services>
       </Route>
        <PrivateRoute path="/edituser/:id">
         <EditUser></EditUser>
       </PrivateRoute>
       <Route path="/login">
         <Login></Login>
       </Route>
       <PrivateRoute path="/adduser">
         <AddUser></AddUser>
       </PrivateRoute>
       <PrivateRoute path="/myorders">
         <MyOrders></MyOrders>
       </PrivateRoute>
       <PrivateRoute path="/manageallorders">
         <ManageAllOrders></ManageAllOrders>
       </PrivateRoute>
       <PrivateRoute path="/orders/:orderid">
         <MyDetailsOrder></MyDetailsOrder>
       </PrivateRoute>
       <PrivateRoute path="/service/:serviceId">
         <PlaceOrder></PlaceOrder>
       </PrivateRoute>
       <Route path="*">
         <PageNotFound></PageNotFound>
       </Route>
      </Switch>
     <Footer></Footer>
      </BrowserRouter>
   </AuthProvider>

        
      
     
    </div>
  );
}

export default App;
