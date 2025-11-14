import { Component } from '@angular/core';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent {
  domainName: string = '';
  searchResult: any = null;
  isLoading: boolean = false;

  searchDomain() {
    if (!this.domainName.trim()) {
      alert('Please enter a domain name');
      return;
    }

    this.isLoading = true;
    
    // Simulate API call
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
      alert(`You are about to purchase: ${this.searchResult.domain}\n\nThis will be processed with your Afro Gift Card.`);
      // Clear the field after user clicks OK in the alert
      this.clearField();
    }
  }

  clearField() {
    this.domainName = '';
    this.searchResult = null;
  }
}