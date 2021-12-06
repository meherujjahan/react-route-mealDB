import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        Color : 'red',
        FontSize: '20px'
    }
    return (
        <div>
           <NavLink activeStyle = {activeStyle} to = "/resturant">Resturant</NavLink>
           
           <NavLink activeStyle = {activeStyle}  to = "/resturant/:mealID"> MealDetails</NavLink>
           <NavLink activeStyle = {activeStyle}  to = "/notfound"> Not Found</NavLink>
        </div>
    );
};

export default Header;