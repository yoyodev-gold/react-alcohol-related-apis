import React from 'react';
import HeaderComponent from './components/Header.component';
import FormComponent from './components/Form.component';

import CategoriesProvider from './context/Categories.context';
import RecipesProvider from './context/Recipes.context';
import ListingRecipesComponent from './components/ListingRecipes.component';

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <HeaderComponent/>

        <div className="container">
          <div className="row">
            <FormComponent/>
          </div>
          <ListingRecipesComponent/>
        </div>
      </RecipesProvider>  
    </CategoriesProvider>
  );
}

export default App;
