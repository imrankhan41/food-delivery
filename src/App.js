
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
       <Route path="/login">
         <Login></Login>
       </Route>
       <Route path="/adduser">
         <AddUser></AddUser>
       </Route>
       <Route path="/myorders">
         <MyOrders></MyOrders>
       </Route>
       <Route path="/service/:serviceId">
         <PlaceOrder></PlaceOrder>
       </Route>
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
