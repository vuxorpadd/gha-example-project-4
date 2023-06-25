import { useState } from 'react';

import HelpArea from './HelpArea';

function MainContent() {
  const [helpVisible, setHelpVisible] = useState(false);

  function toggleHelp() {
    setHelpVisible((isVisible) => !isVisible);
  }

  return (
    <main>
      <div onClick={toggleHelp}>{helpVisible ? 'Hide' : 'Show'} Help</div>
      {helpVisible && <HelpArea />}
    </main>
  );
}

export default MainContent;
