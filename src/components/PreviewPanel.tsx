import React from 'react';
import { Link } from '@storybook/design-system';
import styled from 'styled-components';
import { EditStoriesProps } from '../types';

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
  children: React.ReactNode,
  filePath?: string,
  shortName?: string,
  config : EditStoriesProps,
}

export const PreviewPanel = ({ children, filePath, shortName, config }: PanelProps) => {
  console.log(filePath);
  return (
    <React.Fragment>
      {filePath && (
        <div>
          <StyledHeading as='h2'>
            {shortName}
          </StyledHeading>
          <StyledParagraph>
            <StyledLink target='_blank' href={filePath}>{config.editPageLabel}</StyledLink>
          </StyledParagraph>
        </div>  
      )}
      {children}
    </React.Fragment>
  );    
};
