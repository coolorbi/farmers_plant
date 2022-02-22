import React from 'react';
import { Spinner } from 'react-bootstrap';
const Loader = () => {
  return (
    <div
      className="text-primary spinner-border"
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
