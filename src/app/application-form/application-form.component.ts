import { Component } from '@angular/core';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css'],
})
export class ApplicationFormComponent {
  // submit() {
  //   console.log('submit');
  //   console.log(this.cv);
  // }

  formData: any;

  average: number = 0;
  grades: File[] | null = null;
  cv: File | null = null;
  motivation_letter: File | null = null;
  recommendation_letter: File | null = null;
  programId: number | null = null;

  onGradesChange(event: any): void {
    const fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      // Initialize grades as an empty array if it's not an array
      this.grades = this.grades || [];

      // Update the grades array with the selected files
      Array.from(fileList).forEach((file: File) => {
        this.grades!.push(file);
      });
    } else {
      // Clear the grades array if no file is selected
      this.grades = null;
    }
  }

  onCVChange(event: any): void {
    const fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      // Update the cv variable with the selected file
      this.cv = fileList[0];
    } else {
      // Clear the cv variable if no file is selected
      this.cv = null;
    }
  }

  onMLChange(event: any): void {
    const fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      // Update the cv variable with the selected file
      this.motivation_letter = fileList[0];
    } else {
      // Clear the cv variable if no file is selected
      this.motivation_letter = null;
    }
  }

  onRLChange(event: any): void {
    const fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      // Update the cv variable with the selected file
      this.recommendation_letter = fileList[0];
    } else {
      // Clear the cv variable if no file is selected
      this.recommendation_letter = null;
    }
  }

  submit() {
    console.log('Average:');
    console.log(this.average);
    console.log('CV:');
    console.log(this.cv);
    console.log('Grades');
    console.log(this.grades);
    console.log('Recommendation letter');
    console.log(this.recommendation_letter);
    console.log('Motivation letter');
    console.log(this.motivation_letter);
  }
}
