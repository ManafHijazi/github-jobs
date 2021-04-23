import React, { useCallback, useReducer } from 'react';
import { PropTypes } from 'prop-types';
import { Button, TextField } from '@material-ui/core';

export const RecentOpeningsSearchComponent = ({ onFilterChange }) => {
  const reducer = useCallback((state, action) => {
    if (action.id !== 'edit') return { ...state, [action.id]: action.value };
    return {
      ...action.value,
    };
  }, []);
  const [state, setState] = useReducer(reducer, { description: '', location: '' });

  return (
    <div className='recent-openings-search-wrapper'>
      <div className='fileds-wrapper'>
        <TextField
          value={state.location}
          onChange={(event) => setState({ id: 'location', value: event.target.value })}
          size='small'
          label='Location'
          placeholder='Location'
          variant='outlined'
        />
        <TextField
          value={state.description}
          onChange={(event) => setState({ id: 'description', value: event.target.value })}
          size='small'
          label='Description'
          placeholder='Description'
          variant='outlined'
        />
      </div>
      <div className='action-wrapper'>
        <Button onClick={() => onFilterChange(state)}>Search</Button>
      </div>
    </div>
  );
};
RecentOpeningsSearchComponent.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
RecentOpeningsSearchComponent.defaultProps = {
  onFilterChange: () => {},
};
