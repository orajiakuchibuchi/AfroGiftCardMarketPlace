// hosting.component.ts
import { Component } from '@angular/core';
import { HostingService } from '../../shared/services/hosting.service';

interface HostingPlan {
  name: string;
  price: number;
  period: string; // 'month' or 'year'
  category: 'shared' | 'cloud';
  features: string[];
  popular: boolean;
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
  address = '';
  isLoading = false;
  
  // Modal properties
  showModal = false;
  modalTitle = '';
  modalMessage = '';
  generatedId: string | null = null;

  hostingPlans: HostingPlan[] = [
    { name: 'Starter', price: 5000, period: 'month', category: 'shared', features: ['100 GB SSD Storage','Unlimited Bandwidth','10 Email Accounts','Free SSL Certificate','1 Website','24/7 Support'], popular: false },
    { name: 'Professional', price: 8000, period: 'month', category: 'shared', features: ['200 GB SSD Storage','Unlimited Bandwidth','25 Email Accounts','Free SSL Certificate','5 Websites','24/7 Support'], popular: true },
    { name: 'Enterprise', price: 12000, period: 'month', category: 'shared', features: ['500 GB SSD Storage','Unlimited Bandwidth','Unlimited Email Accounts','Free SSL Certificate','Unlimited Websites','Priority Support'], popular: false },
    { name: 'Cloud Starter', price: 15000, period: 'month', category: 'cloud', features: ['2 CPU Cores','4 GB RAM','100 GB SSD Storage','Unlimited Bandwidth','Free SSL Certificate','Free Domain'], popular: false },
    { name: 'Cloud Business', price: 25000, period: 'month', category: 'cloud', features: ['4 CPU Cores','8 GB RAM','200 GB SSD Storage','Unlimited Bandwidth','Free SSL Certificate','Free Domain'], popular: true },
    { name: 'Cloud Enterprise', price: 40000, period: 'month', category: 'cloud', features: ['8 CPU Cores','16 GB RAM','500 GB SSD Storage','Unlimited Bandwidth','Free SSL Certificate','Free Domain'], popular: false }
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
    if (!this.selectedPlan || !this.email || !this.address) return;

    this.isLoading = true;

    const payload = {
      planName: this.selectedPlan.name,
      planPrice: this.selectedPlan.price,
      email: this.email,
      address: this.address,
      duration: this.selectedPlan.period === 'month' ? 1 : 12 // backend expects number of months
    };

   this.hostingService.createHostingRecord(payload).subscribe({
  next: (response: any) => {
    console.log('Backend response:', response); // <-- Add this
    this.handleSuccess(response);
  },
  error: (err) => { 
    console.error('Purchase failed:', err); 
    this.handleError(); 
  }
});

  }
copyToClipboard(text: string): void {
  // Use the modern Clipboard API if available
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Order ID copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      this.fallbackCopyToClipboard(text);
    });
  } else {
    // Fallback for older browsers
    this.fallbackCopyToClipboard(text);
  }
}

private fallbackCopyToClipboard(text: string): void {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.left = '-999999px';
  textarea.style.top = '-999999px';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  
  try {
    document.execCommand('copy');
    console.log('Order ID copied to clipboard!');
  } catch (err) {
    console.error('Fallback copy failed: ', err);
  } finally {
    document.body.removeChild(textarea);
  }
}
private handleSuccess(response: any): void {
  this.isLoading = false;
  this.showEmailForm = false;

  // Extract the ID from response.result.id
  this.generatedId = response?.result?.id || 'UNKNOWN-ID';

  this.modalTitle = 'Plan Purchased Successfully!';
  this.modalMessage = `Your hosting plan has been activated. Your Order ID is: ${this.generatedId}`;
  this.showModal = true;

  this.resetForm();
}


  private handleError(): void {
    this.isLoading = false;
    this.modalTitle = 'Purchase Failed';
    this.modalMessage = 'Failed to purchase plan. Please try again.';
    this.showModal = true;
  }

  cancelPurchase(): void {
    this.showEmailForm = false;
    this.selectedPlan = null;
    this.email = '';
    this.address = '';
  }

  closeModal(): void {
    this.showModal = false;
    this.generatedId = null;
    this.modalTitle = '';
    this.modalMessage = '';
  }

  private resetForm(): void {
    this.selectedPlan = null;
    this.email = '';
    this.address = '';
  }

  getPlanFeatures(category: 'shared' | 'cloud'): PlanFeature[] {
    if (category === 'shared') {
      return [
        { icon: 'fas fa-server', title: 'Powerful Infrastructure', description: 'High-performance servers with SSD storage.' },
        { icon: 'fas fa-shield-alt', title: 'Advanced Security', description: 'Free SSL and advanced protection.' },
        { icon: 'fas fa-tachometer-alt', title: 'Easy Control Panel', description: 'Manage your hosting easily.' },
        { icon: 'fas fa-database', title: 'One-Click Installs', description: 'Install apps like WordPress quickly.' }
      ];
    } else {
      return [
        { icon: 'fas fa-expand-arrows-alt', title: 'Scalable Resources', description: 'Scale your resources anytime.' },
        { icon: 'fas fa-rocket', title: 'High Performance', description: 'Optimized cloud servers.' },
        { icon: 'fas fa-lock', title: 'Enhanced Security', description: 'DDoS protection and isolation.' },
        { icon: 'fas fa-sync', title: '99.9% Uptime', description: 'Reliable uptime guaranteed.' }
      ];
    }
  }
}