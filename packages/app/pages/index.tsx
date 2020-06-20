import React, { useEffect } from 'react';
import Button from '@project/ui/Button';
import CustomButton from 'components/CustomButton';
import logger from '@project/utils/logger';

const IndexPage = () => {
  useEffect(() => {
    logger('Page mounted');
  }, []);

  return (
    <>
      <p>
        The following Button resolved using built-in Next.js{' '}
        <a href="https://nextjs.org/docs/advanced-features/module-path-aliases">
          Absolute Imports
        </a>{' '}
        feature:
      </p>
      <CustomButton>Custom internal button</CustomButton>
      <p>The following Button resolved using custom alias configuration:</p>
      <Button>Button from ui</Button>
    </>
  );
};

export default IndexPage;
