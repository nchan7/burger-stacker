import React from 'react';

const BurgerPane = (props) => (
    <>
        <h2>My Burger</h2>    
        
        {props.usedIngredients.map((usedIngredient, i) =>  <p key={i} style={{backgroundColor: usedIngredient.color}}>{usedIngredient.name}</p>)}            
        
        <button onClick={props.clearStack}>Clear</button>
    </>
)

export default BurgerPane;