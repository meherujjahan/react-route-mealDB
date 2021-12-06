
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    console.log(props.meal)
const{ idMeal, strMeal, strMealThumb, strInstructions} = props.meal;
const url = `/resturant/${idMeal}`;

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