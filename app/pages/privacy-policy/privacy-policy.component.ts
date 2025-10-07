
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  cards = [
    { id: 'bronze', title: 'Afro Gift Card - Bronze', image: 'assets/images/bronze-card.jpg', terms: 'Valid for 6 months.' },
    { id: 'silver', title: 'Afro Gift Card - Silver', image: 'assets/images/silver-card.jpg', terms: 'Valid for 12 months at all partner stores.' },
    { id: 'gold', title: 'Afro Gift Card - Gold', image: 'assets/images/gold-card.jpg', terms: 'Offers premium discounts and 1-year validity.' },
    { id: 'platinum', title: 'Afro Gift Card - Platinum', image: 'assets/images/platinum-card.jpg', terms: 'Includes loyalty points, valid for 18 months.' },
    { id: 'diamond', title: 'Afro Gift Card - Diamond', image: 'assets/images/diamond-card.jpg', terms: 'VIP access and 2-year validity.' }
  ];

  selectedCardIndex: number | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const cardName = params.get('cardName');
      if (cardName) {
        const foundIndex = this.cards.findIndex(c => c.id === cardName);
        if (foundIndex !== -1) {
          this.selectedCardIndex = foundIndex;
        }
      } else {
        this.selectedCardIndex = null;
      }
    });
  }

  openModal(index: number) {
    const card = this.cards[index];
    // ✅ Silently update the URL without navigation (no scroll reset)
    this.location.replaceState(`/partner/${card.id}/privacy-policy`);
    this.selectedCardIndex = index;
  }

  closeModal() {
    this.selectedCardIndex = null;
    // ✅ Restore base URL without reloading
    this.location.replaceState('/privacy-policy');
  }
}
