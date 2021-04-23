import { Button, Typography } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { GetAllJobOpenings } from '../../Services/JobsServices';
import {
  RecentOpeningsCardComponent,
  RecentOpeningsSearchComponent,
} from './RecentOpeningsUtilities';
import './Styles/RecentOpeningsView.Styles.scss';

export const RecentOpeningsView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobsData, setJobsData] = useState(null);
  const [filter, setFilter] = useState({ description: '', location: '' });
  const [pagination, setPagination] = useState(0);

  const getAllJobs = useCallback(async () => {
    setIsLoading(true);
    const result = await GetAllJobOpenings(filter, pagination);
    if (!(result && result.status && result.status !== 200)) {
      setJobsData(result.data);
    } else {
      setJobsData([]);
    }
    setIsLoading(false);
  }, [filter, pagination]);
  useEffect(() => {
    getAllJobs();
  }, [getAllJobs]);
  const onFilterChange = (newValue) => {
    setFilter(newValue);
  };
  return (
    <div className='recent-openings-wrapper'>
      <RecentOpeningsSearchComponent onFilterChange={onFilterChange} />
      <div className='recent-openings-cards-wrapper'>
        <div className='section-title'>
          <Typography>Recent Openings</Typography>
        </div>
        <RecentOpeningsCardComponent isLoading={isLoading} data={jobsData} />
      </div>
      <div className='pagination-wrapper'>
        <Button disabled={pagination === 0} onClick={() => setPagination(pagination - 1)}>
          <span className='iconify' data-icon='mdi-chevron-double-left' />
          Previous
        </Button>
        <div className='pagination-amount'>{pagination + 1}</div>
        <Button onClick={() => setPagination(pagination + 1)}>
          Next
          <span className='iconify' data-icon='mdi-chevron-double-right' />
        </Button>
      </div>
    </div>
  );
};
