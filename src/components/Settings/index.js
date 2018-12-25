import React from 'react';
import styled from 'styled-components';

import Panel from '../Panel';
import ListSections from '../../container/ListSections';
import AddSetupButton from '../../container/AddSetupButton';
import SelectActiveSetup from '../../container/SelectActiveSetup';

const Settings = () => (
  <Panel>
    <Column>
      <ListSections />

      <Footer>
        <SelectActiveSetup />
        <AddSetupButton />
      </Footer>
    </Column>
  </Panel>
);

export default Settings;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Footer = styled.footer`
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 20px;
`;
