/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * app.module.ts
 */

import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { TranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeEs from '@angular/common/locales/es';
import localeIt from '@angular/common/locales/it';
import localeJa from '@angular/common/locales/ja';
import localeKo from '@angular/common/locales/ko';
import localeRu from '@angular/common/locales/ru';
import localeUk from '@angular/common/locales/uk';
import localeZh from '@angular/common/locales/zh';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxJsonapiModule } from 'ngx-jsonapi';

import { BlockListComponent } from './pages/block-list/block-list.component';
import { BlockDetailComponent } from './pages/block-detail/block-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ExtrinsicDetailComponent } from './pages/extrinsic-detail/extrinsic-detail.component';
import { ExtrinsicTableComponent } from './components/extrinsic-table/extrinsic-table.component';
import { HarvesterAdminComponent } from './pages/harvester-admin/harvester-admin.component';
import { LoadingBoxComponent } from './components/loading-box/loading-box.component';
import {environment} from '../environments/environment';
import { PolkascanHeaderComponent } from './components/polkascan-header/polkascan-header.component';
import { AddressDetailComponent } from './pages/address-detail/address-detail.component';
import { EventTableComponent } from './components/event-table/event-table.component';
import { ExtrinsicListComponent } from './pages/extrinsic-list/extrinsic-list.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { RuntimeListComponent } from './pages/runtime-list/runtime-list.component';
import { RuntimeDetailComponent } from './pages/runtime-detail/runtime-detail.component';
import { RuntimeModuleDetailComponent } from './pages/runtime-module-detail/runtime-module-detail.component';
import { RuntimeCallDetailComponent } from './pages/runtime-call-detail/runtime-call-detail.component';
import { RuntimeEventDetailComponent } from './pages/runtime-event-detail/runtime-event-detail.component';
import { RuntimeStorageDetailComponent } from './pages/runtime-storage-detail/runtime-storage-detail.component';

import {TimeagoModule, TimeagoClock} from 'ngx-timeago';
import { Observable, interval } from 'rxjs';
import { AccountListComponent } from './pages/account-list/account-list.component';
import { AccountDetailComponent } from './pages/account-detail/account-detail.component';
import { SessionListComponent } from './pages/session-list/session-list.component';
import { SessionDetailComponent } from './pages/session-detail/session-detail.component';
import { DemocracyProposalListComponent } from './pages/democracy-proposal-list/democracy-proposal-list.component';
import { DemocracyProposalDetailComponent } from './pages/democracy-proposal-detail/democracy-proposal-detail.component';
import { ContractListComponent } from './pages/contract-list/contract-list.component';
import { ContractDetailComponent } from './pages/contract-detail/contract-detail.component';
import { BalancesTransferListComponent } from './pages/balances-transfer-list/balances-transfer-list.component';
import { BalancesTransferDetailComponent } from './pages/balances-transfer-detail/balances-transfer-detail.component';
import { LogListComponent } from './pages/log-list/log-list.component';
import { LogDetailComponent } from './pages/log-detail/log-detail.component';
import { LogTableComponent } from './components/log-table/log-table.component';
import { DemocracyReferendumDetailComponent } from './pages/democracy-referendum-detail/democracy-referendum-detail.component';
import { DemocracyReferendumListComponent } from './pages/democracy-referendum-list/democracy-referendum-list.component';
import { IdenticonComponent } from './components/identicon/identicon.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AccountIndexListComponent } from './pages/account-index-list/account-index-list.component';
import { AccountIndexDetailComponent } from './pages/account-index-detail/account-index-detail.component';
import { RuntimeConstantDetailComponent } from './pages/runtime-constant-detail/runtime-constant-detail.component';
import { SessionValidatorDetailComponent } from './pages/session-validator-detail/session-validator-detail.component';
import { SessionValidatorListComponent } from './pages/session-validator-list/session-validator-list.component';
import { SessionNominatorListComponent } from './pages/session-nominator-list/session-nominator-list.component';
import { RuntimeModuleListComponent } from './pages/runtime-module-list/runtime-module-list.component';
import { RuntimeTypeListComponent } from './pages/runtime-type-list/runtime-type-list.component';
import { TransactionListComponent } from './pages/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './pages/transaction-detail/transaction-detail.component';
import { InherentListComponent } from './pages/inherent-list/inherent-list.component';
import { InherentDetailComponent } from './pages/inherent-detail/inherent-detail.component';
import { ProposalComponent } from './types/proposal/proposal.component';
import { StructComponent } from './types/struct/struct.component';
import { RenderTypeComponent } from './components/render-type/render-type.component';
import { ReferendumInfoComponent } from './types/referendum-info/referendum-info.component';
import { AnalyticsSearchComponent } from './pages/analytics-search/analytics-search.component';

export class MyClock extends TimeagoClock {
  tick(then: number): Observable<number> {
    return interval(1000);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    BlockListComponent,
    BlockDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SettingsComponent,
    ExtrinsicDetailComponent,
    ExtrinsicTableComponent,
    HarvesterAdminComponent,
    LoadingBoxComponent,
    PolkascanHeaderComponent,
    AddressDetailComponent,
    EventTableComponent,
    ExtrinsicListComponent,
    EventListComponent,
    EventDetailComponent,
    RuntimeListComponent,
    RuntimeDetailComponent,
    RuntimeModuleDetailComponent,
    RuntimeCallDetailComponent,
    RuntimeEventDetailComponent,
    RuntimeStorageDetailComponent,
    AccountListComponent,
    AccountDetailComponent,
    SessionListComponent,
    SessionDetailComponent,
    DemocracyProposalListComponent,
    DemocracyProposalDetailComponent,
    ContractListComponent,
    ContractDetailComponent,
    BalancesTransferListComponent,
    BalancesTransferDetailComponent,
    LogListComponent,
    LogDetailComponent,
    LogTableComponent,
    DemocracyReferendumDetailComponent,
    DemocracyReferendumListComponent,
    IdenticonComponent,
    NotFoundComponent,
    AccountIndexListComponent,
    AccountIndexDetailComponent,
    RuntimeConstantDetailComponent,
    SessionValidatorDetailComponent,
    SessionValidatorListComponent,
    SessionNominatorListComponent,
    RuntimeModuleListComponent,
    RuntimeTypeListComponent,
    TransactionListComponent,
    TransactionDetailComponent,
    InherentListComponent,
    InherentDetailComponent,
    ProposalComponent,
    StructComponent,
    RenderTypeComponent,
    ReferendumInfoComponent,
    AnalyticsSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    }),
    FormsModule,
    NgxJsonapiModule.forRoot({
        url: environment.jsonApiRootUrl
    }),
    TimeagoModule.forRoot({
      clock: { provide: TimeagoClock, useClass: MyClock },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
