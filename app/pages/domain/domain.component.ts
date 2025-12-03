// src/app/pages/domain/domain.component.ts
import { Component } from '@angular/core';
import { 
  DomainService, 
  DomainData, 
  DomainsDbResponse, 
  DomainsDbDomain,
  DomainsDbRegistrationData 
} from '../../shared/services/domain.service';

interface DomainPlan {
  duration: string;
  price: string;
  perYear: string;
  popular?: boolean;
  type: 'private' | 'public';
}

interface SelectedDomainPlan {
  name: string;
  price: number;
  period: string;
  type: 'private' | 'public';
}

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent {
  domainName: string = '';
  searchResult: any = null;
  domainsDbResults: DomainsDbResponse | null = null;
  isLoading: boolean = false;
  showEmailForm: boolean = false;
  showSuccessModal: boolean = false;
  email: string = '';
  isPurchasing: boolean = false;
  searchError: string = '';
  
  privateDomainPlans: DomainPlan[] = [
    { duration: '1 Year', price: '100,000', perYear: '100,000', type: 'private', popular: false },
    { duration: '2 Years', price: '180,000', perYear: '90,000', type: 'private', popular: true },
    { duration: '3 Years', price: '225,000', perYear: '75,000', type: 'private', popular: false }
  ];

  publicDomainPlans: DomainPlan[] = [
    { duration: '1 Year', price: '162,500', perYear: '162,500', type: 'public', popular: false },
    { duration: '2 Years', price: '242,500', perYear: '121,250', type: 'public', popular: true },
    { duration: '3 Years', price: '287,500', perYear: '95,833', type: 'public', popular: false }
  ];

  selectedDomainPlan: SelectedDomainPlan | null = null;
  generatedId: string = '';
  transactionCode: string = '';
  registeredDomain: string = '';

  constructor(private domainService: DomainService) {}

searchDomain() {
  if (!this.domainName.trim()) {
    this.searchError = "Please enter a valid domain";
    return;
  }

  this.isLoading = true;
  this.searchError = "";
  this.domainsDbResults = null;

  const cleanDomain = this.domainName.toLowerCase().trim();

  this.domainService.searchDomain(cleanDomain).subscribe({
    next: (res) => {
      this.isLoading = false;
      this.domainsDbResults = res;

      if (!res.domains || res.domains.length === 0) {
        this.searchError = "No results found for this domain.";
      }
    },
    error: (err) => {
      this.isLoading = false;
      this.searchError = "Failed to search domain. Try again.";
      console.error(err);
    }
  });
}


  // Select public domain from DomainsDB results
  selectPublicDomain(domain: DomainsDbDomain) {
    const isAvailable = this.isDomainAvailable(domain);
    
    if (!isAvailable) {
      this.searchError = `Domain ${domain.domain} is not available for registration`;
      return;
    }

    const price = this.calculateDomainPrice(domain.domain);
    
    this.selectedDomainPlan = {
      name: domain.domain,
      price: price,
      period: 'year',
      type: 'public'
    };
    
    this.showEmailForm = true;
  }

  // Select domain plan (private or public)
  selectDomainPlan(plan: DomainPlan, type: 'private' | 'public') {
    const price = parseInt(plan.price.replace(/,/g, ''));
    
    this.selectedDomainPlan = {
      name: `${type === 'private' ? 'Private Domain' : 'Public Domain'} - ${plan.duration}`,
      price: price,
      period: 'year',
      type: type
    };
    
    this.showEmailForm = true;
  }

  // Buy domain from search result
  buyDomain() {
    if (this.searchResult) {
      this.selectedDomainPlan = null;
      this.showEmailForm = true;
    }
  }

  // Submit email and register domain
  submitEmail() {
    if ((!this.searchResult && !this.selectedDomainPlan) || !this.email.trim()) return;

    this.isPurchasing = true;

    const isPublicDomain = this.selectedDomainPlan?.type === 'public';

    if (isPublicDomain && this.selectedDomainPlan) {
      // Register PUBLIC domain via DomainsDB API
      this.registerPublicDomain();
    } else {
      // Register PRIVATE domain via local API
      this.registerPrivateDomain();
    }
  }

 private registerPublicDomain() {
  if (!this.selectedDomainPlan) return;

  const cleanName = this.sanitizeForDomainsDb(this.selectedDomainPlan.name);

  const publicDomainData: DomainsDbRegistrationData = {
    domain: cleanName,
    email: this.email
  };

  console.log('Sending PUBLIC domain to DomainsDB API:', cleanName);

  this.domainService.registerPublicDomain(publicDomainData).subscribe({
    next: (response) => {
      this.handlePublicDomainRegistrationSuccess(cleanName, response);
    },
    error: (err) => {
      this.handleRegistrationError(err);
    }
  });
}


  // Register PRIVATE domain using local API
  private registerPrivateDomain() {
    const domainType = this.selectedDomainPlan?.type || 'private';
    const domainName = this.selectedDomainPlan ? 
      this.selectedDomainPlan.name : 
      (this.searchResult?.domain || 'Unknown Domain');

    const domainData: DomainData = {
      tld: this.extractTLD(domainName),
      sld: this.extractSLD(domainName),
      address: 'N/A',
      email: this.email,
      type: 'private'
    };

    console.log('Sending PRIVATE domain to local API:', domainData);

    this.domainService.createDomain(domainData).subscribe({
      next: (res) => {
        this.handlePrivateDomainRegistrationSuccess(domainName, res);
      },
      error: (err) => {
        this.handleRegistrationError(err);
      }
    });
  }

  // Handle successful PUBLIC domain registration (DomainsDB API)
  private handlePublicDomainRegistrationSuccess(domainName: string, response: DomainsDbResponse) {
    this.isPurchasing = false;
    this.showEmailForm = false;

    // For public domains, we use DomainsDB-style IDs since they're registered via DomainsDB API
    this.generatedId = 'DOMAINSDB_' + Date.now();
    this.transactionCode = 'DB_TX_' + Math.random().toString(36).substr(2, 9).toUpperCase();
    this.registeredDomain = domainName;
    this.showSuccessModal = true;

    console.log('Public domain registered via DomainsDB API:', {
      domain: domainName,
      domainsDbResponse: response
    });

    this.clearField();
  }

  // Handle successful PRIVATE domain registration (Local API)
  private handlePrivateDomainRegistrationSuccess(domainName: string, res: any) {
    this.isPurchasing = false;
    this.showEmailForm = false;

    if (res.success) {
      this.generatedId = res.id || 'N/A';
      this.transactionCode = res.code || 'N/A';
      this.registeredDomain = domainName;
      this.showSuccessModal = true;
    } else {
      alert(`Failed to register domain. Please try again.`);
    }

    this.clearField();
  }

  // Handle registration error
  private handleRegistrationError(err: any) {
    console.error('Domain registration error:', err);
    this.isPurchasing = false;
    this.showEmailForm = false;
    alert(`Error registering domain. Please try again.`);
  }

  // Cancel purchase
  cancelPurchase() {
    this.showEmailForm = false;
    this.email = '';
    this.selectedDomainPlan = null;
  }

  // Clear all fields
  clearField() {
    this.domainName = '';
    this.searchResult = null;
    this.domainsDbResults = null;
    this.email = '';
    this.selectedDomainPlan = null;
    this.searchError = '';
  }

  // Close success modal
  closeSuccessModal() {
    this.showSuccessModal = false;
    this.generatedId = '';
    this.transactionCode = '';
    this.registeredDomain = '';
  }

  // Copy to clipboard
  copyToClipboard(text: string) {
    if (text && text !== 'N/A') {
      navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard:', text);
      });
    }
  }

  // Helper method to check domain availability
  private isDomainAvailable(domain: DomainsDbDomain): boolean {
    if (typeof domain.isDead === 'boolean') {
      return !domain.isDead;
    } else if (typeof domain.isDead === 'string') {
      return domain.isDead.toLowerCase() === 'false';
    }
    return false;
  }

  // Helper method to calculate domain price
  private calculateDomainPrice(domain: string): number {
    if (domain.length <= 5) return 250000;
    if (domain.length <= 10) return 150000;
    return 100000;
  }

  // Helper method to extract SLD (Second Level Domain)
  private extractSLD(domain: string): string {
    return domain.split('.')[0];
  }

  // Helper method to extract TLD (Top Level Domain)
  private extractTLD(domain: string): string {
    const parts = domain.split('.');
    return parts.length > 1 ? parts.slice(1).join('.') : 'com';
  }
  private sanitizeForDomainsDb(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')  // keep only letters & numbers
    .trim() || 'test';
}

}