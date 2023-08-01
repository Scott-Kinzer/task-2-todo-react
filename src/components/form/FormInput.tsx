import React from 'react';

import { StandardSizes } from 'types/view';
type Props = {
  id: string;
  placeholder: string;
  type: string;
  inputBackground?: InputBackground;
  heightInput: StandardSizes;
  errorColor?: string;
  touched?: boolean;
  errors?: string | boolean;
};

export type InputBackground = 'bg-steelblue' | 'bg-mint' | 'bg-sandybrown';

const inputHeightConfig: Record<StandardSizes, string> = {
  sm: 'h-[40px]',
  md: 'h-[80px]',
  xl: 'h-[100px]',
};

const FormInput = ({
  id,
  placeholder,
  heightInput,
  inputBackground = 'bg-steelblue',
  errorColor = 'bg-peru',
  touched,
  errors,
  type,
  ...rest
}: Props) => {
  return (
    <div className="relative block">
      <input
        id={id}
        className={`${inputHeightConfig[heightInput]} w-[100%] rounded-md p-[5px] ${inputBackground}`}
        placeholder={placeholder}
        type={type}
        {...rest}
      />
      {touched && errors ? (
        <div className={`absolute bottom-[-25px] ${errorColor}`}>{errors}</div>
      ) : null}
    </div>
  );
};

export default FormInput;
