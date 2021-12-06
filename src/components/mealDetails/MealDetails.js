import React from 'react';
import { useParams } from 'react-router';

const MealDetails = () => {
    
const {mealID} = useParams();
console.log(mealID)
    return (
        <div>
            <h1>meal details : {mealID}</h1>
        </div>
    );
};

export default MealDetails;