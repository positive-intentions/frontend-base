import Main from "../atomic/pages/main"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Main",
  component: Main,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
};

export const Basic = {
  args: {
  },
};
