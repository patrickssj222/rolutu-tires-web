import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './AlertBanner.module.scss';

export enum AlertBannerPalette {
  PRIMARY = 'primary',
  ACCENT = 'accent',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}

interface AlertBannerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  palette?: AlertBannerPalette;
  alertMessage: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const AlertBanner = ({
  className,
  palette = AlertBannerPalette.PRIMARY,
  alertMessage,
  leftIcon = null,
  rightIcon = null,
  ...htmlAttributes
}: AlertBannerProps) => {
  return (
    <div
      className={clsx([styles.container, styles[palette], className])}
      {...htmlAttributes}>
      <div className={styles.content}>
        {leftIcon}
        <p className={clsx([leftIcon && styles.messageWithLeftIcon])}>
          {alertMessage}
        </p>
      </div>
      {rightIcon}
    </div>
  );
};
