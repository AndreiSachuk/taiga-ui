import {Component} from '@angular/core';
import {TuiPanModule} from '@taiga-ui/cdk';
import {TuiRootModule} from '@taiga-ui/core';

describe('TuiPan', () => {
    let component: TestComponent;

    @Component({
        template: `
            <tui-root>
                <section (tuiPan)="pan($event)"></section>
            </tui-root>
        `,
    })
    class TestComponent {
        protected coords: readonly number[] = [0, 0];

        protected pan(delta: readonly [number, number]): void {
            this.coords = delta;
        }
    }

    beforeEach(() =>
        cy
            .mount(TestComponent, {
                imports: [TuiRootModule, TuiPanModule],
            })
            .then(wrapper => {
                component = wrapper.component;
            }),
    );

    it('emits delta', () => {
        cy.get('section')
            .then(query => {
                const element = query.get(0);

                sendTouchEvent(0, 0, element, 'touchstart');
                sendTouchEvent(0, 0, element, 'touchmove');
                sendTouchEvent(0, 20, element, 'touchmove');
                sendTouchEvent(0, 20, element, 'touchend');
            })
            .then(() => expect(component.coords).to.include.members([0, 20]));
    });
});

function sendTouchEvent(
    x: number,
    y: number,
    element: HTMLElement,
    eventType: 'touchend' | 'touchmove' | 'touchstart',
): void {
    const touchObj = new Touch({
        identifier: Date.now(),
        target: element,
        clientX: x,
        clientY: y,
        radiusX: 2.5,
        radiusY: 2.5,
        rotationAngle: 10,
        force: 0.5,
    });

    const touchEvent = new TouchEvent(eventType, {
        cancelable: true,
        bubbles: true,
        touches: [touchObj],
        targetTouches: [],
        changedTouches: [touchObj],
        shiftKey: true,
    });

    element.dispatchEvent(touchEvent);
}
