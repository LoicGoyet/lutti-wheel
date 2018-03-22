import React from 'react';
import PropTypes from 'prop-types';

export default class AddSectionForm extends React.Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.title.value, this.color.value);
    return this.form.reset();
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        ref={form => {
          this.form = form;
        }}
      >
        <input
          type="text"
          placeholder="title"
          ref={input => {
            this.title = input;
          }}
          required
        />
        <input
          type="color"
          ref={input => {
            this.color = input;
          }}
        />
        <button type="submit" />
      </form>
    );
  }
}
