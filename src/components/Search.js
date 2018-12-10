import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchComponent extends PureComponent {
  render() {
    const { onChange, ref } = this.props;
    return (
      <div>
        <input
          className="form-control mr-sm-2"
          placeholder="Search for..."
          ref={ref}
          onChange={onChange}
        />
      </div>
    );
  }
}

SearchComponent.propTypes = {
  onChange: PropTypes.func,
  ref: PropTypes.string
};

export default SearchComponent;
