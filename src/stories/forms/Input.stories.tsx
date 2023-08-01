import FormInput, { InputBackground } from 'components/form/FormInput';
import { StandardSizes } from 'types/view';

export default {
  title: 'FormInput',
  component: FormInput,
  argTypes: {
    heightInput: ['sm', 'md', 'xl'],
    inputBackground: ['bg-steelblue', 'bg-mint', 'bg-sandybrown'],
  },
};

const inputArgs: InputProps = {
  heightInput: 'md',
  inputBackground: 'bg-steelblue',
};

export const DefaultInput = {
  render: (args: InputProps) => {
    return (
      <FormInput
        id="name"
        placeholder="Enter your name"
        type="text"
        {...args}
      />
    );
  },
  args: inputArgs,
};

type InputProps = {
  heightInput: StandardSizes;
  inputBackground: InputBackground;
};

export const ErrorInput = {
  render: (args: InputProps) => {
    return (
      <FormInput
        id="name"
        placeholder="Enter your name"
        type="text"
        errors="Wrong text"
        touched={true}
        {...args}
      />
    );
  },
  args: inputArgs,
};
