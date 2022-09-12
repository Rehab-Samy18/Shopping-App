import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes : Recipe[] = [  //so that we can't directly access this array from outside
    new Recipe(
      'Simple Fried Chicken Breast Cutlets',
      'A super-tasty fried chicken - just awesome!',
      'https://www.thespruceeats.com/thmb/vXAnDRMRE4hhpENdSN6eyTsBeeg=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/simple-fried-chicken-breast-cutlets-3056859-Hero-5b8d4b3646e0fb0025e8f8ec.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries',20)
      ]),
    new Recipe(
      'Pasta Al Pomodoro',
      'Pasta with red saus - just awesome!',
      'https://assets.epicurious.com/photos/56043a3e7c9cb37c518d5bde/9:4/w_1178,h_523,c_limit/365186_hires.jpg',
      [
        new Ingredient('Buns',2),
        new Ingredient('Meat',1)
      ])
  ]
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService:ShoppingListService) { }

  getRecipes(){  //to access the array from outside
    return this.recipes.slice();
  }

  getRecipe(index:number)
  {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
