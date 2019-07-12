import React from 'react';

const IngredientList = (props) => (
    <>
        <h2>Ingredient List</h2> 
        {props.ingredients.map((ingredient, i) =>  <h4 key={i}>{ingredient.name}<button onClick={(e) => {props.addIngredient(e, i)}}>Add</button></h4>)}            
        
    </>
)

export default IngredientList;