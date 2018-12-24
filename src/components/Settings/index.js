import React from 'react';
import styled from 'styled-components';

import Panel from '../Panel';
import ListSections from '../../container/ListSections';
import RemoveAllSections from '../../container/RemoveAllSections';
import Preset from '../../container/Preset';

const Settings = () => (
  <Panel>
    <Column>
      <ListSections />

      <Footer>
        <ButtonsRow>
          <RemoveAllSections />
          <Preset />
        </ButtonsRow>
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
