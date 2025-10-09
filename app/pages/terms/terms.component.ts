import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent {
  // Cards for Terms of Use
  termCards = [
    { route: 'donation', title: 'Afro Gift Donation', background: 'assets/img/product/gc23.JPG' },
    { route: 'card', title: 'Afro Gift Card', background: 'assets/img/product/gc23.JPG' },
    { route: 'employment', title: 'Afro Gift Employment', background: 'assets/img/product/gc23.JPG' },
    { route: 'partners', title: 'Afro Gift Partner', background: 'assets/img/product/gc23.JPG' }
  ];

  constructor(private router: Router) {}

  // Navigate to the individual PrivateTermComponent page
  viewTerm(route: string) {
    this.router.navigate([`/products/${route}/term-of-use`]);
  }
}
