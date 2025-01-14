import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiNullableControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import {TUI_CHECKBOX_OPTIONS, TuiSizeL} from '@taiga-ui/core';

@Component({
    selector: 'tui-checkbox',
    templateUrl: './checkbox.template.html',
    styleUrls: ['./checkbox.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiCheckboxComponent),
        tuiAsControl(TuiCheckboxComponent),
    ],
})
export class TuiCheckboxComponent
    extends AbstractTuiNullableControl<boolean>
    implements TuiFocusableElementAccessor
{
    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<HTMLInputElement>;

    private readonly options = inject(TUI_CHECKBOX_OPTIONS);

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeL = this.options.size;

    public get nativeFocusableElement(): HTMLInputElement | null {
        return !this.focusableElement || this.computedDisabled
            ? null
            : this.focusableElement.nativeElement;
    }

    public get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    public override get computedFocusable(): boolean {
        return this.interactive && this.focusable;
    }

    /** @deprecated use 'value' setter */
    protected onChecked(checked: boolean): void {
        this.value = checked;
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected onFocusVisible(focusVisible: boolean): void {
        this.updateFocusVisible(focusVisible);
    }
}
