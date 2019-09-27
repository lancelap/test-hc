import React, { useState } from 'react';
import Table from './Table';
import Chart from './Chart';

export default function Root(props) {
  const { formatData, normData } = props;
  const [date, setDate] = useState(null);
  console.log('sadas', formatData[0]['Campaign'], )
  const [campaign, setCampaign] = useState(normData[formatData[0]['Campaign']]);

  return (
    <div>
      <Chart data={normData} campaign={campaign} />
      <Table dataSource={formatData} setCampaign={setCampaign} />
    </div>
  );
}
