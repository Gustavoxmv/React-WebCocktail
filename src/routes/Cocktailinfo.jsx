jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CardBody, CardTitle, Col, Button } from 'reactstrap';

const Cocktailinfo = ({ cocktail }) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`);
      const data = await response.json();
      const ingredientsArray = [];
      for (let i = 1; i <= 15; i++) {
        const ingredient = data.drinks[0][`strIngredient${i}`];
        const measure = data.drinks[0][`strMeasure${i}`];
        if (ingredient) {
          ingredientsArray.push({ ingredient, measure });
        } else {
          break; // Si no hay más ingredientes, sal del bucle
        }
      }
      setIngredients(ingredientsArray);
    };

    fetchIngredients();
  }, [cocktail.idDrink]);

  const [showIngredients, setShowIngredients] = useState(false);
  const toggleIngredients = () => {
    setShowIngredients(!showIngredients);
  };

  return (
    <CardBody>
      <CardTitle><h5>{cocktail.strDrink}</h5></CardTitle>
      <Link to={`/ingredientes/${cocktail.idDrink}`}>
        <Button color="primary" onClick={toggleIngredients}>Ver Ingredientes</Button>
      </Link>
      {showIngredients && (
        <Col md='8' className="ml-auto mr-auto text-center">
          <h2 className="title">Ingredients</h2>
          <br />
          <div className="d-flex flex-wrap">
            {ingredients.map((item, index) => (
              <div key={index} className="d-flex flex-column align-items-center mr-2 mb-2">
                <img src={`https://www.thecocktaildb.com/images/ingredients/${item.ingredient}-Medium.png`} style={{ width: '200px' }} />
                <span className='description'>{item.measure} {item.ingredient}</span>
              </div>
            ))}
          </div>
        </Col>
      )}
    </CardBody>
  );
};

