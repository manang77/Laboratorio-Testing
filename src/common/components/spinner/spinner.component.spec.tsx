import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import * as promiseTracker from 'react-promise-tracker/lib/trackerHook';

interface PromiseStatus {
  promiseInProgress: boolean;
}

describe('./common/components/spinner/spiner.component specs', () => {
  it('should display loader spinner when it loads spinner component and calls a process returning a promise', () => {
    // Arrange
    const promiseExecutionInProgress: PromiseStatus = {
      promiseInProgress: true,
    };

    interface Props {
      testId: string;
    }

    const props: Props = {
      testId: 'spinnerTest',
    };

    const usePromiseTracker = jest
      .spyOn(promiseTracker, 'usePromiseTracker')
      .mockReturnValue(promiseExecutionInProgress);

    // Act
    render(<SpinnerComponent testId="spinnerTest" />);
    const spinnerElement = screen.getByTestId('spinnerTest');

    // Assert
    expect(usePromiseTracker).toHaveBeenCalledTimes(1);
    expect(spinnerElement).toBeVisible();
  });
});
