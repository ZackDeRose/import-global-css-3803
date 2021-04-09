import React from 'react';

import './shared-library.module.css';

/* eslint-disable-next-line */
export interface SharedLibraryProps {}

export function SharedLibrary(props: SharedLibraryProps) {
  return (
    <div>
      <h1 className="error">Welcome to shared-library!</h1>
    </div>
  );
}

export default SharedLibrary;
