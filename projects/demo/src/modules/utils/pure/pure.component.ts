import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-pure',
    templateUrl: './pure.template.html',
    changeDetection,
})
export class ExampleTuiPureComponent {
    protected readonly exampleDecorator = import('./import/example-decorator.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./pure-getter.component.ts?raw'),
        HTML: import('./pure-getter.component.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./pure-function.component.ts?raw'),
        HTML: import('./pure-function.component.html?raw'),
    };
}
