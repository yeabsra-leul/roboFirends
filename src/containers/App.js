import React, {Component} from 'react';
// import { robots } from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchox';
import Scroll from '../components/Scroll'
import './App.css';
class App extends Component{
    constructor(){
        super()
        this.state = {
            robots:[] ,
            searchfield : ''
        }
    }

    onSearchChange = (event)=>{
        this.setState({searchfield:event.target.value});
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({robots:user}))
    }
    render(){

        const {robots,searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return(
                robot.name.toLowerCase().includes(searchfield.toLowerCase())
            );
        })
        return !robots.length?<h1 className='tc'>LOADING</h1>:
            (<div className='tc'>
                <h1>Robo Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll><CardList robots = {filteredRobots}/></Scroll>
                
            </div>
            );
    }

    
}
export default App;