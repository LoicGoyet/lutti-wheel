import React from 'react';
import PropTypes from 'prop-types';

class EditSectionForm extends React.Component {
  static propTypes = {
    section: PropTypes.object.isRequired,
    removeItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    return this.props.editItem({
      ...this.section,
      label: this.label.value,
      color: this.color.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          ref={input => {
            this.label = input;
          }}
          onBlur={this.onSubmit}
          defaultValue={this.props.section.label}
        />

        <input
          type="color"
          ref={input => {
            this.color = input;
          }}
          onChange={this.onSubmit}
          defaultValue={this.props.section.color}
        />

        {/* <button type="submit">update</button> */}

        <button type="button" onClick={() => this.props.removeItem()}>
          remove
        </button>
      </form>
    );
  }
}

export default EditSectionForm;
