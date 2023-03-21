import './HomePage.scss';

import { useMemo } from 'react';
import Indicators from './section/Indicators/Indicators';
import NameState from './section/Name/NameState';
import NameStateContext from './section/Name/NameStateContext';
import Name from './section/Name/Name';
import Table from './section/Table/Table';

export default function HomePage() {
  // ToDo use approach with ref to guarantee singleton from the video of a conference
  const nameState = useMemo(() => new NameState(), []);

  return (
    <div className="Home">
      <NameStateContext.Provider value={nameState}>
        <Name />
      </NameStateContext.Provider>
      <Indicators />
      <Table />
    </div>
  );
}
