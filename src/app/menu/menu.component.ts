import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = [
    {
      name:'Чашушули',
      image: '/assets/images/chashushuli.png',
      category: 'Основные',
      label:'Hot',
      price:'1.699',
      description:'Блюдо из мяса говядины (телятины), родом из Грузии. В переводе с грузинского обозначает - острый, поэтому это блюдо рекомендуется готовить с большим количеством острого перца, но конечно, можно степень остроты определить под себя. Это блюдо готовится в собственном соку, что обеспечивает ему неповторимый вкус, очень мягкий и острый одновременно. Готовить блюдо нужно в казане, что бы мясо не получилось сухим и жестким.'                        },
   {
      name:'Пхали',
      image: '/assets/images/phali.png',
      category: 'Закуски',
      label:'',
      price:'1.699',
      description:'Грузинское блюдо Пхали - это холодная закуска, которая может делаться из различных овощей и трав, но неизменным ее ингредиентом являются орехи и специи. Наш вкусный Пхали запомнится Вам надолго.'                        },
   {
      name:'Чахохбили',
      image: '/assets/images/chahohbili.png',
      category: 'Основные',
      label:'New',
      price:'1.699',
      description:'Блюдо дня - аппетитный чахохбили! Раньше чахохбили готовился исключительно из фазана, а позже его начали делать из всех видов птицы.'                        },
   {
      name:'Пахлава',
      image: '/assets/images/pahlava.png',
      category: 'Десерт',
      label:'',
      price:'699',
      description:'И в Завершении трапезы не забудьте вкусить сладость сочнейшей свежей "Пахлавы".'                        }
   ];

  constructor() { }

  ngOnInit() {
  }

}
