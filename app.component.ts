/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SharedService } from './services/shared-service.service';
import { HttpClientService } from './services/http-client.service';
import { IAppConfig } from './pages/enterprise-admin/models/app-config.model';
import { AppConfig } from './app.config';



@Component({
  selector: 'saftrus-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private httpService: HttpClientService, private appConfig: AppConfig) {
  }

  ngOnInit(): void {
    let x = this.appConfig.config;
  }
}
