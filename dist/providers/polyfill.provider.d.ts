import 'source-map-support/register';
import { AbstractDto } from '../common/dtos';
import { AbstractEntity } from '../common/entities';
declare global {
    interface Array<T> {
        toDtos<B extends AbstractDto>(this: AbstractEntity<B>[]): B[];
    }
}
