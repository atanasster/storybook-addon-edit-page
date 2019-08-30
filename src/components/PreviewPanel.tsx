import React from 'react';
import ReactDOM from 'react-dom';
import { Combo, Consumer } from '@storybook/api';
import { Link } from '@storybook/design-system';
import styled from 'styled-components';
import { EditStoriesProps } from '../types';


const StyledContained = styled.div`
  margin: 8px;
`;
const StyledParagraph = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
    color: #e25e5e;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 700;
`;

const StyledHeading = styled.div`
  font-size: 25px;
  color: #000;
  margin-bottom: 0;
  line-height: 28px;
  font-weight: 800;
`;

interface PanelProps {
  filePath?: string,
  shortName?: string,
  config : EditStoriesProps,
}

const EditInject = ({ filePath, shortName, config }: PanelProps) => (
  <React.Fragment>
    {filePath && (
      <StyledContained>
        <StyledHeading as='h2'>
          {shortName}
        </StyledHeading>
        <StyledParagraph>
          <StyledLink target='_blank' href={filePath}>{config.editPageLabel}</StyledLink>
        </StyledParagraph>
      </StyledContained>  
    )}
  </React.Fragment>
);      



const mapper = ({ state }: Combo): { story: any } => {
  const story = state.storiesHash[state.storyId];
  return { story };
};

const conainer_id = 'edit_source_div_container';

export const PreviewPanel = (props : EditStoriesProps) => {
  return (
    <React.Fragment>
      <Consumer filter={mapper}>
        {({ story }: ReturnType<typeof mapper>) => {
          if (story && story.parameters && story.parameters.edit && story.parameters.edit.fileName) {
            const rootSplit = story.kind.split(story.parameters.options.hierarchyRootSeparator);
            const path = rootSplit[rootSplit.length - 1]
            const pathSplit = path.split(story.parameters.options.hierarchySeparator);
            const shortName = pathSplit[pathSplit.length - 1];
            const filePath = props.fileNameResolve({
              id: story.id,
              kind: story.kind,
              name: story.name,
              displayName: story.parameters.displayName,
              fileName: story.parameters.edit.fileName,
              shortName,          
            });
            if (filePath) {
              const iFrame = document.getElementById('storybook-preview-wrapper');
              
              if (iFrame) {
                let containerDiv = document.getElementById(conainer_id);
                if (!containerDiv) {
                  const el = document.createElement("div");
                  el.id = conainer_id;
                  containerDiv =  iFrame.insertBefore(el, document.getElementById('storybook-preview-iframe'));
                }
                return ReactDOM.createPortal((
                  <EditInject
                    filePath={filePath}
                    shortName={shortName}
                    config={props}
                  />
                ), containerDiv);
              }  
            }  
          }
          return null;
        }}
      </Consumer>
    </React.Fragment>  
  );
};
