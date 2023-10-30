import React from 'react';
import clsx from 'clsx';

import styles from './badge.module.scss';

export enum BadgePalette {
  PRIMARY = 'primary',
  ACCENT = 'accent',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}

interface BadgeProps {
  palette?: BadgePalette;
  label: string;
  className?: string;
  onClick?: () => void;
}

export const Badge = ({
  palette = BadgePalette.PRIMARY,
  label,
  className,
  onClick,
}: BadgeProps) => {
  return (
    <div
      className={clsx([
        styles.badge,
        styles[`${palette}Palette`],
        className,
      ])}
      onClick={onClick}>
      {label}
    </div>
  );
};
