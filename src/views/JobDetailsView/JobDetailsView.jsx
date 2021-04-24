import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IconButton } from '@material-ui/core';
import { ActiveJobDetailsComponent, JobDetailsCardsComponent } from './JobDetailsUtilities';
import { GetAllJobOpenings, GetAllJobOpeningsById } from '../../Services/JobsServices';
import { GetParams } from '../../Helper';
import { useTranslation } from 'react-i18next';
import './Styles/JobDetailsView.scss';

const parentTranslationPath = 'JobDetailsView';
const translationPath = '';

export const JobDetailsView = () => {
  const { t } = useTranslation(parentTranslationPath);
  const [isLoading, setIsLoading] = useState(false);
  const [isJobLoading, setIsJobLoading] = useState(false);
  const [firstLoaded, setFirstLoaded] = useState(false);
  const [jobsData, setJobsData] = useState({ result: [] });
  const [filter] = useState({ description: '', location: '' });
  const [activeJob, setActiveJob] = useState(null);
  const [pagination, setPagination] = useState(1);
  const cardContainer = useRef(null);

  const getAllJobs = useCallback(async () => {
    setIsLoading(true);
    setFirstLoaded(false);
    const result = await GetAllJobOpenings(filter, pagination);
    if (!(result && result.status && result.status !== 200)) {
      if (pagination === 1) setJobsData({ result: result.data });
      else
        setJobsData((item) => ({
          result: item.result.concat(result.data),
        }));
    } else setJobsData({ result: [] });
    setIsLoading(false);
  }, [filter, pagination]);

  const getJobById = useCallback(async () => {
    setIsJobLoading(true);
    const result = await GetAllJobOpeningsById(GetParams('id'));
    if (!(result && result.status && result.status !== 200)) setActiveJob(result.data);
    else setActiveJob(null);
    setIsJobLoading(false);
  }, []);

  useEffect(() => {
    getAllJobs();
  }, [getAllJobs]);

  useEffect(() => {
    getJobById();
  }, [getJobById]);

  const onActiveJobChange = useCallback((activeItem) => {
    setActiveJob(activeItem);
  }, []);

  const scrollHandler = (e) => {
    setFirstLoaded(true);
    if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight && firstLoaded)
      setPagination(pagination + 1);
  };

  return (
    <div className='job-details-view-wrapper'>
      <div className='jobs-details-container'>
        <div
          className='jobs-details-cards-wrapper'
          ref={cardContainer}
          onScroll={scrollHandler}
          onScrollCapture={scrollHandler}>
          <JobDetailsCardsComponent
            data={jobsData && jobsData.result}
            isLoading={isLoading}
            onActiveJobChange={onActiveJobChange}
          />
        </div>
        <div className='jobs-details-content-wrapper'>
          <ActiveJobDetailsComponent activeJob={activeJob} isJobLoading={isJobLoading} />
        </div>
      </div>
      <div className='jobs-details-footer'>
        <div className='footer-text'>
          <div className='footer-title'>{t(`${translationPath}follow-us`)}</div>
          <div className='footer-sub-title'>{t(`${translationPath}engage-with-us`)}</div>
        </div>
        <div className='footer-actions'>
          <div className='footer-linkedin'>
            <IconButton>
              <span className='iconify' data-icon='mdi-linkedin' />
            </IconButton>
          </div>
          <div className='footer-website'>
            <IconButton>
              <span className='iconify' data-icon='mdi-web' />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
