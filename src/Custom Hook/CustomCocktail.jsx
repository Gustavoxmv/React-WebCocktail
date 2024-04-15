import React, { useEffect, useState } from 'react'
import { initReactI18next } from 'react-i18next';
import { FetchCocktail } from './FetchCocktail';


import {
    Card,
    Container,
    Row,
    Col,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    Button,

  } from "reactstrap";


export const CustomCocktail = () => {

    const [cocktail, setCocktail] = useState([]);
    const [cocktailImage, setcocktailImage] = useState('')
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const fetchCocktail = async () => {
          const response = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/random.php"
          );
          const data = await response.json();
          setCocktail(data.drinks[0]);
        };
    
        fetchCocktail();
      }, []);

     

  return (
<>
<div className="section section-dark">

<Container>

    <Row >

<Col md='4'>

<Card >
      <CardImg
    
        top
        width="100%"
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
      />
 


<CardBody>
  <CardTitle><h2 className='title-black'>{cocktail.strDrink}</h2></CardTitle>
  <CardText>
    <p style={{ color: 'black' }}>{('instructions')}: {cocktail.strInstructions}</p>
  </CardText>
  <div className='d-flex justify-content-center'>
  </div>
</CardBody>
    </Card>

</Col>


<Col md='8' className="ml-auto mr-auto text-center">
<h2 className="title">Ingredients</h2>
<br />
<div className="d-flex flex-wrap">
    {cocktail.strIngredient1 && (
      <div className="d-flex flex-column align-items-center mr-2 mb-2">
        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient1}-Medium.png`} style={{ width: '200px' }} />
        <span className='description'>{cocktail.strMeasure1} {cocktail.strIngredient1} </span>
      </div>
    )}
    {cocktail.strIngredient2 && (
      <div className="d-flex flex-column align-items-center mr-2 mb-2">
        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient2}-Medium.png`} style={{ width: '200px' }} />
        <span className='description'>{cocktail.strMeasure2} {cocktail.strIngredient2}</span>
      </div>
    )}
    {cocktail.strIngredient3 && (
      <div className="d-flex flex-column align-items-center mr-2 mb-2">
        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient3}-Medium.png`} style={{ width: '200px' }} />
        <span className='description'>{cocktail.strMeasure3} {cocktail.strIngredient3} </span>
      </div>
    )}
    {cocktail.strIngredient4 && (
      <div className="d-flex flex-column align-items-center mr-2 mb-2">
        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient4}-Medium.png`} style={{ width: '200px' }} />
        <span className='description'> {cocktail.strMeasure4} {cocktail.strIngredient4}</span>
      </div>
    )}
    {cocktail.strIngredient5 && (
      <div className="d-flex flex-column align-items-center mr-2 mb-2">
        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail.strIngredient5}-Medium.png`} style={{ width: '200px' }} />
        <span className='description'>{cocktail.strMeasure5} {cocktail.strIngredient5} </span>
      </div>
    )}
  </div>
</Col>


    
      
    </Row>


    <Row>

   
   <Col md='5'>
   

   </Col>
    </Row>
</Container>


</div>

</>
  )
}
