import './HomePage.scss';

import Indicators from './section/Indicators/Indicators';
import Name from './section/Name/Name';
import Table from './section/Table/Table';

export default function HomePage() {
  return (
    <div className="Home">
      <Name />
      <Indicators />
      <Table />
    </div>
  );
}
