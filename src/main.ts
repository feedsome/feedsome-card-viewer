import { enableProdMode } from '@angular/core';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./application/app.module";


if(process.env.ENV === 'build') {
    enableProdMode();
}

export function main() {
    return platformBrowserDynamic().bootstrapModule(AppModule);
}

if(document.readyState === 'compile') {
    main();
} else {
    document.addEventListener('DOMContentLoaded', main);
}