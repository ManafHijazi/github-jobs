import React from 'react';
import { PropTypes } from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import '../Styles/JobDetailsView.scss';

export const ActiveJobDetailsComponent = ({ activeJob, isJobLoading }) => {
  return (
    <>
      {!isJobLoading && activeJob && (
        <div className='active-job-details-wrapper'>
          <div className='job-item'>
            <div className='job-title'>
              {(activeJob.title && activeJob.title) || 'N/A'}
              <div className='job-badge'>{(activeJob.type && activeJob.type) || 'N/A'}</div>
            </div>
            <div className='job-date'>
              {(activeJob.created_at && activeJob.created_at) || 'N/A'}
            </div>
          </div>
          <div className='job-item'>
            <div className='job-sub-title'>Description</div>
            <div className='job-description'>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${(activeJob.description && activeJob.description) || 'N/A'}`,
                }}
              />
            </div>
          </div>
          <div className='job-item'>
            <div className='job-sub-title'>Requirements</div>
            <div className='job-description'>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${(activeJob.how_to_apply && activeJob.how_to_apply) || 'N/A'}`,
                }}
              />
            </div>
          </div>
          <div className='job-item'>
            <div className='job-sub-title'>Summary</div>
            <div className='job-Summary'>
              <div className='summary-content'>
                <div className='summary-content-section'>
                  <div className='sub-item-title'>
                    <div className='summary-key'> Salary range:</div>
                    <div className='summary-value'>750 - 1100</div>
                  </div>
                  <div className='sub-item-title'>
                    <div className='summary-key'>Industry: </div>
                    <div className='summary-value'>Computer software</div>
                  </div>
                  <div className='sub-item-title'>
                    <div className='summary-key'>Experince required: </div>
                    <div className='summary-value'>1 year(s) minimum</div>
                  </div>
                </div>
                <div className='separator-v' />
                <div className='summary-content-section'>
                  <div className='sub-item-title'>
                    <div className='summary-key'>Major:</div>
                    <div className='summary-value'>Computer and information systems</div>
                  </div>
                  <div className='sub-item-title'>
                    <div className='summary-key'>Career level: </div>
                    <div className='summary-value'>Junior</div>
                  </div>
                  <div className='sub-item-title'>
                    <div className='summary-key'>Minimum GPA: </div>
                    <div className='summary-value'>90</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='job-item'>
            <div className='job-sub-title'>Required skills</div>
            <div className='required-skills'>
              <div className='job-badge'>Css</div>
              <div className='job-badge'>HTML</div>
              <div className='job-badge'>Reactjs</div>
              <div className='job-badge'>Restful Apis</div>
              <div className='job-badge'>Js</div>
            </div>
          </div>
          <div className='job-item'>
            <div className='job-sub-title'>Languages</div>
            <div className='required-skills'>
              <div className='job-badge'>En - Full professional proficiency</div>
              <div className='job-badge'>Ar - Full working proficiency</div>
            </div>
          </div>
        </div>
      )}
      {isJobLoading && <Skeleton animation='wave' />}
    </>
  );
};
ActiveJobDetailsComponent.propTypes = {
  activeJob: PropTypes.instanceOf(Object),
  isJobLoading: PropTypes.bool,
};
ActiveJobDetailsComponent.defaultProps = {
  isJobLoading: false,
};
