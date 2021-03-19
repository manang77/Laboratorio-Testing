import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Modal from '@material-ui/core/Modal';
import Loader from 'react-spinners/ScaleLoader';
import * as classes from './spinner.styles';

interface Props {
  testId?: string;
}

export const SpinnerComponent: React.FunctionComponent <Props> = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  const { testId } = props;
  return (
    <Modal open={promiseInProgress} className={classes.modal}>
      <div data-testid={testId} className={classes.loaderContainer}>
        <Loader />
      </div>
    </Modal>
  );
};
