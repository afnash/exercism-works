/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(time){
  if (time === null || time === undefined){
    return ('You forgot to set the timer.');
  }
  if (time > 0) {
    return ('Not done, please wait.');
  }
  else{
    return ('Lasagna is done.')
  }
}

export function preparationTime(layers,time) {
  if(!time){
    return layers.length * 2;
  }
  else{
    return layers.length * time;
  }
}

export function quantities(layers) {
  let wtNoodles = 0;
  let qtSauce = 0;
  for(let item of layers){
    if (item === 'noodles') {
      wtNoodles += 50;
    }
    else if(item === 'sauce') {
      qtSauce += 0.2;
    }
  }
  return {
    'noodles' : wtNoodles,
    'sauce' : qtSauce,
  };
}

export function addSecretIngredient(friendsList,myList) {
  const secretIng = friendsList[friendsList.length-1];
  myList.push(secretIng);
}

export function scaleRecipe(recipe,amount) {
  const newObj = {};
  for(const item in recipe ){
    newObj[item] = recipe[item];
  }
  for(const item in newObj){
    newObj[item] = newObj[item] * amount / 2;
  }
  return newObj;
}