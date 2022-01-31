//import { Component } from "react";
import React,{Component} from "react";
import App from "../App";
//import './App.css';
//import logo from './logo.svg';
//import img from './image/image1.png';
//import Quantity from './Components/Quantity';

class Home extends Component {

	// Constructor
    constructor(props) {
		super(props);

		this.state = {
        Homes: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch("http://localhost:5000/api/Book")
			.then((resp) => resp.json())
			.then((json) => {
				this.setState({
					Homes: json,
					DataisLoaded: true
				});
			})
	}
		render() {
		const { 
            Homes
        } = this.state;
		return(
		 <div>
			<table className="table table-stripe" >
              <thead>
                  <tr>
                  
                      <th>BookName</th>
				        <th>Author </th>	
				        <th>Language </th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>AddToCart</th>
                        </tr>
                      </thead>  
                      <tbody>
                      {Homes.map(item => (
				
                <tr  key ={item.BookName}>
                <td>{ item.BookName}</td>
                <td> { item.Author} </td>	
                <td> { item.Language} </td>
                <td> { item.Price} </td>
                <td> { item.Quantity} </td>
                <td> { item.AddToCart} </td>
                </tr>
                      ))
        }
            {/*   <td>
                   <input type="number" placeholder="0" value={item.stock}></input>
               </td>
               <td>
                   <button type="button"
                   className="btn-btn-light me-1">AddToCart</button>
               </td>
               <td>
                   <button type="button"
                   className="btn-btn-light me-1">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg> 
                   </button>

               </td>
                </tr>
        
                      ))
                      }
                      <script src="Quantity.js"></script>
                
                */}
                      
                      </tbody>
                        </table>

    </div>
                      
    
        );
                      }
                      
                

}     
export default Home;