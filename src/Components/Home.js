//import { Component } from "react";
import React,{Component} from "react";
import App from "../App";
//import './App.css';
//import logo from './logo.svg';
//import img from './image/image1.png';
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
                
                
                      </tbody>
                        </table>

    </div>
                      
    
        );
                      }
                      
                

}     
export default Home;