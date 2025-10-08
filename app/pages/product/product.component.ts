import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  footer: string;
  image: string;
  exploreUrl: string;
  cardClass: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [
    {
      id: 'donation',
      title: 'Afro Gift Donation',
      description: 'Join us in spreading kindness — support a cause or gift someone in need.',
      icon: '🎁',
      footer: 'Click to make a donation',
      image: 'assets/img/product/gc23.JPG',
      exploreUrl: 'https://afro-gift-donation.vercel.app',
      cardClass: 'blog-card'
    },
    {
      id: 'card',
      title: 'afro gift',
      description: 'Exchange and redeem gift cards easily with AfroGiftCard MarketPlace.',
      icon: '💳',
      footer: 'Click to purchase a gift card',
      image: 'assets/img/afro-logo.png',
      exploreUrl: 'https://afrogitft.vercel.app/',
      cardClass: 'support-card'
    },
    {
      id: 'partners',
      title: 'Afro Gift Partners',
      description: 'Collaborate with us to reach more communities and make greater impact.',
      icon: '🤝',
      footer: 'Click to view our partners',
      image: 'assets/img/partner.jpg',
      exploreUrl: 'https://afrogitft.vercel.app/',
      cardClass: 'blog-card'
    },
    {
      id: 'employment',
      title: 'Afro Gift Employment',
      description: 'Explore exciting career opportunities and join the Afro Gift team.',
      icon: '💼',
      footer: 'Click to view job openings',
      image: 'assets/img/product/gc23.JPG',
      exploreUrl: 'https://afro-gift-donation.vercel.app/employment',
      cardClass: 'blog-card'
    },
    {
      id: 'blog',
      title: 'Afro Gift Blog',
      description: 'Need help? Chat with our support team anytime!',
      icon: '💬',
      footer: 'Click to explore our Blog',
      image: 'assets/img/product/gc2.JPG',
      exploreUrl: 'https://afrogiftcard.hashnode.dev/',
      cardClass: 'blog-card',
     
    }
  ];

  selectedProduct?: Product;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId');
      this.selectedProduct = this.products.find(p => p.id === productId);
    });
  }

  navigateTo(productId: string): void {
  console.log('Navigating to:', productId);
  this.router.navigate(['/products', productId]);
}


  exploreProduct(url: string): void {
    window.open(url, '_blank');
  }

  backToAll(): void {
    this.router.navigate(['/products']);
  }
}
