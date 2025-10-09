import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface Product {
  id: string;
  title: string;
  description: string;
  icon?: string;
  footer?: string;
  image?: string;
  exploreUrl: string;
  cardClass?: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  selectedProduct?: Product;

  products: Product[] = [
    {
      id: 'partners',
      title: 'Become A Partner',
      description: `The Afro Gift Card is valid only at verified partner stores. 
      Interested businesses can register easily to join. Partners receive a unique API key and dashboard access for store management and real-time redemption tracking.
       The program offers zero setup hassle and support for seamless payment system integration..`,
      exploreUrl: 'https://afrogitft.vercel.app/',
      image: 'assets/img/partner.jpg',
      icon: '🤝',
      footer: 'Click to view our partners',
      cardClass: 'blog-card'
    },
     {
      id: 'card',
      title: 'Afro Gift Card',
      description: `Afro Gift offers a secure, fast, and easy way to trade your gift cards for instant value.
      We ensure your transactions are smooth, reliable, and rewarding — giving you the confidence to buy and redeem gift cards effortlessly.`,
      exploreUrl: 'https://afrogitft.vercel.app/',
      image: 'assets/img/afro-logo-Copy.png',
      icon: '💳',
      footer: 'Click to purchase a gift card',
      cardClass: 'support-card'
    },
    {
      id: 'donation',
      title: 'Afro Gift Donation',
      description: `Your kindness can bring hope to someone’s tomorrow. Through Afro Gift Donation, you can contribute your unused or extra gift cards
      to empower individuals and support impactful causes across communities.`,
      exploreUrl: 'https://afro-gift-donation.vercel.app',
      image: 'assets/img/product/gc23.JPG',
      icon: '🎁',
      footer: 'Click to make a donation',
      cardClass: 'blog-card'
    },
    
    {
      id: 'employment',
      title: 'Afro Gift Employment',
      description: `Afro Gift Employment connects passionate individuals with meaningful work opportunities.
      Join a fast-growing team that values innovation, impact and growth. 
      Afro Gift provides the platform to shape the future of Africa’s gift card ecosystem.`,
      exploreUrl: 'https://afro-gift-donation.vercel.app/employment',
      image: 'assets/img/product/gc23.JPG',
      icon: '💼',
      footer: 'Click to view job openings',
      cardClass: 'blog-card'
    },
    {
      id: 'blog',
      title: 'Afro Gift Blog',
      description: `Looking to buy a gift card in Nigeria that offers flexibility, no expiry, and the chance to earn cash rewards?
      AfroGift makes it incredibly easy to purchase gift cards for yourself or as a thoughtful gift — all while tapping into Nigeria’s premier gift card platform.
      Whether you’re anywhere, our blog guides you through insights, trends, and steps to make the most of your gift card experience.`,
      exploreUrl: 'https://afrogiftcard.hashnode.dev/',
      image: 'assets/img/product/gc2.JPG',
      icon: '💬',
      footer: 'Click to explore our Blog',
      cardClass: 'blog-card'
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('productId');
    this.selectedProduct = this.products.find(p => p.id === productId);
  }

  navigateTo(productId: string): void {
    this.router.navigate(['/products', productId]);
  }

  exploreProduct(url: string): void {
    window.open(url, '_blank');
  }

  backToAll(): void {
    this.router.navigate(['/products']);
  }
}
