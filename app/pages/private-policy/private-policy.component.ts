import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-private-policy',
  template: `<div class="policy-wrapper">
  <div class="policy-content" [innerHTML]="content"></div>
  <br>
  <button (click)="goBack()" class="btn btn-success">Back To Privacy Policy</button>
</div>
`,
  styleUrls: ['./private-policy.component.scss']
})
export class PrivatePolicyComponent implements OnInit {
  content: string = '';

  privatePolicies: { [key: string]: string } = {
    donation: `
      <h2>Afro Gift Donation Privacy Policy</h2>
      <p>At <strong>Afro Gift Donation</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data when you engage with our donation platform.</p>
      <h3>1. Information We Collect</h3>
      <ul>
        <li><strong>Personal Information:</strong> Your name, email address, and contact details provided during donation.</li>
        <li><strong>Payment Information:</strong> Details related to your payment method processed securely through <em>MorrhPay</em>.</li>
        <li><strong>Technical Information:</strong> Device type, browser, and usage data for performance and analytics.</li>
      </ul>
      <h3>2. How We Use Your Information</h3>
      <ul>
        <li>To process donations securely.</li>
        <li>To issue receipts and communicate updates.</li>
        <li>To ensure compliance with financial and legal regulations.</li>
      </ul>
      <h3>3. Data Protection</h3>
      <p>All transactions are encrypted and handled through <em>MorrhPay</em> to ensure data confidentiality and payment safety.</p>
      <h3>4. Sharing Information</h3>
      <p>We do not sell or trade donor information. Data may be shared only with financial institutions or regulators where required by law.</p>
      <h3>5. Your Rights</h3>
      <p>You may request access to your data, corrections, or deletion by contacting us via our official channels.</p>
      <p>By donating on Afro Gift Donation, you agree to this Privacy Policy.</p>
    `,
    cards: `
      <h2>Afro Gift Privacy Policy</h2>
      <p>At <strong>Afro Gift</strong>, we value your trust and are committed to protecting your personal information. This Privacy Policy outlines how we handle data collected from users of our gift card platform.</p>
      <h3>1. Information We Collect</h3>
      <ul>
        <li><strong>Account Data:</strong> Information like your name, email, phone number, and address, which are asked across our website are kept securely.</li>
        <li><strong>Transaction Data:</strong> Payment and purchase history processed through <em>MorrhPay</em>.</li>
        <li><strong>Device Information:</strong> Browser, device type, and usage patterns to enhance user experience.</li>
      </ul>
      <h3>2. Use of Data</h3>
      <ul>
        <li>To process orders and transactions.</li>
        <li>To provide customer support and order tracking.</li>
        <li>To improve platform security and performance.</li>
      </ul>
      <h3>3. Security</h3>
      <p>Your information is stored securely, and all transactions are encrypted through <em>MorrhPay</em> to prevent unauthorized access.</p>
      <h3>4. Disclosure</h3>
      <p>We do not share personal data with third parties except for verified payment partners and regulatory authorities.</p>
      <h3>5. Rights</h3>
      <p>You can update, access, or request deletion of your data by contacting Afro Gift Support.</p>
      <p>By using Afro Gift, you consent to this Privacy Policy.</p>
    `,
    employment: `
      <h2>Afro Gift Employment Privacy Policy</h2>
      <p><strong>Afro Gift Employment</strong> respects your privacy and is committed to safeguarding your personal information. This Privacy Policy describes how we collect, use, and protect job seekers’ and employers’ data.</p>
      <h3>1. Data We Collect</h3>
      <ul>
        <li><strong>Personal Data:</strong> Name, email, phone number, and employment history for applicants.</li>
        <li><strong>Employer Information:</strong> Company name, contact details, and verification documents.</li>
        <li><strong>Financial Information:</strong> For payroll and verification, processed through <em>MorrhPay</em>.</li>
      </ul>
      <h3>2. Use of Data</h3>
      <ul>
        <li>To connect job seekers with potential employers.</li>
        <li>To verify authenticity and process employment transactions.</li>
      </ul>
      <h3>3. Protection</h3>
      <p>Afro Gift Employment uses encryption, secure servers, and access control to protect user data.</p>
      <h3>4. Sharing Data</h3>
      <p>Data may only be shared with <em>MorrhPay</em> or legal authorities for verification and compliance purposes.</p>
      <h3>5. Rights</h3>
      <p>Users may access or update their personal data and withdraw consent as allowed by law.</p>
      <p>By using Afro Gift Employment, you acknowledge and accept this Privacy Policy.</p>
    `,
    partners: `
      <h2>Afro Gift Partner Privacy Policy</h2>
      <p>At <strong>Afro Gift Partner</strong>, we value the trust of our partners and are dedicated to maintaining the highest standards of data protection and transparency. This Privacy Policy explains how we collect, use, and safeguard the personal and business information of our registered partners.</p>
      <h3>1. Information We Collect</h3>
      <ul>
        <li><strong>Business Information:</strong> Company name, registration number, address, and contact details.</li>
        <li><strong>Representative Details:</strong> Name, phone number, email, and role.</li>
        <li><strong>Verification Data:</strong> Documents required for KYC compliance.</li>
        <li><strong>Financial Information:</strong> Bank or payment details processed through <em>MorrhPay</em>.</li>
        <li><strong>Technical Information:</strong> Logs and device data for security.</li>
      </ul>
      <h3>2. How We Use Partner Information</h3>
      <ul>
        <li>To verify business legitimacy and compliance.</li>
        <li>To process payments and transactions securely.</li>
        <li>To communicate partnership and operational updates.</li>
      </ul>
      <h3>3. Data Protection and Security</h3>
      <p>We employ encryption, secure servers, and restricted access to ensure confidentiality. All financial transactions are processed through <em>MorrhPay</em> in Naira (₦).</p>
      <h3>4. Data Sharing and Disclosure</h3>
      <p>Data may only be shared with <em>MorrhPay</em> and legal authorities when required. We do not sell or trade information.</p>
      <h3>5. KYC Verification</h3>
      <p>All partners must complete KYC verification before approval to ensure legitimacy and compliance.</p>
      <h3>6. Data Retention</h3>
      <p>Data is retained as long as the partnership remains active or as required by law.</p>
      <h3>7. Partner Rights</h3>
      <p>Partners may access, correct, or request deletion of their data, subject to legal conditions.</p>
      <h3>8. Privacy Assurance</h3>
      <p>Afro Gift Partner will never request passwords or banking details via SMS or email.</p>
      <h3>9. Policy Updates</h3>
      <p>We may update this policy periodically; updates will be shared on our website or by email.</p>
      <p>By registering as a partner, you acknowledge and agree to this Privacy Policy.</p>
    `
  };

   constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const policyId = params.get('policy');
      if (policyId && this.privatePolicies[policyId]) {
        this.content = this.privatePolicies[policyId];
        // window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        this.content = '<p>Policy not found.</p>';
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/privacy-policy']);
  }
}
