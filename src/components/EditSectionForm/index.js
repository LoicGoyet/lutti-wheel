import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaTrash from 'react-icons/lib/fa/trash';

import SectionInput from '../SectionInput';

class EditSectionForm extends React.Component {
  static propTypes = {
    section: PropTypes.object.isRequired,
    removeItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    sectionsLength: PropTypes.number,
  };

  static defaultProps = {
    sectionsLength: 0,
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.color);

    return this.props.editItem({
      ...this.section,
      label: this.label.value,
      color: this.color.value,
    });
  }

  render() {
    return (
      <Wrapper onSubmit={this.onSubmit}>
        <SectionInput
          onSubmit={this.onSubmit}
          text={{
            ref: input => (this.label = input),
            defaultValue: this.props.section.label,
          }}
          color={{
            ref: input => (this.color = input),
            defaultValue: this.props.section.color,
          }}
        />

        {this.props.sectionsLength > 2 && (
          <TrashButton type="button" onClick={() => this.props.removeItem()}>
            <FaTrash />
          </TrashButton>
        )}
      </Wrapper>
    );
  }
}

export default EditSectionForm;

const Wrapper = styled.form`
  display: flex;
`;

const TrashButton = styled.button`
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
