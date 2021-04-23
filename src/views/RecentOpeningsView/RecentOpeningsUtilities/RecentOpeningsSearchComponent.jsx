import React, { useCallback, useReducer } from 'react';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Button, TextField } from '@material-ui/core';

const parentTranslationPath = 'RecentOpeningsView';
const translationPath = '';

export const RecentOpeningsSearchComponent = ({ onFilterChange }) => {
  const { t } = useTranslation(parentTranslationPath);
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
          size='small'
          variant='outlined'
          value={state.location}
          label={t(`${translationPath}location`)}
          placeholder={t(`${translationPath}location`)}
          onChange={(event) => setState({ id: 'location', value: event.target.value })}
        />
        <TextField
          size='small'
          variant='outlined'
          value={state.description}
          label={t(`${translationPath}description`)}
          placeholder={t(`${translationPath}description`)}
          onChange={(event) => setState({ id: 'description', value: event.target.value })}
        />
      </div>
      <div className='action-wrapper'>
        <Button onClick={() => onFilterChange(state)}>{t(`${translationPath}search`)}</Button>
      </div>
    </div>
  );
};
RecentOpeningsSearchComponent.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
