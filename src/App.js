import React, { Component } from 'react';
import { CardList } from './componants/card-list/card-list.component';
import { SearchBox } from './componants/search-box/search-box.component';
import './css/App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    /**
     * we are doing this, becuase in here <SearchBox placeholder='Odai test' handelChange={this.getUsrInput} />
     * we are pointing to the getUsrInput function but we are not spicafaing the content of this insude the function
     * So we do bind this to change the content of this inside the function
     * this.getUsrInput = this.getUsrInput.bind(this);
     */
    
  };
 

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({
      monsters : users
    }))
  }
  
  getUsrInput = (event) => {
    // we can pass a call back to setState function to exicute the code imedatly after seting the state
    // because setstate is asynce function
    this.setState({
      searchField : event.target.value
    }, () => {console.log(this.state)});
  }

  render(){
    const { monsters, searchField } = this.state;
    
    /**
     * what this line do is something instade of doing
     * const monsters = this.state.monsters;
     * const searchField = this.state.searchField;
     */
    const filterdMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
      <div className="App">
        <SearchBox placeholder='Odai test' handelChange={this.getUsrInput} />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
  
}
export default App;


/**
 * Notes:
  _________
  1- we should not call setState in render becase each time we set the state React rerender so if we call in the render function we are createing an infint loop (render -> setState -> rerender -> render -> setState ....etc)

*/