import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiPure} from '@taiga-ui/cdk';

@Component({
    selector: 'example-tui-pure-getter',
    templateUrl: './pure-getter.component.html',
    changeDetection,
})
export class ExampleTuiPureGetterComponent {
    @tuiPure
    protected get fibonacci42(): number {
        return this.fibonacci(42);
    }

    protected show = false;

    private fibonacci(num: number): number {
        return num <= 1 ? num : this.fibonacci(num - 1) + this.fibonacci(num - 2);
    }
}
