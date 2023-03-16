import withErrorBoundary from '../../../../common/HOC/withErrorBoundary';
import Aggregation from './components/Aggregation/Aggregation';
import Metrics from './components/Metrics/Metrics';

function Indicators() {
  return (
    <div className="section indicators">
      <Metrics />
      <Aggregation />
    </div>
  );
}

export default withErrorBoundary(Indicators);
