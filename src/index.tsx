import React from 'react';
import { makeDecorator, StoryContext, StoryGetter } from '@storybook/addons';
import { PreviewPanel } from './components/PreviewPanel';
import { fileNameResolveType, EditStoriesProps } from './types';


const defaultFileNameResolve: fileNameResolveType = (info) => {
  console.log(info);
  return info.fileName
};

const defaultCMSProps: EditStoriesProps = {
  fileNameResolve: defaultFileNameResolve,
  editPageLabel: 'Edit this page',
}

export const withEditStories = ( config : EditStoriesProps = defaultCMSProps) => {
  return makeDecorator({
    name: 'withGrommet',
    parameterName: 'grommet',
    wrapper: (getStory: StoryGetter, context: StoryContext) => {
      const rootSplit = context.kind.split(context.parameters.options.hierarchyRootSeparator);
      const path = rootSplit[rootSplit.length - 1]
      const pathSplit = path.split(context.parameters.options.hierarchySeparator);
      const shortName = pathSplit[pathSplit.length - 1];
      return (
        <PreviewPanel
          filePath={config.fileNameResolve({
            id: context.id,
            kind: context.kind,
            name: context.name,
            displayName: context.parameters.displayName,
            fileName: context.parameters.fileName,
            shortName,          
          })}
          shortName={shortName}
          config={config}
        >
          {getStory(context)}
        </PreviewPanel>  
      );
    },
  });
}

if (module && (module as any).hot && (module as any).hot.decline) {
  (module as any).hot.decline();
}
