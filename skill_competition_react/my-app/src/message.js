
import React from 'react';
import { Notification, Placeholder } from 'rsuite';

const Message = React.forwardRef(({ type, ...rest }, ref) => {
  return (
    <Notification ref={ref} {...rest} type={type} header={type}>
      <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
    </Notification>
  );
});

export { Message };