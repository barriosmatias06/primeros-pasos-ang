import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  public charaterList: Character[] = [
    {
      name: 'Trunks',
      power:10
    },
  ]

  @Output()
  public onDeleted: EventEmitter<string> = new EventEmitter();

  onDeletedCharacter(id?:string):void {

    if(!id) return;

    console.log({id})
  this.onDeleted.emit(id);
  }



}
