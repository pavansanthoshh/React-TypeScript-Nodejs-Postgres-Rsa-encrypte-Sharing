/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientService } from './services/http-client.service';
import { SpinnerService } from './spinner/SpinnerService';

import { APP_INITIALIZER } from '@angular/core';
import { AppConfig }  from './app.config';
import { SpinnerComponent } from './spinner/SpinnerComponent';
import { LoginComponent } from './auth/login.component';
import { Authblockcomponent } from './auth/auth-block.component';
import { SharedService } from './services/shared-service.service';
import { AuthGuard } from './auth/auth-service/auth-gaurd.service';
import { AuthService } from './auth/auth-service/auth-service';
import { UIErrorHandler } from './error-handler/global-error-handler';
import { RegisterComponent } from './register/register.component';
import { PaymentregistrationComponent } from './paymentregistration/paymentregistration.component';
import { RegisterReviewComponent } from './register-review/register-review.component';
import { EnterpriseactivationComponent } from './enterpriseactivation/enterpriseactivation.component';
import { AccountActivationComponent } from './account-activation/account-activation.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { EnterpriseAdminDataAccess } from './pages/enterprise-admin/dataaccess/enterpriseadmin.dataaccess.service';
import { ActivationService } from "./enterpriseactivation/activation-service/activation-service";
import { EqualValidator } from './account-activation/equal-validator.directive';
import { ChangeEAKeypairService } from './services/change-ea-keypair.service';
import { RequestpasswordComponent } from './request-password/request-password.component';
import { ResetpwdmailComponent } from './reset-pwdmail/reset-pwdmail.component';
import { UiFeaturesRoutingModule } from './pages/ui-features/ui-features-routing.module';
import { ModalsComponent } from './pages/ui-features/modals/modals.component';
import { ModalComponentTerms } from './pages/ui-features/modals/modal/modal.component.terms';
import { UiFeaturesComponent } from './pages/ui-features/ui-features.component';
import { ModalComponentPrivacy } from './pages/ui-features/modals/modal/modal.component.privacy';
import { ModalComponentAgreement } from './pages/ui-features/modals/modal/modal.component.custagreement';
import {TermsComponent} from './auth/terms/terms.component';
import {PrivacyComponent} from './auth/privacy/privacy.component';
import {AgreementComponent} from './auth/agreement/agreement.component';
import { DownloadComponent } from './auth/download/download.component';
import { DownloadService } from './auth/download/download.service';
import { ModalComponentAbout } from './pages/ui-features/modals/modal/modal.component.about';

@NgModule({
  declarations: [AppComponent, SpinnerComponent,ModalsComponent,UiFeaturesComponent,ModalComponentTerms,ModalComponentPrivacy,ModalComponentAgreement,LoginComponent,Authblockcomponent, RegisterComponent,RegisterReviewComponent, PaymentregistrationComponent, EnterpriseactivationComponent,RequestpasswordComponent, AccountActivationComponent, RegistrationSuccessComponent,ResetpwdmailComponent, SignupSuccessComponent, EqualValidator, TermsComponent,PrivacyComponent,AgreementComponent, DownloadComponent,ModalComponentAbout],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    UiFeaturesRoutingModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent,SpinnerComponent,LoginComponent,RegisterReviewComponent,RegisterComponent,PaymentregistrationComponent,Authblockcomponent,TermsComponent],
  providers: [ 
    {provide: ErrorHandler,
    useClass: UIErrorHandler}, 
    Title,  
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: (config: AppConfig) => () => config.load(), deps: [AppConfig], multi: true }    
    ,{ provide: APP_BASE_HREF, useValue: '/' },
    HttpClientService,
    SpinnerService,
    SharedService,
    AuthGuard,
    AuthService,
    EnterpriseAdminDataAccess,
    ActivationService,
    ChangeEAKeypairService,
    DownloadService,
  ],
  entryComponents: [
    ModalComponentTerms,
    ModalComponentPrivacy,
    ModalComponentAgreement,
    ModalComponentAbout
  ]
})
export class AppModule {
}
