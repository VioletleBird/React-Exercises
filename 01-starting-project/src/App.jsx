import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('components');

  function handleClick(selectedBtn) {
    setSelectedTopic(selectedBtn);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'components'} 
              onClick={() => handleClick('components')}
              >Components</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'jsx'} 
              onClick={() => handleClick('jsx')}
              >JSX</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'props'} 
              onClick={() => handleClick('props')}
              >Props</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'state'} 
              onClick={() => handleClick('state')}
              >State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
};

export default App;
