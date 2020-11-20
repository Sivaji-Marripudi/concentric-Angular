import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

// import { ThemePalette } from '@angular/material/core';

// import { MatFormFieldModule } from '@angular/material/form-field';
// import { FormControl, Validators } from '@angular/forms';


// export interface Task {
//   name: string;
//   completed: boolean;
//   color: ThemePalette;
//   subtasks?: Task[];
// }
@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent  {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
}
