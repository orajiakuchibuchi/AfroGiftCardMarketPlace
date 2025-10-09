import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

 cards = [
  { route: 'donation', title: 'Afro Gift Donation', background: 'assets/img/product/gc23.JPG' },
  { route: 'cards', title: 'Afro Gift Card', background: 'assets/img/product/gc23.JPG' },
  { route: 'employment', title: 'Afro Gift Employment', background: 'assets/img/product/gc23.JPG' },
  { route: 'partners', title: 'Afro Gift Partner', background: 'assets/img/product/gc23.JPG' }
];

viewPolicy(route: string) {
  this.router.navigate([`/products/${route}/privacy-policy`]);
}

  constructor(private router: Router) {}

  ngOnInit(): void {}

 
}
