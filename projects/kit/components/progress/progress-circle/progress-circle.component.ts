import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {MODE_PROVIDER, TUI_MODE, TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';
import {delay, of} from 'rxjs';

@Component({
    selector: 'tui-progress-circle',
    templateUrl: './progress-circle.template.html',
    styleUrls: ['./progress-circle.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiProgressCircleComponent {
    @Input()
    public value = 0;

    @Input()
    public max = 1;

    @Input()
    @HostBinding('style.--tui-progress-color')
    public color: string | null = null;

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeXXL | TuiSizeXXS = 'm';

    protected readonly animationDelay$ = of(true).pipe(delay(0));

    protected readonly mode$ = inject(TUI_MODE);

    @HostBinding('style.--progress-ratio')
    protected get progressRatio(): number {
        const ratio = this.value / this.max;

        return Number.isFinite(ratio) ? ratio : 0;
    }
}
