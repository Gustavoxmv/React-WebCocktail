import React from 'react'
import { Container } from "reactstrap";
import cocktailImage from '../assets/img/bartender-making-refreshing-cocktail.jpg';
import cloudsImage from '../assets/img/clouds.png';
import creativeTimLogo from '../assets/img/69294188.png';
export const HeaderCocktail = () => {
  return (
    <>
    <div className="page-header section-dark" style={{ backgroundImage: `url(${cocktailImage})` }}>
          <div className="filter" />
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h1 className="presentation-title">Cocktail Kit</h1>
              
              </div>
              <h2 className="presentation-subtitle text-center">
              ¡Deja tu huella con un kit de Cocktels especialmente para ti!
              </h2>
            </Container>
          </div>
          <div
            className="moving-clouds"
            style={{ backgroundImage: `url(${cloudsImage})` }}
          />
         
        </div>
        </>
  )
}
