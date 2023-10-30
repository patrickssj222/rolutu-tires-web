import React, {
  ChangeEventHandler,
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  Ref,
  useState,
} from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

export enum InputVariant {
  TEL = 'tel',
  TEXT = 'text',
}

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onTextChange?: (text: string) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const UnRefTextInput = (
  {
    value,
    placeholder,
    className,
    disabled,
    onTextChange,
    onChange,
    ...htmlAttributes
  }: InputProps,
  ref: Ref<HTMLInputElement>,
) => {
  const [inputValue, setInputValue] = useState(value ?? '');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    onChange?.(event);
    onTextChange?.(input);
    setInputValue(input);
  };

  return (
    <div className={styles.container}>
      <input
        ref={ref}
        className={clsx([
          styles.input,
          className,
          styles.text,
          inputValue && styles.withValue,
        ])}
        disabled={disabled}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        {...htmlAttributes}
      />
    </div>
  );
};

//Due to using joi, we need this to stop ref warnings
export const TextInput = forwardRef<HTMLInputElement, InputProps>(
  UnRefTextInput,
);
