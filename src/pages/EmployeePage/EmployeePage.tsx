/* eslint-disable @typescript-eslint/no-shadow */
import './EmployeePage.scss';

import Indicators from './section/Indicators/Indicators';
import Table from './section/Table/Table';
import Name from './section/Name/Name';

function EmployeePage() {
  return (
    <div className="Home">
      <Name />
      <h2>Indicators</h2>
      <Indicators />
      <h2>Table</h2>
      <Table />
    </div>
  );
}

export default EmployeePage;
