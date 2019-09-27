import React from 'react';
import './App.css';
import data from './data.json';
import Root from './components/Root';

function App() {
  const formatData = data.reduce((acc, current) => {
    if (typeof current['Campaign'] === 'object') {
      return acc;
    }
    let date = new Date(Date.parse(current['Date']));
    date = new Intl.DateTimeFormat().format(date);
    acc.push({ ...current, ForamtDate: date, DateMs: +new Date(current['Date']) });
    return acc;
  }, []);

  const normData = formatData.reduce((acc, current) => {
    if (typeof current['Campaign'] === 'object') {
      return acc;
    }

    if (!Array.isArray(acc[current['Campaign']])) {
      acc[current['Campaign']] = [];
    }

    acc[current['Campaign']].push(current);

    return acc;
  }, {});

  console.log('normData', formatData, normData);
  return (
    <div className="App">
      <Root normData={normData} formatData={formatData} />
    </div>
  );
}

export default App;
