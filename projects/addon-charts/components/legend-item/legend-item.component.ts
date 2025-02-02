import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'tui-legend-item',
    templateUrl: './legend-item.template.html',
    styleUrls: ['./legend-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLegendItemComponent {
    @Input()
    public active = false;

    @Input()
    public color = '';

    @Input()
    public text = '';

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeS = 'm';

    @Input()
    @HostBinding('class._disabled')
    public disabled = false;

    @HostBinding('style.--tui-primary')
    protected get computedColor(): string | null {
        return this.color === 'var(--tui-primary)' ? null : this.color;
    }
}
