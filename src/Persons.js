import React from 'react';
import RouteButton from './RouteButton.js';
import SearchMovie from './SearchMovie';
import Hobbies from './Hobbies.js';
import './Persons.css';
import Details from './Details.js';

  let new_persons=[];
class Persons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            personArr:'',
            data:null
            
            
        } 
    }
    Next= () => {
        if(this.state.i<new_persons.length-1){
        this.setState({ i:this.state.i+1 })
        }
        else{
            this.setState({ i:0})
        }
    }
    handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
    componentDidMount(){
        

        if(window.location.hostname==="localhost"){
            let url = 'http://localhost:49304/api/persons';

            fetch(url)
            .then(this.handleErrors)
            .then(response => response.json())
            .then(data  => this.setState({data}))
            .catch(error => this.setState({error:"There was an error in getting the persons"}));
        }
        else{
            fetch('http://proj.ruppin.ac.il/bgroup88/test1/tar3/api/persons')
            .then(this.handleErrors)
            .then(response=>response.json())
            .then(data  => this.setState({data}))
            .catch(error => this.setState({error:"There was an error in getting the persons"}));
        }

    }
    render() {
       if(this.state.data!=null){
        let gend=this.props.location.data.gender;
        let from=this.props.location.data.from;
        let to=this.props.location.data.to;
        this.state.data.map((per)=> {
            if(per.Gender==gend &&per.Age>=from&& per.Age<=to){
                new_persons.push(per);
    }

});
        var person=new_persons[this.state.i];
       var path="http://proj.ruppin.ac.il/bgroup88/test1/tar3/"+person.Image;
        return (

            <div>
                <RouteButton value="Details" pathname="/" />  
                <h1>{person.Name}</h1>
                <img src={path} className="perImg"/>
                <br/>
                <button onClick={this.Next}>Like</button>
                <button onClick={this.Next}>Unlike</button>
                <h3>{person.Age}</h3>
                <h3>{person.Address}</h3>
                <h3>{person.Height}</h3>
                {(person.Premium) && <h3>Hobbies: {person.Hobbies.map((hob,index)=><Hobbies hobby={hob} key={index}/>)}</h3>}

            </div>


        )
    }
    else{
        return(
           <div> ...</div>
        )
    }
    }
}

export default Persons;