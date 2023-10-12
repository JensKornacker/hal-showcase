import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error('hallo error', err));
