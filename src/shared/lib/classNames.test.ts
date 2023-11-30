import { classNames } from 'shared/lib/classNames';

describe('classNames', () => {
    test('with only firs param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additionsl class', () => {
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe('someClass class1 class2');
    });
    test('with mods', () => {
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2']))
            .toBe('someClass class1 class2 hovered scrollable');
    });
    test('with mods', () => {
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2']))
            .toBe('someClass class1 class2 hovered');
    });
    test('with mods', () => {
        expect(
            classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2']),
        )
            .toBe('someClass class1 class2 hovered');
    });
});
