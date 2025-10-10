import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  email: string = '';
  subscribed: boolean = false;

  @ViewChild('emailInput') emailInput!: ElementRef;

  constructor(private router: Router) {
    // Reset on route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.resetForm();
      });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.subscribed = true;

      setTimeout(() => {
        this.router.navigate(['/']).then(() => {
          this.resetForm(form);
        });
      }, 1000);
    }
  }

  private resetForm(form?: NgForm) {
    this.subscribed = false;
    this.email = '';

    if (form) {
      form.resetForm();
    }

    if (this.emailInput) {
      this.emailInput.nativeElement.value = '';
    }
  }
}
