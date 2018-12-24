import React from 'react';
import PropTypes from 'prop-types';

const PickSetup = ({ setups, pickSetup }) => {
  const onChange = e => {
    const id = parseInt(e.target.value);
    return pickSetup(id);
  };

  return (
    <select onChange={onChange} value={setups.activeId}>
      {setups.allIds.map(setupId => {
        const setup = setups.byId[setupId];

        return (
          <option value={setupId} key={setupId}>
            {setup.title}
          </option>
        );
      })}
    </select>
  );
};

PickSetup.propTypes = {
  setups: PropTypes.object.isRequired,
  pickSetup: PropTypes.func.isRequired,
};

export default PickSetup;
