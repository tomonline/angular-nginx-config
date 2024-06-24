import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { ConfigService } from './services/config.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      multi: true,
      deps: [ConfigService]
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};

function initConfig(configService: ConfigService) {
  return () => {
    return configService.loadConfig().then(() => null);
  };
}