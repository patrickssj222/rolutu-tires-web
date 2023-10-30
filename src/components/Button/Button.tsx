import React, { ButtonHTMLAttributes, DetailedHTMLProps, useMemo } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

export enum ButtonVariant {
  PRIMARY = 'primary',
  OUTLINED = 'outlined',
  GHOST = 'ghost',
  LINK = 'link',
}

export enum ButtonPalette {
  PRIMARY = 'primary',
  ACCENT = 'accent',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}

export enum ButtonAlignment {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariant;
  palette?: ButtonPalette;
  alignment?: ButtonAlignment;
  hideLabel?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label: string;
  className?: string;
  onClick?: () => void; // not required when type='submit'
}

export const Button = ({
  variant = ButtonVariant.PRIMARY,
  palette = ButtonPalette.PRIMARY,
  alignment = ButtonAlignment.CENTER,
  hideLabel = false,
  disabled = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  label,
  className,
  onClick,
  ...htmlAttributes
}: ButtonProps) => {
  const buttonContent = useMemo(() => {
    return (
      <>
        {leftIcon && (
          <span
            className={clsx([
              styles.iconContainer,
              styles.leftIcon,
              hideLabel && styles.withoutLabel,
            ])}>
            {leftIcon}
          </span>
        )}
        <p className={clsx([styles.label, hideLabel && styles.hidden])}>
          {label}
        </p>
        {rightIcon && (
          <span
            className={clsx([
              styles.iconContainer,
              styles.rightIcon,
              hideLabel && styles.withoutLabel,
            ])}>
            {rightIcon}
          </span>
        )}
      </>
    );
  }, [hideLabel, isLoading, label, leftIcon, rightIcon]);

  return (
    <button
      aria-label={label}
      className={clsx([
        styles.button,
        styles[variant],
        styles[`${palette}Palette`],
        alignment && styles[alignment],
        isLoading && styles.loading,
        className,
      ])}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...htmlAttributes}>
      {buttonContent}
    </button>
  );
};
