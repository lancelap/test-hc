import React, { useState, useEffect } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';
import { Button, PageHeader } from "antd";
import Table from './Table';
import Chart from './Chart';
import AuthPage from './AuthPage';

export default function Root(props) {
  const { formatData, normData, minDate, maxDate } = props;
  const [dateRange, setRange] = useState({ startDate: moment(minDate), endDate: moment(maxDate) });
  const [campaign, setCampaign] = useState(formatData[0]['Campaign'] + formatData[0]['Channel']);
  const initialState = () => window.localStorage.getItem("authorized") || null;
  const [auth, setAuth] = useState(initialState);
  useEffect(() => window.localStorage.setItem("authorized", auth), [auth]);

  if(auth !== 'true') {
    return (<AuthPage setAuth={setAuth} />);
  }
  
  return (
    <div>
      <PageHeader
        extra={[
          <DateRangePicker
            key="picker"
            locale={{ format: "DD.MM.YYYY" }}
            onApply={(e, picker) => {
              setRange({
                endDate: picker.endDate,
                startDate: picker.startDate
              });
            }}
            startDate={dateRange.startDate}
            endDate={dateRange.endDate}
            minDate={minDate}
            maxDate={maxDate}
          >
            <Button type="primary">
              {dateRange.startDate.format('DD-MM-YYYY')} -
            {dateRange.endDate.format('DD-MM-YYYY')}
            </Button>
          </DateRangePicker>,
          <Button onClick={() => { setAuth('false') }} key="logout">Logout</Button>
        ]}
      ></PageHeader>
      <Chart 
        data={normData} 
        campaign={campaign} 
        dateRange={dateRange} />
      <Table 
        dataSource={formatData} 
        setCampaign={setCampaign} 
        dateRange={dateRange} />
    </div>
  );
}
