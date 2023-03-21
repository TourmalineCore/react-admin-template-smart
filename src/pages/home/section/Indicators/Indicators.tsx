import withErrorBoundary from '../../../../common/HOC/withErrorBoundary';
import Aggregation from './components/Aggregation/Aggregation';
import Metrics from './components/Metrics/Metrics';

function Indicators() {
  return (
    <>
      <h2>Indicators</h2>
      <div className="section indicators">
        <Metrics />
        <Aggregation />
      </div>
    </>
  );
}

export default withErrorBoundary(Indicators);
