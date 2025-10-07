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
  {
    id: 'donation',
    title: 'Afro Gift Donation',
    background: 'assets/img/product/gc23.JPG',
    terms: `
      <h2><strong>Afro Gift Donation – Privacy Policy</strong></h2>
      <p>At <strong>Afro Donation</strong>, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your data when you interact with our platform, make donations, or engage with our services.</p>
      <hr/>

      <h3>1. Information We Collect</h3>
      <ul>
        <li><strong>Personal Information:</strong> Full name, contact details, email address, and other identifiable information provided during form submission.</li>
        <li><strong>Donation Details:</strong> Information related to parcel or cash donations, including reference numbers, tracking details, and correspondence history.</li>
        <li><strong>Technical Data:</strong> Device information, browser type, and access logs to help us improve platform performance and security.</li>
      </ul>

      <h3>2. How We Use Your Information</h3>
      <ul>
        <li>Process and acknowledge donations.</li>
        <li>Contact donors regarding deliveries, confirmations, or inquiries.</li>
        <li>Maintain transparency and accurate donation records.</li>
        <li>Improve our platform, communication, and service quality.</li>
        <li>Comply with applicable laws and regulations.</li>
      </ul>

      <h3>3. Data Security</h3>
      <p>Afro Donation employs <strong>strict data security measures</strong> to protect all user information against unauthorized access, alteration, disclosure, or destruction. We use secure servers and encryption protocols to maintain the confidentiality of your data.</p>

      <h3>4. Data Sharing and Disclosure</h3>
      <p>We do <strong>not sell, rent, or trade</strong> your personal information. Data may only be shared with trusted partners, service providers, or regulatory bodies when required by law or necessary for operational purposes (e.g., confirming deliveries).</p>

      <h3>5. Data Retention</h3>
      <p>We retain user and donation information only as long as necessary to fulfill our obligations and maintain accurate donation records, unless a longer retention period is required by law.</p>

      <h3>6. Your Rights</h3>
      <ul>
        <li>Request access to the information we hold about you.</li>
        <li>Request corrections or updates to your data.</li>
        <li>Withdraw consent for the use of your information (subject to legal or operational limitations).</li>
      </ul>

      <h3>7. Cookies and Tracking</h3>
      <p>Our website may use cookies to enhance your browsing experience and analyze usage patterns. You can manage or disable cookies through your browser settings at any time.</p>

      <h3>8. Third-Party Links</h3>
      <p>Our platform may contain links to third-party websites. Afro Donation is not responsible for the privacy practices or content of those sites. We encourage users to review their privacy policies before sharing personal information.</p>

      <h3>9. Changes to This Policy</h3>
      <p>Afro Donation reserves the right to <strong>update or modify</strong> this Privacy Policy at any time. Any significant changes will be communicated through our official website or other appropriate channels.</p>

      <p><strong>By using the Afro Donation platform, you acknowledge that you have read, understood, and agreed to this Privacy Policy.</strong></p>
    `
  },
{
  id: 'afro gift',
  title: 'Afro Gift Card',
  background: 'assets/img/afro-logo.png',
  terms: `
    <h2><strong>Afro Gift Card – Privacy Policy</strong></h2>
    <p>At <strong>Afro Card</strong>, your privacy is our top priority. This Privacy Policy outlines how we collect, use, protect, and manage the personal and financial information of users who interact with our platform, purchase, redeem, or manage gift cards, or engage with our services.</p>
    <hr/>

    <h3>1. Information We Collect</h3>
    <ul>
      <li><strong>Personal Information:</strong> Full name, contact details, email address, and other identifying details provided during account creation or form submission.</li>
      <li><strong>Transaction Information:</strong> Details of gift card purchases, redemptions, amounts, and related transaction records.</li>
      <li><strong>Payment Information:</strong> Card or bank details (processed securely through our authorized payment gateway, <em>MorrhPay</em>).</li>
      <li><strong>Technical Information:</strong> IP address, browser type, and usage logs to help maintain system security and improve service performance.</li>
    </ul>

    <h3>2. How We Use Your Information</h3>
    <ul>
      <li>Facilitate gift card purchases, redemptions, and transfers.</li>
      <li>Verify user identity and prevent fraudulent transactions.</li>
      <li>Provide customer support and respond to inquiries.</li>
      <li>Improve platform functionality, user experience, and communication.</li>
      <li>Comply with financial regulations and applicable legal requirements.</li>
    </ul>

    <h3>3. Data Protection and Security</h3>
    <p>We employ robust encryption and secure servers to safeguard all personal and financial data. Afro Card does <strong>not</strong> store full payment card details; all sensitive transactions are processed securely through <strong>MorrhPay</strong>. Access to your information is restricted to authorized personnel who are bound by confidentiality agreements.</p>

    <h3>4. Data Sharing and Disclosure</h3>
    <p>Afro Card does <strong>not sell or rent</strong> your personal information to third parties. However, we may share limited data with:</p>
    <ul>
      <li><strong>Payment Processors (MorrhPay):</strong> For handling transactions securely.</li>
      <li><strong>Regulatory Authorities:</strong> When required by law or to prevent fraud.</li>
      <li><strong>Partner Merchants:</strong> For validating gift card redemption and service delivery.</li>
    </ul>

    <h3>5. Cookies and Tracking</h3>
    <p>Our platform uses cookies to enhance functionality and personalize user experience. You can choose to disable cookies through your browser settings, but some features may not function properly without them.</p>

    <h3>6. Data Retention</h3>
    <p>We retain your data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Once data is no longer needed, it is securely deleted or anonymized.</p>

    <h3>7. Your Rights</h3>
    <ul>
      <li>Access and review the information we hold about you.</li>
      <li>Request correction of inaccurate or outdated information.</li>
      <li>Withdraw consent for data processing, subject to legal and operational requirements.</li>
    </ul>

    <h3>8. Protection Against Fraud</h3>
    <p>Afro Card will <strong>never</strong> request your password, PIN, or confidential details through email, SMS, or phone calls. Always ensure you access our services through the official Afro Card platform.</p>

    <h3>9. Updates to This Policy</h3>
    <p>Afro Card may update this Privacy Policy periodically to reflect changes in operations, regulations, or technology. Updates will be communicated through our official website or via email notifications.</p>

    <p><strong>By using the Afro Card platform, you acknowledge that you have read, understood, and agreed to this Privacy Policy.</strong></p>
  `
},

  {
    id: 'afro employment',
    title: 'Afro Gift Employment',
    background: 'assets/img/product/gc23.JPG',
    terms: `
      <h2><strong>Afro Gift Employment – Privacy Policy</strong></h2>
      <p>At <strong>Afro Employment</strong>, we value your trust and are committed to safeguarding the personal and professional information you share with us.</p>
      <hr/>

      <h3>1. Information We Collect</h3>
      <ul>
        <li><strong>Personal Information:</strong> Name, contact details, and identification information.</li>
        <li><strong>Employment Details:</strong> Skills, experience, and work history.</li>
        <li><strong>Financial Information:</strong> Payment details via <em>MorrhPay</em>.</li>
        <li><strong>Technical Data:</strong> Device and browser information for system security.</li>
      </ul>

      <h3>2. How We Use Information</h3>
      <ul>
        <li>Match candidates with verified partners.</li>
        <li>Process employment and payment securely.</li>
        <li>Maintain compliance and provide updates.</li>
      </ul>

      <h3>3. Data Security</h3>
      <p>All data is encrypted and processed securely through <strong>MorrhPay</strong>. Afro Employment never requests your PIN or password via email or SMS.</p>

      <h3>4. Data Retention</h3>
      <p>Information is retained as long as necessary for employment or legal obligations, after which it is securely deleted.</p>

      <h3>5. Dispute Resolution</h3>
      <p>Disputes are handled fairly and transparently by our authorized agents under <strong>MorrhPay</strong>.</p>

      <h3>6. Policy Updates</h3>
      <p>We may update this policy periodically; changes will be posted on our platform.</p>
    `
  },
  {
    id: 'afroemploymentpartner',
    title: 'Afro Gift Partner',
    background: 'assets/img/product/gc23.JPG',
    terms: `
      <h2><strong>Afro Gift Employment – Partner Privacy Policy</strong></h2>
      <p>At <strong>Afro Employment</strong>, we value the trust of our partners and are dedicated to maintaining the highest standards of data protection and transparency.</p>
      <hr/>

      <h3>1. Information We Collect</h3>
      <ul>
        <li><strong>Business Information:</strong> Company name, registration number, and official contacts.</li>
        <li><strong>Representative Details:</strong> Name, phone number, and email address.</li>
        <li><strong>Verification Data:</strong> KYC documents and compliance details.</li>
        <li><strong>Financial Information:</strong> Bank details for payments via <em>MorrhPay</em>.</li>
      </ul>

      <h3>2. Data Usage</h3>
      <p>Information is used for verification, communication, compliance, and secure payment processing.</p>

      <h3>3. Data Security</h3>
      <p>Afro Employment uses encryption and secure servers. Transactions are processed exclusively in <strong>Naira (₦)</strong> via <strong>MorrhPay</strong>.</p>

      <h3>4. Partner Rights</h3>
      <ul>
        <li>Access and correct stored data.</li>
        <li>Request deletion of data (subject to legal limits).</li>
      </ul>

      <h3>5. Policy Updates</h3>
      <p>Policy changes will be announced via the official Afro Employment website or email.</p>
    `
  }
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
