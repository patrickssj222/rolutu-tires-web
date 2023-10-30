import React from 'react';
import clsx from 'clsx';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './pill.module.scss';

export enum PillVariant {
  ROUNDED = 'rounded',
  SQUARE = 'square',
}

export enum PillSize {
  DEFAULT = 'default',
  SMALL = 'small',
}

export enum PillPalette {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface PillProps {
  variant?: PillVariant;
  palette?: PillPalette;
  size?: PillSize;
  label: string;
  showIcon?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({ ...props }) => <button {...props} />;
const Span = ({ ...props }) => <span {...props} />;
export const Pill = ({
  variant = PillVariant.ROUNDED,
  palette = PillPalette.PRIMARY,
  size = PillSize.DEFAULT,
  showIcon = false,
  label,
  className,
  onClick,
}: PillProps) => {
  const Component = onClick ? Button : Span;
  return (
    <Component
      className={clsx([
        styles.pill,
        onClick && styles.button,
        styles[variant],
        styles[`${palette}Palette`],
        styles[size],
        className,
      ])}
      onClick={onClick}>
      {label}
      {showIcon && <ExpandMoreIcon className={styles.icon} />}
    </Component>
  );
};
