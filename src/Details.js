import React from 'react';
import RouteButton from './RouteButton.js';
import SearchMovie from './SearchMovie';
import Movie from './Movie.js';
import './Details.css';
class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gender: null,
            from:0,
            to:0
        }
    this.setGender = this.setGender.bind(this);
    this.setFrom = this.setFrom.bind(this);
    this.setTo = this.setTo.bind(this);
    }

    setGender = (evt) => {
        this.setState({ gender: evt.target.value })
    }

    setFrom = (evt) => {
        this.setState({from: evt.target.value});
    }

    setTo = (evt) => {
        this.setState({to: evt.target.value});
    }
    render() {

        return (

            <div>
                <h4>Get Started</h4>
                <h3>Choose Partner Gender</h3>
                <input type='radio' name="gender" value="Male" onChange={this.setGender}/>Male <br/>
                <input type='radio' name="gender" value="Female" onChange={this.setGender}/>Female

                <h3>Choose Partner Age</h3>
                Between <br/>
                <input type="text" onChange={this.setFrom}/><br/>
                To <br/>
                <input type="text" onChange={this.setTo}/>
                <br/>
                <br/>
                <RouteButton value="Find" pathname="/persondetails" data={this.state} />  
            </div>


        )
    }

}

export default Details;