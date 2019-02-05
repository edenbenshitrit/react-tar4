import React, { Component } from 'react';
import './App.css';
import { Route, Link, HashRouter as Router } from 'react-router-dom';
//import Users from './Users.js';
//import Search from './Search.js';
import Details from './Details';
import Persons from './Persons';

class App extends Component {

  render() {
    
    return (
      <div className="App">
      
        <Router>
          <div>    
            <Route exact path="/"       component={Details} />
            <Route path="/persondetails" component={Persons}/>
           </div>
        </Router>
      </div>
    );
  }
}


export default App;




            
            {/* <Search personlist={this.props.persons}/> */}
            
            {/* <Route path="/moviedetails" component={MovieDetails} /> */}
           
                {/* <Link to='/'>Movies</Link> &nbsp; &nbsp;

                <Link to='/actors'>Actors</Link> */}

            {/* <Route path="/"             component={Movies} exact />
            <Route path="/actors"       component={Actors} />
            <Route path="/moviedetails" component={MovieDetails} />
  */}
            {/* <Link to='/users'>Search</Link>
            <Route path="/user"       component={Users} /> 
                   
                   */}
             {/* <h1>Some footer</h1>  
             <Button bsStyle="primary">Primary</Button> */}