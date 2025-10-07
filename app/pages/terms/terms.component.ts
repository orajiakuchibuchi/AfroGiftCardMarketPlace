import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  cards = [
    {
      id: 'donation',
      title: 'Afro Gift Donation',
      background: 'assets/img/product/gc23.JPG',
      terms: `
        <p><strong>Afro Donation</strong> is not responsible for the handling or delivery of parcels once they have been dispatched by the donor. Our responsibility begins upon receipt of the parcel at our designated office or collection point. We will acknowledge and confirm the delivery once the parcel is successfully received.</p>

        <h4>Donation Process:</h4>
        <p>When a donor completes the Afro Donation form and indicates an intention to donate either a parcel or cash, a unique reference number will be automatically generated. This reference number serves as the official identifier for the donation and must be quoted when making inquiries or tracking the delivery.</p>

        <p>Upon receipt of the parcel or confirmation of a cash donation, Afro Donation will contact the donor using the information provided during the submission process.</p>

        <p>All donations received will be directed to the appropriate recipients, organizations, or communities in need, in accordance with the donor’s intent and Afro Donation’s charitable objectives. We are fully committed to ensuring transparency, accountability, and integrity in every stage of the donation process.</p>

        <p><strong>Afro Donation</strong> is a trusted and dependable platform — <strong>100% reliable</strong> in ensuring that every donation reaches the right people and makes a meaningful impact.</p>

        <p>By proceeding with a donation, the donor agrees to these terms and acknowledges that Afro Donation’s responsibility is limited to the acknowledgment and processing of items received at our office.</p>
      `
    },
    {
      id: 'afrogift',
      title: 'Afro Gift Card',
      background: 'assets/img/afro-logo.png',
      terms: `
        <p>These Terms of Use govern the issuance and use of AfroGift Cards. By purchasing or using an AfroGift Card, you agree to comply with the terms outlined below.</p>

        <hr>
        <h4>1. Card Validity</h4>
        <p>AfroGift Cards <strong>do not expire</strong> and can be used at any time in accordance with the terms and conditions of our selected partners.</p>

        <h4>2. Card Security</h4>
        <p>Treat your AfroGift Card <strong>like cash</strong>. If your card is <strong>lost, stolen, or misplaced</strong>, AfroGift will not be responsible for its replacement or refund. You will be required to <strong>purchase a new card</strong>. AfroGift is not liable for any unauthorized use of a card once it has been delivered to the rightful customer.</p>

        <h4>3. Card Protection & Delivery</h4>
        <p>All AfroGift Cards are <strong>protected and secured</strong> until they are successfully delivered to the customer. Once delivery is confirmed, the customer assumes full responsibility for safeguarding the card information.</p>

        <h4>4. Data Protection & Authentication</h4>
        <p>AfroGift employs a <strong>secure authentication process</strong> to ensure that all customer data and card information are protected. We do not disclose customer data to third parties except as required by law or necessary to complete transactions.</p>

        <h4>5. Types of AfroGift Cards</h4>
        <ul>
          <li><strong>General Card</strong> – Redeemable at selected AfroGift partner merchants.</li>
          <li><strong>Employment Card</strong> – Designed for employee rewards or incentives, tied to job descriptions and partner programs.</li>
          <li><strong>Donation Card</strong> – 100% of the card value is directed through MorrhPay to Afro Donation initiatives or charitable causes.</li>
        </ul>

        <h4>6. Card Redemption</h4>
        <p>Redemption of AfroGift Cards is subject to the terms and conditions of participating merchants or partners. AfroGift is not responsible for partner policies, product availability, or quality of goods and services redeemed using the card.</p>

        <h4>7. Prohibited Uses</h4>
        <ul>
          <li>Exchanged for cash (except where required by law)</li>
          <li>Re-sold or transferred for value without authorization</li>
          <li>Used for unlawful activities or money laundering</li>
        </ul>

        <h4>8. Limitation of Liability</h4>
        <p>AfroGift, MorrhPay, or any affiliated partners are not liable for any damages, losses, or claims arising from:</p>
        <ul>
          <li>Unauthorized access after delivery</li>
          <li>Partner service failures</li>
          <li>Misuse of the card by the holder</li>
        </ul>

        <h4>9. Amendments</h4>
        <p>AfroGift reserves the right to <strong>update or modify</strong> these Terms of Use at any time. Changes will take effect immediately upon publication on our official website or app.</p>
      `
    },
    {
      id: 'partner',
      title: 'Afro Gift Partner',
      background: 'assets/img/product/gc23.JPG',
      terms: `
        <p><strong>Afro Gift – Terms of Use for Partners</strong></p>

        <p>To qualify as a partner with <strong>Afro Gift</strong>, an entity must be a legally registered business. Eligible entities include sole proprietorships, limited liability companies, or corporate organizations duly recognized under applicable laws.</p>

        <p>Before partnership approval, all prospective partners will undergo a <strong>Know Your Customer (KYC)</strong> verification process. This process ensures authenticity, compliance, and trustworthiness. Only after successful verification and approval can an entity officially become an Afro Gift partner.</p>

        <p>All financial transactions and withdrawals related to partner activities are processed exclusively through <strong>MorrhPay</strong>, our authorized payment and financial service provider. MorrhPay is responsible for managing all partner withdrawals and ensures that all transactions are securely and efficiently conducted in <strong>Naira (₦)</strong>.</p>

        <p>Partners must provide accurate business and banking information to facilitate seamless financial operations. Afro Gift reserves the right to verify, suspend, or terminate any partnership found to be in violation of these terms or any applicable regulations.</p>

        <p>By becoming a partner, you acknowledge and agree to these terms and understand that all financial dealings are managed through MorrhPay in accordance with Afro Gift’s operational and compliance standards.</p>
      `
    },
    {
      id: 'employment',
      title: 'Afro Gift Employment',
      background: 'assets/img/product/gc23.JPG',
      terms: `
        <h3><strong>Afro Gift Employment Terms of Use</strong></h3>

        <p>Afro Gift provides employment opportunities for both skilled and unskilled workers through our verified partners. Employment engagements facilitated through our platform are offered strictly on a <em>contract basis</em>.</p>

        <h4>Payment Terms:</h4>
        <p>Payments made by our partners to employees are <strong>not in cash</strong> but in <strong>gift cards</strong>, which can be redeemed exclusively at the respective partner’s stores or service outlets. These gift cards serve as the agreed medium of payment under the employment contract.</p>

        <p>In the event of any <strong>payment-related dispute</strong>, such matters will be addressed and resolved by our designated agents operating under <strong>MorrhPay</strong>, our official financial service provider.</p>

        <h4>Fees and Charges:</h4>
        <p>By using this platform, all employees agree to applicable <strong>transaction fees</strong>, which may include <em>withdrawal fees</em> and <em>contract fees</em> as specified during each engagement.</p>

        <h4>Data Privacy and Security:</h4>
        <p>Afro Gift is committed to ensuring the privacy and protection of all user data. Under no circumstances will we request an employee’s password or sensitive authentication details. Users are advised to remain vigilant and report any suspicious activity to our support team immediately.</p>

        <p>By accepting employment or engaging through the Afro Gift platform, you acknowledge and agree to abide by these terms and conditions.</p>
      `
    }
  ];

  selectedCardIndex: number | null = null;

  constructor(
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
    this.location.replaceState(`/partner/${card.id}/terms-of-use`);
    this.selectedCardIndex = index;
  }

  closeModal() {
    this.selectedCardIndex = null;
    this.location.replaceState('/terms-of-use');
  }
}
