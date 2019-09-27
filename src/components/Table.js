import React from 'react';
import { Table as TableAntd } from 'antd';

export default function Table(props) {
  const { filterDate, dataSource, setCampaign } = props;
  const columns = [
    {
      title: 'Campaign',
      dataIndex: 'Campaign',
      key: 'Campaign'
    },
    {
      title: 'Channel',
      dataIndex: 'Channel',
      key: 'Channel'
    },
    {
      title: 'ForamtDate',
      dataIndex: 'ForamtDate',
      key: 'ForamtDate'
    },
    {
      title: 'Media Source',
      dataIndex: 'Media Source',
      key: 'Media Source'
    },
    {
      title: 'ADS_FIVE_WATCHED',
      dataIndex: 'ADS_FIVE_WATCHED',
      key: 'ADS_FIVE_WATCHED'
    },
    {
      title: 'ADS_VIDEOAD_WATCHED',
      dataIndex: 'ADS_VIDEOAD_WATCHED',
      key: 'ADS_VIDEOAD_WATCHED'
    },
    {
      title: 'Add_Friend_Request',
      dataIndex: 'Add_Friend_Request',
      key: 'Add_Friend_Request'
    }
  ];

  return (
    <TableAntd
      columns={columns}
      dataSource={dataSource}
      onRow={(record, rowIndex) => {
        return {
          onClick: () => {
            setCampaign(record['Campaign']);
          }
        };
      }}
    />
  );
}
