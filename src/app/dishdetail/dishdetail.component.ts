import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Comment } from '../shared/comment';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;
  commentForm: FormGroup;
  comment: Comment;
  date = new Date();
  errMess: string;

  formErrors = {
    'comment': '',
    'author': ''
  };

  validationMessages = {
    'comment': {
      'required': 'Обязательно введите комментарий.'
    },
    'author': {
      'required': 'Обязательно введите имя автора.',
      'minlength': 'Имя автора должно быть не меньше 2-х символов.',
      'maxlength': 'Имя автора не должно быть меньше 25 символов.'
    }
  };

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) {
    this.createForm();
  }

  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params   // plus "+" - before params convert string type into integer type
      .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); },
      errmess => { this.dish = null; this.errMess = <any>errmess; });
  }

  createForm() {
    this.commentForm = this.fb.group({
      rating: 5,
      comment: ['', Validators.required],
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      date: ''
    });
    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  onSubmit() {
    this.comment = this.commentForm.value;

    this.dish.comments.push(this.comment);

    let date = new Date();
    this.comment.date = date.toISOString();

    this.commentForm.reset({
      author: '',
      rating: 5,
      comment: ''
    });
  }

  goBack(): void {
    this.location.back();
  }

}
