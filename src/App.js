import React from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import './App.css'


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      ingredients: [
      {name: 'Kaiser Bun', color: 'saddlebrown'},
      {name: 'Sesame Bun', color: 'sandybrown'},
      {name: 'Gluten Free Bun', color: 'peru'},
      {name: 'Lettuce Wrap', color: 'olivedrab'},
      {name: 'Beef Patty', color: '#3F250B'},
      {name: 'Soy Patty', color: '#3F250B'},
      {name: 'Black Bean Patty', color: '#3F250B'},
      {name: 'Chicken Patty', color: 'burlywood'},
      {name: 'Lettuce', color: 'lawngreen'},
      {name: 'Tomato', color: 'tomato'},
      {name: 'Bacon', color: 'maroon'},
      {name: 'Onion', color: 'lightyellow'}
    ],
      stack: []
    }
    this.clearStack = this.clearStack.bind(this)
    this.addIngredient = this.addIngredient.bind(this)
  }

  // stackIngredients(e) {
  //   e.preventDefault();
  //   const selectedIngredient = e.target.value;
  //   this.setState({
  //     stack: this.state.stack.push(selectedIngredient)
  //   })
  // }

  addIngredient(e, i) {
    e.preventDefault();
    const stackCopy = Array.from(this.state.stack); //this.state.stack.slice()
    stackCopy.unshift(this.state.ingredients[i]);
    this.setState({
      stack: stackCopy
    })
  }

  clearStack(e) {
    e.preventDefault();
    this.setState({
      stack: []
    })
  }

    // this.setState((state) => {
    //   const stackName = [state.value, ...state.stackName]
    //   return {
    //     stackName,
    //     value: '',
    //   }
    // })
  


  render() {
    const listCopy = Array.from(this.state.ingredients)
    const stackCopy = Array.from(this.state.stack);
    return(
      <main>
        <div id='ingredients'>
          <IngredientList ingredients={listCopy} addIngredient={this.addIngredient} />
        </div>
        
        <div id='burgerlist'>
          <BurgerPane usedIngredients={stackCopy} clearStack={this.clearStack}/>
        </div>
      </main>  
    )
  }
}



export default App;
