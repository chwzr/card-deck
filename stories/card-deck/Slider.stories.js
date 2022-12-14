// Button.stories.js|jsx

import React from 'react';

import Slider  from '../../components/Slider';

export default {
  /* ๐ The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Slider',
  component: Slider,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Slider {...args} />;

//๐ Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   initialValue: 42,
   label: 'T01',
   inputKey: "test.t01",
   notebookName: "test.ipynb"
};