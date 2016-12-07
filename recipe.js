'use strict';
var ingredient;
var amount;
var recipe = {};

function addIngredient(recipe, ingredient, amount) {
  recipe[ingredient] = amount;
  return recipe;
}

function removeIngredient(recipe, ingredient){
  for(var key in recipe){
    if(key == ingredient){
      delete recipe[key];
    }
  }
  return recipe;
}

function updateIngredient(recipe, ingredient, amount){
  for(var kee in recipe){
    if(kee == ingredient){
      delete recipe[kee];
      recipe[ingredient]= amount;
    }
  }
  return recipe;
}

function readRecipe(recipe){
  for(var key in recipe){
       console.log('this recipe calls for '+ recipe[key] + " of "+ key);
  }
}
