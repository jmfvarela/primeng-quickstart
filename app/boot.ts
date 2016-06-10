import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {ContextMenuService} from './context-menu.service';
import 'rxjs/Rx';

import {provide} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import {enableProdMode} from '@angular/core';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';

//enableProdMode();
bootstrap(AppComponent, [
  ContextMenuService,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
