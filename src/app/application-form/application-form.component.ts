import { Component } from '@angular/core';
import { UploadService } from '../upload.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css'],
})
export class ApplicationFormComponent {

  constructor(private uploadService: UploadService, private http: HttpClient, private userService: UserServiceService, private router: Router) {}

  formData: any;

  average: number = 0;
  grades: File[] | null = null;
  cv: File | null = null;
  motivation_letter: File | null = null;
  recommendation_letter: File | null = null;
  programId: number | null = null;
  userId = this.userService.decodeToken().id;

  getProgramId(event: any) {
    this.programId = event;
  }

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

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.uploadService.uploadFile(file).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error)
      });
    }
  }

  submit() {

    let gradesId: number[] = []
    let motivationId: number;
    let recommendationId: number;
    let cvId: number;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    });

    const allRequests = this.executePostRequests();

    forkJoin(allRequests).subscribe((result: any) => {
      gradesId = result[0].map((file: any) => file.id);
      cvId = result[1][0].id;
      motivationId = result[2][0].id;
      recommendationId = result[3][0].id;
      
      const request = {
        data: {
          average: this.average,
          grades: gradesId,
          cv: cvId,
          motivation_letter: motivationId,
          recommendation_letter: recommendationId,
          program: this.programId,
          users_permissions_user: this.userId
        }
      };
      this.http.post('http://localhost:1337/api/applications', request, { headers }).subscribe((response: any) => {
        console.log(response);
        this.router.navigateByUrl('/home');      });
    });
  }

  executePostRequests() {
    let formData1 = new FormData();
    let formData2 = new FormData();
    let formData3 = new FormData();
    let formData4 = new FormData();

    this.grades?.forEach((grade) => {
      formData1.append('files', grade);
    });
    formData2.append('files', this.cv!);
    formData3.append('files', this.motivation_letter!);
    formData4.append('files', this.recommendation_letter!);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    });

    const req1 = this.http.post('http://localhost:1337/api/upload', formData1, { headers })
    const req2 = this.http.post('http://localhost:1337/api/upload', formData2, { headers })
    const req3 = this.http.post('http://localhost:1337/api/upload', formData3, { headers })
    const req4 = this.http.post('http://localhost:1337/api/upload', formData4, { headers })

    return [req1, req2, req3, req4];
  }
}
