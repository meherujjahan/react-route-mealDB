import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Meal from './meal/Meal';

const Resturant = () => {
    const [meals, setMeals] =useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
        .then(res => res.json())
        .then(data =>setMeals(data.meals))
        
    },[])
    return (
        <div>
           <h1>total meals: {meals.length}</h1>
           <Row xs={1} md={3} className="g-4">
           {
               meals.map(meal => <Meal
               key = {meal.idMeal}
                 meal ={meal}
                 ></Meal>)
           }
      </Row>
          
        </div>
    );
};

export default Resturant;