/*
  Группировка блюд по использованным продуктам
*/
function groupingDishes(dishes) {
  // уникальные продукты
  const ingredients = dishes.reduce((ingredients, dish) => {
    dish.slice(1).forEach((x) => {
      if (!ingredients.includes(x)) {
        ingredients.push(x);
      }
    });
    return ingredients;
  }, []);

  // продукты для двух и более блюд
  const commonIngredients = ingredients
    .reduce((common, ingredient) => {
      const dishesWithIngredient = dishes.filter((dish) => {
        return dish.includes(ingredient);
      });

      if (dishesWithIngredient.length > 1) {
        common.push(ingredient);
      }

      return common;
    }, [])
    .sort();

  return commonIngredients.map((ingredient) => {
    return [
      ingredient,
      ...dishes
        .filter((dish) => dish.includes(ingredient))
        .map((dish) => dish[0])
        .sort(),
    ];
  });
}

module.exports = groupingDishes;
