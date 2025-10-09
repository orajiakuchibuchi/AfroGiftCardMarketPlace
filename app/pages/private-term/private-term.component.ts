import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface TermContent {
  title: string;
  content: string;
}

@Component({
  selector: 'app-private-term',
  templateUrl: './private-term.component.html',
  styleUrls: ['./private-term.component.scss']
})
export class PrivateTermComponent implements OnInit {
  selectedTerm?: TermContent;

  constructor(private router: Router, private route: ActivatedRoute) {}

  privateTerms: { [key: string]: TermContent } = {
    donation: {
      title: 'Afro Donation – Terms of Use',
      content: `
        <p>Afro Donation is not responsible for the handling or delivery of parcels once they have been dispatched by the donor. Our responsibility begins upon receipt of the parcel at our designated office or collection point. We will acknowledge and confirm the delivery once the parcel is successfully received.</p>

        <h3>Donation Process:</h3>
        <p>When a donor completes the Afro Donation form and indicates an intention to donate either a parcel or cash, a unique reference number will be automatically generated. This reference number serves as the official identifier for the donation and must be quoted when making inquiries or tracking the delivery.</p>

        <p>Upon receipt of the parcel or confirmation of a cash donation, Afro Donation will contact the donor using the information provided during the submission process.</p>

        <p>All donations received will be directed to the appropriate recipients, organizations, or communities in need, in accordance with the donor’s intent and Afro Donation’s charitable objectives. We are fully committed to ensuring transparency, accountability, and integrity in every stage of the donation process.</p>

        <p>Afro Donation is a trusted and dependable platform — 100% reliable in ensuring that every donation reaches the right people and makes a meaningful impact.</p>

        <p>By proceeding with a donation, the donor agrees to these terms and acknowledges that Afro Donation’s responsibility is limited to the acknowledgment and processing of items received at our office.</p>
      `
    },
    card: {
      title: 'Afro Gift - Card Terms of Use',
      content: `
        <h3>1. Card Validity</h3>
        <p>Afro Gift do not expire and can be used at any time in accordance with the terms and conditions of our selected partners.</p>

        <h3>2. Card Security</h3>
        <p>Treat your Afro Gift like cash. If your card is lost, stolen, or misplaced, Afro Gift will not be responsible for its replacement or refund. You will be required to purchase a new card. Afro Gift is not liable for any unauthorized use of a card once it has been delivered to the rightful customer.</p>

        <h3>3. Card Protection & Delivery</h3>
        <p>All Afro Gift are protected and secured until they are successfully delivered to the customer. Once delivery is confirmed, the customer assumes full responsibility for safeguarding the card information.</p>

        <h3>4. Data Protection & Authentication</h3>
        <p>Afro Gift employs a secure authentication process to ensure that all customer data and card information are protected. We do not disclose customer data to third parties except as required by law or necessary to complete transactions.</p>

        <h3>5. Types of Afro Gift</h3>
        <ul>
          <li>General Card – Redeemable at selected Afro Gift partner merchants.</li>
          <li>Employment Card – Designed for employee rewards or incentives, tied to job descriptions and partner programs.</li>
          <li>Donation Card – 100% of the card value is directed through MorrhPay to Afro Donation initiatives or charitable causes.</li>
        </ul>

        <h3>6. Card Redemption</h3>
        <p>Redemption of Afro Gift is subject to the terms and conditions of participating merchants or partners. Afro Gift is not responsible for partner policies, product availability, or quality of goods and services redeemed using the card.</p>

        <h3>7. Prohibited Uses</h3>
        <p>Afro Gift cannot be exchanged for cash (except where required by law), re-sold or transferred for value without authorization, or used for unlawful activities or money laundering.</p>

        <h3>8. Limitation of Liability</h3>
        <p>Afro Gift, MorrhPay, or any affiliated partners are not liable for any damages, losses, or claims arising from unauthorized access after delivery, partner service failures, or misuse of the card by the holder.</p>

        <h3>9. Amendments</h3>
        <p>Afro Gift reserves the right to update or modify these Terms of Use at any time. Changes will take effect immediately upon publication on our official website or app.</p>
      `
    },
    partners: {
      title: 'Afro Gift – Terms of Use for Partners',
      content: `
        <p>To qualify as a partner with Afro Gift, an entity must be a legally registered business. Eligible entities include sole proprietorships, limited liability companies, or corporate organizations duly recognized under applicable laws.</p>

        <p>Before partnership approval, all prospective partners will undergo a Know Your Customer (KYC) verification process. This process ensures authenticity, compliance, and trustworthiness. Only after successful verification and approval can an entity officially become an Afro Gift partner.</p>

        <p>All financial transactions and withdrawals related to partner activities are processed exclusively through MorrhPay, our authorized payment and financial service provider. MorrhPay is responsible for managing all partner withdrawals and ensures that all transactions are securely and efficiently conducted in Naira (₦).</p>

        <p>Partners must provide accurate business and banking information to facilitate seamless financial operations. Afro Gift reserves the right to verify, suspend, or terminate any partnership found to be in violation of these terms or any applicable regulations.</p>

        <p>By becoming a partner, you acknowledge and agree to these terms and understand that all financial dealings are managed through MorrhPay in accordance with Afro Gift’s operational and compliance standards.</p>
      `
    },
    employment: {
      title: 'Afro Gift – Employment Terms of Use',
      content: `
        <p>Afro Gift provides employment opportunities for both skilled and unskilled workers through our verified partners. Employment engagements facilitated through our platform are offered strictly on a contract basis.</p>

        <h3>Payment Terms:</h3>
        <p>Payments made by our partners to employees are not in cash but in gift cards, which can be redeemed exclusively at the respective partner’s stores or service outlets. These gift cards serve as the agreed medium of payment under the employment contract.</p>

        <h3>Fees and Charges:</h3>
        <p>By using this platform, all employees agree to applicable transaction fees, which may include withdrawal fees and contract fees as specified during each engagement.</p>

        <h3>Data Privacy and Security:</h3>
        <p>Afro Gift is committed to ensuring the privacy and protection of all user data. Under no circumstances will we request an employee’s password or sensitive authentication details. Users are advised to remain vigilant and report any suspicious activity to our support team immediately.</p>

        <p>By accepting employment or engaging through the Afro Gift platform, you acknowledge and agree to abide by these terms and conditions.</p>
      `
    }
  };

  ngOnInit(): void {
    const termKey = this.route.snapshot.data['term']; // read from route  data
    if (termKey && this.privateTerms[termKey]) {
      this.selectedTerm = this.privateTerms[termKey];
      // window.scrollTo({ top: 0, behavior: 'smooth' });
    } 
    else {
      this.router.navigate(['/terms-of-use']);
      
    }
  }

  goBack(): void {
    this.router.navigate(['/terms-of-use']);
  }
}
