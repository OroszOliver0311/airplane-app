import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
private authService = inject(AuthService);
private router = inject(Router);

loginForm = new FormGroup({
    email: new FormControl('pilot@airline.com', Validators.required), //!!!!!!!!!!
    password: new FormControl('pilot123', Validators.required)    //!!!!!!!!!!
  });

  errorMessage = '';

  onSubmit() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;
  
    this.authService.login(email!, password!).subscribe({
      next: () => {

        this.router.navigate(['/airplanes']);
      },
      error: () => {
        this.errorMessage = 'Wrong Email or PW!';
      }
    });
  }
}



