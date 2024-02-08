import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login.component';
import { AuthGuard } from './auth/auth-service/auth-gaurd.service';
import { RegisterComponent } from './register/register.component';
import { RegisterReviewComponent } from './register-review/register-review.component';
import { PaymentregistrationComponent } from './paymentregistration/paymentregistration.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { AccountActivationComponent } from './account-activation/account-activation.component';
import { EnterpriseactivationComponent } from './enterpriseactivation/enterpriseactivation.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { RequestpasswordComponent } from './request-password/request-password.component';
import { ResetpwdmailComponent } from './reset-pwdmail/reset-pwdmail.component';
// import { ActivationSuccessComponent } from './enterpriseactivation/activation-success.component';
import {TermsComponent} from './auth/terms/terms.component';
import {PrivacyComponent} from './auth/privacy/privacy.component';
import {AgreementComponent} from './auth/agreement/agreement.component';
import { DownloadComponent } from './auth/download/download.component';

const routes: Routes = [
  { path: 'pages', 
    loadChildren: 'app/pages/pages.module#PagesModule', 
     canActivate: [AuthGuard],
  },
  {
    path: 'ui-features',
    loadChildren: 'app/pages/ui-features/ui-features.module#UiFeaturesModule',
  },
  {
    path: 'auth',
    component: LoginComponent,
  },  
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    path: 'agreement',
    component: AgreementComponent,
  },
  {
    path: 'download/:filemeta',
    component: DownloadComponent,
  },
  {
    path: 'register-review',
    component: RegisterReviewComponent,
  },
  {
    path: 'paymentregistration',
    component: PaymentregistrationComponent,
  },
  {
    path: 'signup-success',
    component: SignupSuccessComponent,
  },
  {
    path: 'account-activation',
    component: AccountActivationComponent,
  },
  {
    path: 'enterprise-activation',
    component: EnterpriseactivationComponent,
  },
  {
    path: 'request-password',
    component: RequestpasswordComponent,
  },
  {
    path: 'reset-pwd',
    component: ResetpwdmailComponent,
  },
  {
    path: 'registration-success',
    component: RegistrationSuccessComponent,
  },

  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
