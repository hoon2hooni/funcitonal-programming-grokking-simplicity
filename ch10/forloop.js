// Page 249

/// Preparing and eating

for (var i = 0; i < foods.length; i++) {
  var food = foods[i];
  cook(food);
  eat(food);
}

/// Washing up

for (var i = 0; i < dishes.length; i++) {
  var dish = dishes[i];
  wash(dish);
  dry(dish);
  putAway(dish);
}

/// Give them names

function cookAndEatFoods() {
  for (var i = 0; i < foods.length; i++) {
    var food = foods[i];
    cook(food);
    eat(food);
  }
}

cookAndEatFoods();

function cleanDishes() {
  for (var i = 0; i < dishes.length; i++) {
    var dish = dishes[i];
    wash(dish);
    dry(dish);
    putAway(dish);
  }
}

cleanDishes();

// Page 250

/// call both "item"

function cookAndEatFoods() {
  for (var i = 0; i < foods.length; i++) {
    var item = foods[i];
    cook(item);
    eat(item);
  }
}

cookAndEatFoods();

function cleanDishes() {
  for (var i = 0; i < dishes.length; i++) {
    var item = dishes[i];
    wash(item);
    dry(item);
    putAway(item);
  }
}

cleanDishes();

/// change name to generic

function cookAndEatFoodsArray(array) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    cookAndEat(item);
  }
}

function cleanArray(array) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    clean(item);
  }
}

function clean(dish) {
  wash(dish);
  dry(dish);
  putAway(dish);
}

function cookAndEat(food) {
  cook(food);
  eat(food);
}


function operateOnArray(array, f) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    f(item);
  }
}

operateOnArray(foods, cookAndEat)
operateOnArray(dishes, clean);


function forEach(array, f) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    f(item);
  }
}