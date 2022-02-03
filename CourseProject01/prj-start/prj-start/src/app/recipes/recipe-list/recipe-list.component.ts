import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://foodal.com/wp-content/uploads/2017/12/Asian-Steak-Roll-Ups.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://foodal.com/wp-content/uploads/2017/12/Asian-Steak-Roll-Ups.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
