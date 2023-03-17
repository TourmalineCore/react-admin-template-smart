import './HomePage.scss';

import { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import Indicators from './section/Indicators/Indicators';
import NameState from './section/Name/NameState';
import NameStateContext from './section/Name/NameStateContext';
import Name from './section/Name/Name';
import Table from './section/Table/Table';

function HomePage() {
  const nameState = useMemo(() => new NameState(), []);

  return (
    <NameStateContext.Provider value={nameState}>
      <div className="Home">
        <Name />

        <h2>Indicators</h2>
        <Indicators />

        <h2>Table</h2>
        <Table />
      </div>
    </NameStateContext.Provider>
  );
}

export default observer(HomePage);
