import React from 'react';

import { StandardSizes } from 'types/view';

type Props = {
  id: string;
  paddingSize?: StandardSizes;
  backgroundColor?: DropDownBackground;
};

export type DropDownBackground = 'bg-steelblue' | 'bg-mint' | 'bg-sandybrown';
const paddingSizeConfig = {
  sm: 'p-[5px]',
  md: 'p-[10px]',
  xl: 'p-[15px]',
};

const DropDownInput = ({
  id,
  paddingSize = 'sm',
  backgroundColor = 'bg-steelblue',
  ...rest
}: Props) => {
  return (
    <select
      id={id}
      className={`box-content h-[40px]	 ${backgroundColor} rounded-md ${paddingSizeConfig[paddingSize]}`}
      {...rest}>
      <option value="task">Task</option>
      <option value="thought">Random Thought</option>
      <option value="idea">Idea</option>
      <option value="quote">Quote</option>
    </select>
  );
};

export default DropDownInput;
