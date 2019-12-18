import { Injectable } from '@angular/core';

import 'clipboard';
import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

import 'prismjs/components/prism-java.min';
import 'prismjs/components/prism-python.min';

declare var Prism: any;

@Injectable({
    providedIn: 'root'
})
export class PrismService {

    constructor() { }

    highlight() {
        Prism.highlightAll();
    }
}
