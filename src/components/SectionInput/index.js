import React from 'react';
import styled from 'styled-components';

const SectionInput = props => (
  <Wrapper>
    <TextInput
      type="text"
      onBlur={props.onSubmit}
      innerRef={props.text.ref}
      defaultValue={props.text.defaultValue}
      required
    />
    <ColorPicker
      type="color"
      onChange={props.onSubmit}
      innerRef={props.color.ref}
      defaultValue={props.color.defaultValue}
    />
  </Wrapper>
);

export default SectionInput;

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  border: 1px solid rgb(43, 31, 67);
  border-radius: 40px;
  overflow: hidden;
  height: 40px;
  align-items: center;
`;

const TextInput = styled.input`
  flex-grow: 1;
  border: 0;
  padding: 0 15px;
  height: 38px;
  font-size: 14px;
  border-right: 1px solid rgb(43, 31, 67);
  margin-right: -4px;
  position: relative;

  &:focus {
    outline: 0;
  }
`;

const ColorPicker = styled.input`
  appearance: none;
  padding: 0;
  border-width: 0;
  height: 100px;
  width: 50px;
  margin-right: -3px;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;
