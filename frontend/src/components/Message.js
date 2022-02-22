import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
  return (
    <div
      class={`alert alert-${variant} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{children}</strong>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
