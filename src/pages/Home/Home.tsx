/* eslint-disable @typescript-eslint/no-shadow */
import { observer } from 'mobx-react-lite';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../../components/ErrorComponent';
import Name from '../../components/Name';
import './Home.scss';
import Indicators from '../../components/Indicators/Indicators';

function Home() {
  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorComponent}
      >
        <Name />
      </ErrorBoundary>
      <ErrorBoundary
        FallbackComponent={ErrorComponent}
      >
        <Indicators />
      </ErrorBoundary>
      <div>Hello</div>
    </div>
  );
}

export default observer(Home);
