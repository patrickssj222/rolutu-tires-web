import React, {
  ChangeEventHandler,
  DetailedHTMLProps,
  TextareaHTMLAttributes,
  useState,
} from 'react';
import clsx from 'clsx';

import styles from './TextArea.module.scss';

interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  value: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  rows?: number;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextArea = ({
  className,
  value,
  placeholder,
  rows,
  disabled,
  onChange,
  ...htmlAttributes
}: TextAreaProps) => {
  const [textAreaValue, setTextAreaValue] = useState(value ?? '');
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const textarea = event.target.value;
    onChange(event);

    setTextAreaValue(textarea);
  };

  return (
    <textarea
      className={clsx([styles.textarea, className])}
      disabled={disabled}
      placeholder={placeholder}
      rows={rows ?? 11}
      value={textAreaValue}
      onChange={handleTextAreaChange}
      {...htmlAttributes}
    />
  );
};
