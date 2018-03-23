import React from 'react';
import PropTypes from 'prop-types';

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
      <form
        onSubmit={this.onSubmit}
        ref={form => {
          this.form = form;
        }}
      >
        <input
          type="text"
          placeholder="label"
          ref={input => {
            this.label = input;
          }}
          required
        />
        <input
          type="color"
          defaultValue={this.props.defaultColor}
          ref={input => {
            this.color = input;
          }}
        />
        <button type="submit" />
      </form>
    );
  }
}
