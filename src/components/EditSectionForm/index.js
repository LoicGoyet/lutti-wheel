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
    this.updateItem = this.updateItem.bind(this);
  }

  updateItem() {
    return this.props.editItem({
      ...this.section,
      label: this.label.value,
      color: this.color.value,
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          ref={input => {
            this.label = input;
          }}
          defaultValue={this.props.section.label}
          onChange={this.updateItem}
        />
        <input
          type="color"
          ref={input => {
            this.color = input;
          }}
          defaultValue={this.props.section.color}
          onChange={this.updateItem}
        />
        <button onClick={() => this.props.removeItem()}>remove</button>
      </form>
    );
  }
}

export default EditSectionForm;
