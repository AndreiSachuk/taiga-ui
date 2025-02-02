import {Component, inject, TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'dialog-example',
    templateUrl: './dialog-example.template.html',
    styleUrls: ['./dialog-example.style.less'],
    changeDetection,
})
export class DialogExampleComponent {
    private readonly dialogs = inject(TuiDialogService);
    private readonly context =
        inject<TuiDialogContext<number, number>>(POLYMORPHEUS_CONTEXT);

    protected value: number | null = null;
    protected name = '';
    protected items = [10, 50, 100];

    protected get hasValue(): boolean {
        return this.value !== null;
    }

    protected get data(): number {
        return this.context.data;
    }

    protected submit(): void {
        if (this.value !== null) {
            this.context.completeWith(this.value);
        }
    }

    protected showDialog(content: TemplateRef<TuiDialogContext>): void {
        this.dialogs.open(content, {dismissible: true}).subscribe();
    }
}
