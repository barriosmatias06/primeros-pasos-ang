import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  public name: string = 'Iroman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();

  }

  getHeroDescrption():string{
    return `${this.name} - ${this.age}`;

  }

  changeHero():void {
    this.name = 'spiderman'
  }

  changeAge():void{
    this.age = 22;
  }

  resetForm():void{
    this.name= 'Ironman';
    this.age = 45;
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Hola desde angulars</h1>'
    // });

  }
}
