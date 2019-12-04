import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


class App extends Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
        
    }
    componentDidMount(){
    
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots:users}));
        
    }
     onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
        

    }
    render(){
            
            const { robots, searchfield } = this.state;
            
            const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
             
            }) //if its not zero, turn it into true.
            if (!robots.length){
                return <h1>Loading</h1>
            }else{
                return(
                    <div className='tc'>
                        <h1>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                        <Cardlist data = {filteredRobots} />
                        </Scroll>
                    </div>
                    
                );
            }
        
       
    }
}

export default App;