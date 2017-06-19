import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userInfo: any;

  constructor(private auth: AuthService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.auth.token().subscribe(data => {
      this.auth.isLoggedIn = true;
      this.auth.role = data.role;
      this.userInfo = data;
      this.navigateRole();
    });
  }

  onLogin(credentials) {
    this.auth.login(credentials).subscribe(data => {
      this.auth.isLoggedIn = true;
      this.auth.role = data.role;
      this.userInfo = data;
      localStorage.setItem('token_id', data.token)
      this.navigateRole();
    });
  }

  private navigateRole() {
    if(this.userInfo && this.userInfo.role == 'admin') {
      this.router.navigateByUrl('/manage-state');
    }

    if(this.userInfo && this.userInfo.role == 'user') {
      this.router.navigateByUrl('/cabinet');
    }
  }

}
