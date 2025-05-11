import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  standalone: true,
  imports: [FormsModule]
})
export class TaskComponent {
  tasks = [
    { title: 'Learn Angular', completed: false },
    { title: 'Build a project', completed: false }
  ];

  newTask = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ title: this.newTask, completed: false });
      this.newTask = '';
    }
  }
}
