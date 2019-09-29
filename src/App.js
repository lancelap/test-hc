import React from 'react';
import './App.css';
import data from './data.json';
import Root from './components/Root';

function App() {
  let minDate = null;
  let maxDate = null;
  const formatData = data.reduce((acc, current) => {
    if (typeof current['Campaign'] === 'object') {
      return acc;
    }
    let date = new Date(Date.parse(current['Date']));
    if(minDate === null && maxDate === null) {
      minDate = date;
      maxDate = date;
    }
    if(date > maxDate) {
      maxDate = date;
    }
    if(date < minDate) {
      minDate = date;
    }
    date = new Intl.DateTimeFormat().format(date);
    acc.push({ ...current, FormatDate: date, DateMs: +new Date(current['Date']) });
    return acc;
  }, []);

  const normData = formatData.reduce((acc, current) => {
    if (typeof current['Campaign'] === 'object') {
      return acc;
    }

    if (!Array.isArray(acc[current['Campaign'] + current['Channel']])) {
      acc[current['Campaign'] + current['Channel']] = [];
    }

    acc[current['Campaign'] + current['Channel']].push(current);

    return acc;
  }, {});

  return (
    <div className="App">
      <Root normData={normData} minDate={minDate} maxDate={maxDate} formatData={formatData} />
    </div>
  );
}

export default App;
