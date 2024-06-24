import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ConfigObject {
  gitVersion: string;
  appName: string;
  appVersion: string;
  angularVersion: string;
  toggleSwitch: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config!: ConfigObject;

  constructor(private httpClient: HttpClient) { }

  loadConfig(): Promise<null> {

    return new Promise((resolve) => {
      this.httpClient.get<ConfigObject>('/configuration')
      .subscribe((config: ConfigObject) => {
        this.config = config;
        resolve(null);
      });
    });
  }
}
