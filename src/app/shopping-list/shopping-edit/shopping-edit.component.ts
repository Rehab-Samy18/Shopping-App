import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:false}) nameInputRef:ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef:ElementRef;
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();  //we emitted an event as we want to pass it to the parent component
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    //this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }
}
