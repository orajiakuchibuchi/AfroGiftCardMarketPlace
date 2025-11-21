import { Component } from '@angular/core';
import { HostingService } from '../../shared/services/hosting.service';

interface HostingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  popular: boolean;
  features: string[];
  category: 'shared' | 'cloud';
}

interface PlanFeature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.scss']
})
export class HostingComponent {
  activeTab: 'shared' | 'cloud' = 'shared';
  showEmailForm = false;
  selectedPlan: HostingPlan | null = null;
  email = '';
  isLoading = false;
  
  hostingPlans: HostingPlan[] = [
    {
      id: 'shared-starter',
      name: 'Starter',
      price: 5000,
      period: 'month',
      popular: false,
      category: 'shared',
      features: [
        '100 GB SSD Storage',
        'Unlimited Bandwidth',
        '10 Email Accounts',
        'Free SSL Certificate',
        '1 Website',
        '24/7 Support'
      ]
    },
    {
      id: 'shared-professional',
      name: 'Professional',
      price: 8000,
      period: 'month',
      popular: true,
      category: 'shared',
      features: [
        '200 GB SSD Storage',
        'Unlimited Bandwidth',
        '25 Email Accounts',
        'Free SSL Certificate',
        '5 Websites',
        '24/7 Support'
      ]
    },
    {
      id: 'shared-enterprise',
      name: 'Enterprise',
      price: 12000,
      period: 'month',
      popular: false,
      category: 'shared',
      features: [
        '500 GB SSD Storage',
        'Unlimited Bandwidth',
        'Unlimited Email Accounts',
        'Free SSL Certificate',
        'Unlimited Websites',
        'Priority Support'
      ]
    },
    {
      id: 'cloud-starter',
      name: 'Cloud Starter',
      price: 15000,
      period: 'month',
      popular: false,
      category: 'cloud',
      features: [
        '2 CPU Cores',
        '4 GB RAM',
        '100 GB SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        'Free Domain'
      ]
    },
    {
      id: 'cloud-business',
      name: 'Cloud Business',
      price: 25000,
      period: 'month',
      popular: true,
      category: 'cloud',
      features: [
        '4 CPU Cores',
        '8 GB RAM',
        '200 GB SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        'Free Domain'
      ]
    },
    {
      id: 'cloud-enterprise',
      name: 'Cloud Enterprise',
      price: 40000,
      period: 'month',
      popular: false,
      category: 'cloud',
      features: [
        '8 CPU Cores',
        '16 GB RAM',
        '500 GB SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        'Free Domain'
      ]
    }
  ];

  constructor(private hostingService: HostingService) {}

  get filteredPlans(): HostingPlan[] {
    return this.hostingPlans.filter(plan => plan.category === this.activeTab);
  }

  switchTab(tab: 'shared' | 'cloud'): void {
    this.activeTab = tab;
  }

  buyPlan(plan: HostingPlan): void {
    this.selectedPlan = plan;
    this.showEmailForm = true;
  }

  submitEmail(): void {
    if (!this.selectedPlan || !this.email) return;

    this.isLoading = true;

    const planData = {
      name: this.selectedPlan.name,
      price: this.selectedPlan.price,
      email: this.email,
      period: this.selectedPlan.period,
      category: this.selectedPlan.category,
      features: this.selectedPlan.features
    };

    this.hostingService.createHostingRecord(planData).subscribe({
      next: (response) => {
        console.log('Hosting record created successfully:', response);
        this.handleSuccess();
      },
      error: (error) => {
        console.error('Error creating hosting record:', error);
        this.handleError();
      }
    });
  }

  private handleSuccess(): void {
    this.isLoading = false;
    this.showEmailForm = false;
    this.selectedPlan = null;
    this.email = '';
    alert('Plan purchased successfully! You will receive your hosting details via email shortly.');
  }

  private handleError(): void {
    this.isLoading = false;
    alert('Failed to purchase plan. Please try again or contact support.');
  }

  cancelPurchase(): void {
    this.showEmailForm = false;
    this.selectedPlan = null;
    this.email = '';
  }

  getPlanFeatures(category: 'shared' | 'cloud'): PlanFeature[] {
    if (category === 'shared') {
      return [
        { 
          icon: 'fas fa-server', 
          title: 'Powerful Infrastructure', 
          description: 'Our shared hosting runs on high-performance servers with SSD storage for maximum speed.' 
        },
        { 
          icon: 'fas fa-shield-alt', 
          title: 'Advanced Security', 
          description: 'Your website is protected with advanced security measures and free SSL certificates.' 
        },
        { 
          icon: 'fas fa-tachometer-alt', 
          title: 'Easy Control Panel', 
          description: 'Manage your hosting account with our user-friendly control panel.' 
        },
        { 
          icon: 'fas fa-database', 
          title: 'One-Click Installs', 
          description: 'Install popular applications like WordPress, Joomla, and more with just one click.' 
        }
      ];
    } else {
      return [
        { 
          icon: 'fas fa-expand-arrows-alt', 
          title: 'Scalable Resources', 
          description: 'Easily scale your resources up or down based on your website\'s needs.' 
        },
        { 
          icon: 'fas fa-rocket', 
          title: 'High Performance', 
          description: 'Experience lightning-fast load times with our optimized cloud infrastructure.' 
        },
        { 
          icon: 'fas fa-lock', 
          title: 'Enhanced Security', 
          description: 'Advanced security features including DDoS protection and isolated environments.' 
        },
        { 
          icon: 'fas fa-sync', 
          title: '99.9% Uptime', 
          description: 'Guaranteed high availability with redundant systems and automatic failover.' 
        }
      ];
    }
  }
}