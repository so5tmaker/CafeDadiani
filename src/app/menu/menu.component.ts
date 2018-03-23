import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';

const DISHES: Dish[] = [
  {
    name:'Чашушули',
    image: '/assets/images/chashushuli.jpg',
    category: 'Основные',
    label:'Hot',
    price:'1 699',
    description:'Блюдо из мяса говядины (телятины). В переводе с грузинского обозначает - острый, так как это блюдо приготовлено с большим количеством острого перца, в собственном соку, что обеспечивает ему неповторимый вкус, очень мягкий и острый одновременно.'                        },
 {
    name:'Пхали',
    image: '/assets/images/phali.jpg',
    category: 'Закуски',
    label:'',
    price:'1 699',
    description:'Грузинское блюдо Пхали - это холодная закуска, которая может делаться из различных овощей и трав, но неизменным ее ингредиентом являются орехи и специи. Наш вкусный Пхали запомнится Вам надолго.'                        },
 {
    name:'Чахохбили',
    image: '/assets/images/chahohbili.jpg',
    category: 'Основные',
    label:'New',
    price:'1 699',
    description:'Блюдо дня - аппетитный чахохбили! Первоначально делалось из фазана (груз. ხოხობი — [хохоби]), но в настоящее время из любого мяса птицы, а особенно домашней курицы.'                        },
 {
    name:'Пахлава',
    image: '/assets/images/pahlava.jpg',
    category: 'Десерт',
    label:'',
    price:'699',
    description:'И в Завершении трапезы не забудьте вкусить сладость сочнейшей свежей "Пахлавы". Это популярное кондитерское изделие из слоёного теста с орехами в сиропе.'                        }
 ];


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes = DISHES;

  selectedDish = DISHES[0];
  
  constructor() { }

  ngOnInit() {
  }

}
