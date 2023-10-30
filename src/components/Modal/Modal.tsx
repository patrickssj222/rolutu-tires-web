import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { Close } from '@mui/icons-material';

import { Button, ButtonVariant } from 'components/Button/Button';

import styles from './Modal.module.scss';

interface LinkProps {
  className?: string;
  onClose?: () => void;
  children?: ReactNode;
}

export const Modal = ({
  className,
  onClose,
  children,
  ...htmlAttributes
}: LinkProps) => {
  return (
    <div className={styles.modal} {...htmlAttributes}>
      <div className={clsx([styles.modalContentWrapper, className])}>
        <div className={styles.modalHeader}>
          <Button
            className={styles.closeIconWrapper}
            label={''}
            leftIcon={<Close className={styles.closeIcon} />}
            variant={ButtonVariant.GHOST}
            onClick={onClose}></Button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
