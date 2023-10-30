import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import styles from './Link.module.scss';

/* This control if the link has a underline*/
export enum LinkVariant {
  DEFAULT = 'default',
  WITHOUT_UNDERLINE = 'withoutUnderline',
  UNDERLINE_ON_HOVER = 'underlineOnHover',
}

export enum LinkPalette {
  PRIMARY = 'primary',
  DEFAULT = 'default',
  DANGER = 'danger',
}

interface LinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  variant?: LinkVariant;
  palette?: LinkPalette;
  showIcon?: boolean;
  label: string | React.ReactNode;
  labelClassName?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Link = ({
  variant = LinkVariant.DEFAULT,
  palette = LinkPalette.DEFAULT,
  showIcon = false,
  disabled = false,
  label,
  labelClassName,
  className,
  onClick,
  ...htmlAttributes
}: LinkProps) => {
  return (
    <a
      className={clsx([
        styles.link,
        styles[variant],
        disabled && styles.disabled,
        className,
        styles[`${palette}Palette`],
      ])}
      onClick={!disabled ? onClick : undefined}
      {...htmlAttributes}>
      <span className={clsx([styles.label, labelClassName])}>{label}</span>
      {showIcon && (
        <span className={styles.iconContainer}>
          <OpenInNewIcon className={styles.iconContainer} />
        </span>
      )}
    </a>
  );
};
