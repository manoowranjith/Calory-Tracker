import { Component, OnInit } from '@angular/core';
import {foodList} from '../foodList';
@Component({
  selector: 'app-app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css']
})
export class AppFoodListComponent implements OnInit {

  foodItems:any
  newFood={
    image:"",
    name:"",
    calorie:""
  }
  todayFoods:any=[]
  // foodName="";
  // foodCalorie=0;
  foodCount=0;
  filteredString = "";
  calories=0;
  constructor() { 
    this.foodItems=foodList
  }

  ngOnInit(): void {
  }

  addNewFood()
  {
    this.foodItems.unshift(this.newFood)
    this.newFood={
      image:"",
      name:"",
      calorie:""
    }
  }

  onKey(event: any) { 
    this.foodCount = event.target.value;
  }

  addCalorie(foodName:any,foodCalorie:any){
    if(this.foodCount<1)
    {
      alert("Quantity must be atleast 1")
    }
    else{
      this.calories+=Number(foodCalorie)*Number(this.foodCount)
      if(this.foodCount == 1)
      {
          this.todayFoods.push(foodName+" "+foodCalorie)
      }
      else if(this.foodCount>1){
        this.todayFoods.push(foodName+" "+foodCalorie+" x"+this.foodCount)
      }
    }
    
  }
}
