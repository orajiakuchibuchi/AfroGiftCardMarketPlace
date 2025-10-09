import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { TestComponent } from './test/test.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CheckComponent } from './pages/shop/check/check.component';
import { BuyComponent } from './pages/shop/buy/buy.component';
import { PaymentSuccessComponent } from './pages/shop/check/payment-success/payment-success.component';
import { CardDetailsComponent } from './pages/shop/buy/card-details/card-details.component';
import { DasboardComponent } from './pages/contact/dasboard/dasboard.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ProductComponent } from './pages/product/product.component';
import { PrivatePolicyComponent } from './pages/private-policy/private-policy.component';
import { PrivateTermComponent } from './pages/private-term/private-term.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'partner', component: PartnersComponent },
  { path: 'test', component: TestComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'buy-giftcard', component: CheckComponent },
  { path: 'success', component: PaymentSuccessComponent },
  { path: 'check-giftcard', component: BuyComponent },
  { path: 'card-details', component: CardDetailsComponent },
  { path: 'secret-safe', component: DasboardComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'products/donation/term-of-use', component: PrivateTermComponent, data: { term: 'donation' } },
  { path: 'products/card/term-of-use', component: PrivateTermComponent, data: { term: 'card' } },
  { path: 'products/partners/term-of-use', component: PrivateTermComponent, data: { term: 'partners' } },
  { path: 'products/employment/term-of-use', component: PrivateTermComponent, data: { term: 'employment' } },

  { path: 'products/:policy/privacy-policy', component: PrivatePolicyComponent },


//   { path: 'products/donation/privacy-policy', component: PrivatePolicyComponent, data: { policy: 'donation' } },
// { path: 'products/card/privacy-policy', component: PrivatePolicyComponent, data: { policy: 'card' } },
// { path: 'products/partners/privacy-policy', component: PrivatePolicyComponent, data: { policy: 'partner' } },
// { path: 'products/employment/privacy-policy', component: PrivatePolicyComponent, data: { policy: 'employment' } },

  { path: 'term/:id', component: PrivateTermComponent },
{ path: 'partner/:cardName/terms-of-use', component: TermsComponent },
{ path: 'terms-of-use', component: TermsComponent },

  { path: 'products', component: ProductComponent },
  { path: 'products/:productId', component: ProductComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
