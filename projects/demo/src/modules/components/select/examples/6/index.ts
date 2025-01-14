import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TuiBooleanHandler} from '@taiga-ui/cdk';
import {delay, of} from 'rxjs';

class User {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly avatarUrl: string | null = null,
    ) {}

    public toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const databaseMockData: readonly User[] = [
    new User('Roman', 'Sedov', 'https://avatars.githubusercontent.com/u/10106368'),
    new User('Alex', 'Inkin', assets`/images/avatar.jpg`),
    new User('Dmitriy', 'Demenskiy'),
    new User('Evgeniy', 'Mamaev'),
    new User('Ivan', 'Ishmametiev'),
    new User('Igor', 'Katsuba'),
    new User('Yulia', 'Tsareva'),
];

@Component({
    selector: 'tui-select-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSelectExample6 {
    protected value = null;

    protected readonly items$ = of(databaseMockData).pipe(delay(5000));

    protected readonly disabledItemHandler: TuiBooleanHandler<User> = ({avatarUrl}) =>
        !!avatarUrl;
}
