import { Component, OnInit } from '@angular/core';
import foods from '../food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods!: Object[];
  myList: { name: string, calories: number, quantity: number, image: string }[] = [];
  pattern!: string;
  isEditing: boolean = false;
  name: string = "Example Name";
  calories: number = 250;
  image: string = "https://imagefinder.co/storage/w1000/images/2019/02/freestocks_sandwich_3-1000x667.jpg";
  quantity!: number;
  totalCalories: number = 0;


  constructor() { }

  ngOnInit(): void {
    this.foods = foods;
  }

  enableUserToAddFood() {
    this.isEditing = !this.isEditing;
  }

  newFood() {
    const newFood = {
      name: this.name,
      calories: this.calories,
      image: this.image,
      quantity: 0
    }

    this.foods.unshift(newFood);

    this.isEditing = true;
    this.name = "";
    this.calories ;
    this.image = "";
  }

  addToMyList(food: { name: any; calories: any; quantity: any; image: string; }, quantityInput: { value: any; }) {
    const existingFood = this.myList.find(item => item.name === food.name)
    const quantity = Number(quantityInput.value)

    if (existingFood) {
      existingFood.quantity += quantity;
    } else {
      food.quantity = quantity;
      this.myList.push(food);
    }
    this.totalCalories += (food.calories * quantity);
    this.quantity = 1;
  }
}