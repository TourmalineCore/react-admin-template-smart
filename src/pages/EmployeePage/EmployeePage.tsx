/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-shadow */
import './EmployeePage.scss';

import { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
// import { ErrorBoundary } from 'react-error-boundary';
import Indicators from './section/Indicators/Indicators';
import Table from './section/Table/Table';
import Name from './section/Name/Name';
import NameState from './section/Name/NameState';
import NameStateContext from './section/Name/NameStateContext';
import NewErrorBoundary from '../../common/error-handling/NewErrorBoundary';
// import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
// import Greeting from './section/Name/TestCom';

function EmployeePage() {
  const nameState = useMemo(() => new NameState(), []);

  console.log(process.env.NODE_ENV);

  return (
    <NameStateContext.Provider value={nameState}>
      <div className="Home">
        {/* <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <ErrorComponent
              error={error}
              resetErrorBoundary={resetErrorBoundary}
            />
          )}
        >
          <Greeting />
        </ErrorBoundary> */}
        <NewErrorBoundary>
          <Name />
        </NewErrorBoundary>
        <h2>Indicators</h2>
        <Indicators />
        <h2>Table</h2>
        <Table />
      </div>
    </NameStateContext.Provider>

  );
}

export default observer(EmployeePage);
