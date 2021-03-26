import React from 'react';
import { create } from 'react-test-renderer';
import Pagination from './pagination';

describe('Pagination component tests', () => {
    test('pages count is 11 but should be shown only 10', () => {
        const component = create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        let spans = root.findAllByType('span');
        expect(spans.length).toBe(10);
    });

    test('if pages count is more than 10 button NEXT should be shown', () => {
        const component = create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        let button = root.findAllByType('button');
        expect(button.length).toBe(1);
    })

})
