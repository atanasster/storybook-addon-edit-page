import React from 'react'; 
import { addons, types } from '@storybook/addons';
import { fileNameResolveType, EditStoriesProps } from './types';

const defaultFileNameResolve: fileNameResolveType = (info) => {
  return info.fileName
};

const defaultCMSProps: EditStoriesProps = {
  fileNameResolve: defaultFileNameResolve,
  editPageLabel: 'Edit this page',
}


import { PreviewPanel } from './components/PreviewPanel';

const ADDON_ID = 'EDIT_SOURCES';

  
export const editStories = ( config : EditStoriesProps = defaultCMSProps) => {
  addons.register(ADDON_ID, () => {
    addons.add(ADDON_ID, {
      title: 'Edit source',
      type: types.TOOL,
      match: () => true,
      render: () => <PreviewPanel {...config} />
    });
  });  
}  

if (module && (module as any).hot && (module as any).hot.decline) {
  (module as any).hot.decline();
}
