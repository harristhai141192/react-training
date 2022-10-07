// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Footer from '.';

// Constants
import { FOOTER_DATA } from '@constants/variables';

// CSS
import '../../index.css';

export default {
  title: 'Practice-One/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  labelLogoName: FOOTER_DATA.links.labelName,
};
