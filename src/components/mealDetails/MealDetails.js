
import { useParams } from 'react-router-dom';


const MealDetails = () => {
    
const mealID = useParams();
console.log(mealID)
    return (
        <div>
            <h1>meal details :{mealID} </h1>
        </div>
    );
};

export default MealDetails;