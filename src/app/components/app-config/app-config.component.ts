import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-app-config',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './app-config.component.html',
  styleUrl: './app-config.component.scss'
})
export class AppConfigComponent {

  config = this.configService.config;

  constructor(private configService: ConfigService) { }

}
