import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  show: boolean = false;
  todos: Array<any> = [];
  task: String = '';
  constructor() {}

  ngOnInit(): void {}

  addTask(e: any) {
    this.task = e.target.value;
    if (
      e.keyCode === 13 &&
      e.target.value !== '' &&
      e.target.value.match(/\S/)
    ) {
      this.addItem();
    }
  }

  addItem() {
    if (this.task !== '' && this.task.match(/\S/)) {
      this.todos.push({ task: this.task });
      this.task = '';
    }
  }

  removeItem(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
