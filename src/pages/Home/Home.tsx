/* eslint-disable @typescript-eslint/no-shadow */
import { observer } from 'mobx-react-lite';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import Name from '../../components/Name/Name';
import './Home.scss';
import Indicators from '../../components/Indicators/Indicators';
import Table from '../../components/Table/Table';

function Home() {
  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorComponent}
      >
        <Name />
      </ErrorBoundary>

      <h2>Indicators</h2>
      <ErrorBoundary
        FallbackComponent={ErrorComponent}
      >
        <Indicators />
      </ErrorBoundary>

      <h2>Table</h2>
      <ErrorBoundary
        FallbackComponent={ErrorComponent}
      >
        <Table />
      </ErrorBoundary>
    </div>
  );
}

export default observer(Home);
