import { configure, addDecorator } from '@storybook/react';
import { withEditStories } from '../dist';

const gitPageResolver = ({ fileName } ) => {
  return fileName;
}
addDecorator(withEditStories({
  fileNameResolve: gitPageResolver,
  editPageLabel: 'edit this page...',
}));

configure(require.context('../stories/', true, /\.stories\.mdx$/), module);
configure(require.context('../stories/', true, /\.stories\.js$/), module);
