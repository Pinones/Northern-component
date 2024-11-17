import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input-controller',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-controller.component.html',
  styleUrl: './input-controller.component.scss',
})
export class InputControllerComponent {
  private fb = inject(FormBuilder);
  form!: {};
  isFormValid!: boolean;

  inputForm = this.fb.group({
    inputs: this.fb.array([]),
  });

  get inputs() {
    return this.inputForm.get('inputs') as FormArray;
  }

  onAddInputField(title: string) {
    if (title.length > 0) {
      this.isFormValid = true;
      this.inputs.push(
        this.fb.group({
          title: [title],
          value: [''],
        })
      );
    } else {
      this.isFormValid = false;
    }
  }

  onRemoveInputField(i: number) {
    this.inputs.removeAt(i);
  }
  onAddRequiredValidator(i: number) {
    this.inputs.at(i).get('value')?.setValidators([Validators.required]);
    this.inputs.at(i).get('value')?.updateValueAndValidity();
  }

  onRemoveRequiredValidator(i: number) {
    this.inputs.at(i).get('value')?.clearValidators();
    this.inputs.at(i).get('value')?.updateValueAndValidity();
  }

  onSubmit() {
    this.form = JSON.stringify(this.inputForm.value);
  }
}
