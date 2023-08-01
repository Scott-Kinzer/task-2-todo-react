import DropDownInput from 'components/form/DropDownInput';
import { StandardSizes } from 'types/view';

export default {
  title: 'DropDownInput',
  component: DropDownInput,
  argTypes: {
    paddingDropDown: ['sm', 'md', 'xl'],
  },
};

const inputArgs: DropDownProps = {
  paddingDropDown: 'md',
};

export const DefaultDropDown = {
  render: (args: DropDownProps) => {
    return <DropDownInput id="name" {...args} />;
  },
  args: inputArgs,
};

type DropDownProps = {
  paddingDropDown: StandardSizes;
};
