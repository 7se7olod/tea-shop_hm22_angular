import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private http: HttpClient) {
  }

  submitForm(formData: FormData) {
    return this.http.post<{ success: number, message: string }>('https://testologia.site/order-tea', formData);
  }
}
