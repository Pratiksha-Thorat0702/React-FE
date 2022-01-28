import './App.css';
import Home from './Components/Home';
import {Product} from './Components/Product';
import {Cart} from './Components/Cart';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { BrowserRouter,NavLink,Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App(){
  return (

    <BrowserRouter>

    <div className="App">

     <h3 className=" d-flex justify-content-center m-3">

       WELCOME TO BOOKSHOP..THE BOOK SPOT!!

     </h3>

      <nav className="navbar navbar-expand-sm bg-light navbar-dark">

       <NavLink className="btn btn-light btn-outline-primary" to="/SignUp" >

             SignUp

           </NavLink>
           <NavLink className="btn btn-light btn-outline-primary" to="/SignIn" >
            
            SignIn

           </NavLink>
           <ul className="navbar-nav">

<li className="nav-item-m-1">

       <NavLink className="btn btn-light btn-outline-primary" to="/Home" >

                   HOME

       </NavLink>

</li>

<li className="nav-item-m-1">

  <NavLink className="btn btn-light btn-outline-primary" to="/Product">

    PRODUCT

  </NavLink>

</li>

<li className="nav-item-m-1">

  <NavLink className="btn btn-light btn-outline-primary" to="/Cart" >

    CART

</NavLink>

</li>
</ul>

</nav>

{/*<BrowserRouter><Route path="/" component={Product}></Route></BrowserRouter>
<BrowserRouter><Route path="/" component={Home}></Route></BrowserRouter>
  <BrowserRouter><Route path="/" component={Cart}></Route></BrowserRouter>*/}

<Route path='/Home' component={Home}/>

<Route path='/Product' component={Product}/>

<Route path='/Cart' component={Cart}/>

<Route path='/SignUp' component={SignUp}/>

{/*<Route path='/SignIn' component={SignIn}/>*/}


</div>

</BrowserRouter>

);

}

export default App;

     
