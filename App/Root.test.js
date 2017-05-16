import React from 'react';
import renderer from 'react-test-renderer';
import Root from './Root';
it('renders without crashing', () => {
    const rendered = renderer.create(<Root />).toJSON();
    expect(rendered).toBeTruthy();
});
