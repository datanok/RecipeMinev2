import React from 'react'
import { connect } from 'react-redux';
import RecipeCard from './RecipeCard';

function RecipeList({recipes,loading,error}) {
  console.log(recipes.hits)
  return (
    <>
    {loading === false && recipes&&
    <div className='w-[80%] mx-auto gap-4 grid grid-cols-12'>
    {recipes?.hits?.map(recipe => (
      <div className='col-span-4' key={recipe.id}>
        <RecipeCard recipe={recipe} />
      </div>
    ))}
  </div>
  
    
    }
    </>
  )
}
const mapStateToProps = (state) => ({
  recipes: state.recipes,
  loading: state.loading,
  error: state.error
  });

export default connect(mapStateToProps)(RecipeList)