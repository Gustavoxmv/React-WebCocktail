import React from 'react';
import { HeaderCocktail } from './components/HeaderCocktail';
import { NavbarCocktail } from './components/NavbarCocktail';
import { TableSection } from './components/TableSection';
import { CustomCocktail } from './Custom Hook/CustomCocktail';
import { FetchCocktail } from './Custom Hook/FetchCocktail';


export const CocktailApp = () => {
  return (
<>

      <NavbarCocktail />
      <HeaderCocktail />
      <TableSection />
      <CustomCocktail />
      <FetchCocktail />


</>
  
  );
};
