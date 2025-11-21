import { Component } from '@angular/core';
import { DomainService, DomainData } from '../../shared/services/domain.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent {
  domainName: string = '';
  searchResult: any = null;
  isLoading: boolean = false;
  showEmailForm: boolean = false;
  showSuccessModal: boolean = false;
  email: string = '';
  isPurchasing: boolean = false;
  
  // Success data
  generatedId: string = '';
  transactionCode: string = '';
  registeredDomain: string = '';

  constructor(private domainService: DomainService) {}

  searchDomain() {
    if (!this.domainName.trim()) {
      alert('Please enter a domain name');
      return;
    }

    this.isLoading = true;
    
    // Simulate search (replace later with real availability API if needed)
    setTimeout(() => {
      this.searchResult = {
        domain: this.domainName + '.afrogift.com.ng',
        available: true,
        price: 1500,
        period: 'year'
      };
      this.isLoading = false;
    }, 1000);
  }

  buyDomain() {
    if (this.searchResult) {
      this.showEmailForm = true;
    }
  }

  submitEmail() {
    if (!this.searchResult || !this.email.trim()) return;

    this.isPurchasing = true;

    const domainData: DomainData = {
      tld: this.searchResult.domain.split('.').pop() || 'ng',
      sld: this.searchResult.domain.split('.')[0],
      address: 'N/A', // Replace with real address if you have
      email: this.email
    };

    this.domainService.createDomain(domainData).subscribe({
      next: (res) => {
        this.isPurchasing = false;
        this.showEmailForm = false;

        if (res.success) {
          // Store the success data - using the correct field names from your API
          this.generatedId = res.id || 'N/A';
          this.transactionCode = res.code || 'N/A';
          this.registeredDomain = this.searchResult.domain;
          
          // Show success modal instead of simple message
          this.showSuccessModal = true;
        } else {
          alert(`Failed to register domain ${this.searchResult.domain}.`);
        }

        // Clear search and email fields
        this.clearField();
      },
      error: (err) => {
        console.error('Domain registration error:', err);
        this.isPurchasing = false;
        this.showEmailForm = false;
        alert(`Error registering domain ${this.searchResult?.domain}. Please try again.`);
      }
    });
  }

  cancelPurchase() {
    this.showEmailForm = false;
    this.email = '';
  }

  clearField() {
    this.domainName = '';
    this.searchResult = null;
    this.email = '';
  }

  closeSuccessModal() {
    this.showSuccessModal = false;
    this.generatedId = '';
    this.transactionCode = '';
    this.registeredDomain = '';
  }

  copyToClipboard(text: string) {
    if (text && text !== 'N/A') {
      navigator.clipboard.writeText(text).then(() => {
        // Optional: Show a small toast message
        console.log('Copied to clipboard:', text);
      });
    }
  }
}