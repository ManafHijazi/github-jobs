import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, TextField } from '@material-ui/core';

export const RecentOpeningsSearchComponent = ({ onFilterChange }) => {
  return (
    <div className='recent-openings-search-wrapper'>
      <div className='fileds-wrapper'>
        <TextField size='small' label='Location' placeholder='Location' variant='outlined' />
        <TextField size='small' label='Description' placeholder='Description' variant='outlined' />
      </div>
      <div className='action-wrapper'>
        <Button onClick={() => onFilterChange({})}>Search</Button>
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
