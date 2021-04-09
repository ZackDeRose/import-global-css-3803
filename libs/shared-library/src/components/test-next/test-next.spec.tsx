import React from 'react';
import { render } from '@testing-library/react';

import TestNext from './test-next';

describe('TestNext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestNext />);
    expect(baseElement).toBeTruthy();
  });
});
