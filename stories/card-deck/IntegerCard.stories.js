// Button.stories.js|jsx

import React from 'react';

import IntegerCard  from '../../components/IntegerCard';

export default {
  /* ๐ The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Integer Card',
  component: IntegerCard,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <IntegerCard {...args} />;

//๐ Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   value: 42,
   label: 'T01',
};