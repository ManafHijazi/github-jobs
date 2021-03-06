import { Button, Typography } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { GetAllJobOpenings } from '../../Services/JobsServices';
import { useTranslation } from 'react-i18next';
import {
  RecentOpeningsCardComponent,
  RecentOpeningsSearchComponent,
} from './RecentOpeningsUtilities';
import './Styles/RecentOpeningsView.Styles.scss';

const parentTranslationPath = 'RecentOpeningsView';
const translationPath = '';

export const RecentOpeningsView = () => {
  const { t } = useTranslation(parentTranslationPath);
  const [isLoading, setIsLoading] = useState(false);
  const [jobsData, setJobsData] = useState(null);
  const [filter, setFilter] = useState({ description: '', location: '' });
  const [pagination, setPagination] = useState(1);
  const isRtl = JSON.parse(localStorage.getItem('localization')).isRtl;

  const getAllJobs = useCallback(async () => {
    setIsLoading(true);
    const result = await GetAllJobOpenings(filter, pagination);
    if (!(result && result.status && result.status !== 200)) setJobsData(result.data);
    else setJobsData([]);
    setIsLoading(false);
  }, [filter, pagination]);
  useEffect(() => {
    getAllJobs();
  }, [getAllJobs]);
  const onFilterChange = (newValue) => {
    setFilter(newValue);
    setPagination(1);
  };
  return (
    <div className='recent-openings-wrapper'>
      <RecentOpeningsSearchComponent onFilterChange={onFilterChange} />
      <div className='recent-openings-cards-wrapper'>
        <div className='section-title'>
          <Typography>{t(`${translationPath}recent-openings`)}</Typography>
        </div>
        <RecentOpeningsCardComponent isLoading={isLoading} data={jobsData} />
      </div>
      <div className='pagination-wrapper'>
        <Button disabled={pagination === 1} onClick={() => setPagination(pagination - 1)}>
          <span className='iconify' data-icon={`mdi-chevron-double-${isRtl ? 'right' : 'left'}`} />
          {t(`${translationPath}previous`)}
        </Button>
        <div className='pagination-amount'>{pagination}</div>
        <Button onClick={() => setPagination(pagination + 1)}>
          {t(`${translationPath}next`)}
          <span className='iconify' data-icon={`mdi-chevron-double-${isRtl ? 'left' : 'right'}`} />
        </Button>
      </div>
    </div>
  );
};
