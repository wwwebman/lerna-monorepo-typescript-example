import React from 'react';
import Button from '@project/ui/Button';

const CustomButton: React.FC<{}> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default CustomButton;
