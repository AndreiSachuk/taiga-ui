import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiCurrency, tuiGetCurrencySymbol} from '@taiga-ui/addon-commerce';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiContext, tuiRound, tuiSum} from '@taiga-ui/cdk';
import {tuiFormatNumber, TuiSizeXL, TuiSizeXS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'example-tui-pie-chart',
    templateUrl: './pie-chart.template.html',
    styleUrls: ['./pie-chart.style.less'],
    changeDetection,
})
export class ExampleTuiPieChartComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly valueVariants = [
        [0, 30, 20, 10],
        [40, 30, 20, 10],
        [13769, 12367, 10172, 3018, 2592],
    ];

    protected value = this.valueVariants[0];

    protected readonly activeItemIndexVariants = [NaN, 0, 1, 2];

    protected activeItemIndex = this.activeItemIndexVariants[0];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeXL | TuiSizeXS> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
    ];

    protected size = this.sizeVariants[2];

    protected readonly contentVariants: ReadonlyArray<
        PolymorpheusContent<TuiContext<number>>
    > = [
        '',
        ({$implicit}) => this.getPercent($implicit),
        ({$implicit}) => this.format($implicit),
    ];

    protected hintContent = this.contentVariants[0];

    protected getPercent(index: number): string {
        return `${tuiRound((100 * this.value[index]) / tuiSum(...this.value), 2)} %`;
    }

    protected format(index: number): string {
        return `${tuiFormatNumber(this.value[index])} ${tuiGetCurrencySymbol(
            TuiCurrency.Ruble,
        )}`;
    }
}
