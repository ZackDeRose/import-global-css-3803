import React from 'react';
import { render } from '@testing-library/react';

import SharedLibrary from './shared-library';

describe('SharedLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
