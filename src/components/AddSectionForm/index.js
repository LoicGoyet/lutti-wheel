import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaCaretRight from 'react-icons/lib/fa/caret-right';

export default class AddSectionForm extends React.Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
    defaultColor: PropTypes.string,
  };

  static defaultProps = {
    defaultColor: 'rgb(12, 57, 83)',
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.label.value, this.color.value);
    return this.form.reset();
  }

  render() {
    return (
      <React.Fragment>
        <Wrapper
          onSubmit={this.onSubmit}
          innerRef={form => {
            this.form = form;
          }}
        >
          <Group>
            <TextInput
              type="text"
              placeholder="new section"
              innerRef={input => {
                this.label = input;
              }}
              required
            />
            <ColorPicker
              type="color"
              defaultValue={this.props.defaultColor}
              innerRef={input => {
                this.color = input;
              }}
            />
          </Group>

          <SubmitButton type="submit">
            <FaCaretRight />
          </SubmitButton>
        </Wrapper>
      </React.Fragment>
    );
  }
}

const Wrapper = styled.form`
  display: flex;
  margin-bottom: 0;
  flex-shrink: 0;
`;

const SubmitButton = styled.button`
  margin-left: 10px;
  height: 40px;
  width: 40px;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  border: 0;
  font-size: 1.2em;
  color: rgb(43, 31, 67);
  border-radius: 40px;

  &:hover {
    background-color: rgb(43, 31, 67);
    color: #fff;
  }

  &:focus {
    outline: 0;
  }
`;

const Group = styled.div`
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
  padding: 0;
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
