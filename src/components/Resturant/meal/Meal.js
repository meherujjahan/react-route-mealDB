
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
   
const{ idMeal, strMeal, strMealThumb, strInstructions} = props.meal;
const url = `/resturant/${idMeal}`;
console.log(url)
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={strMealThumb} />
          <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <Card.Text>
             {strInstructions.slice(0, 200)}
            </Card.Text>
           <Link to = {url}> Visite me</Link>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Meal;