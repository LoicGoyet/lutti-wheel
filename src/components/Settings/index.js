import React from 'react';
import styled from 'styled-components';

import Panel from '../Panel';
import ListSections from '../../container/ListSections';
import AddSetupButton from '../../container/AddSetupButton';
import PickSetup from '../../container/PickSetup';

const Settings = () => (
  <Panel>
    <Column>
      <ListSections />

      <Footer>
        <AddSetupButton />
        <PickSetup />
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

const ButtonsRow = styled.nav`
  display: flex;
  margin-bottom: 10px;
`;
