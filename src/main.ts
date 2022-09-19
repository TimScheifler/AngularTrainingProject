import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
/**
 * Main wird als allererster Code ausgeführt.
 */
if (environment.production) {
  enableProdMode();
}
/**
 * AppModule verweist auf die in app.modules.ts definierten Komponenten im Array:
 * bootstrap: [AppComponent]
 * Ablauf:
 * 1. main.ts startet.
 * 2. Wir bootstrappen eine Angular Anwendung via AppComponent.
 * 3. Dieses Modul word als Argument übergeben.
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
