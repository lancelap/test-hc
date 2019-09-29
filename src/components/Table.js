import React, { useState } from 'react';
import { Table as TableAntd, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import moment from 'moment';

export default function Table(props) {
  const { dataSource, setCampaign, dateRange: {startDate, endDate} } = props;
  const filteredDataSource = (dataSource.filter(item => {
    return moment(item['Date']).isBetween(startDate, endDate, null, '[]');
  }))
  const [searchText, setSearchText] = useState('');
  let searchInput = null;
  function getColumnSearchProps(dataIndex) {
    return {
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm)}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
        </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
        </Button>
        </div>
      ),
      filterIcon: filtered => (
        <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
      onFilter: (value, record) =>
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => searchInput.select());
        }
      },
      render: text => (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ),
    }
  };
  
  function handleSearch(selectedKeys, confirm) {
    confirm();
    setSearchText(selectedKeys[0]);
  };
  
  function handleReset(clearFilters) {
    clearFilters();
    setSearchText('');
  };

  const columns = [
    {
      title: 'Campaign',
      dataIndex: 'Campaign',
      key: 'Campaign'
    },
    {
      title: 'Channel',
      dataIndex: 'Channel',
      key: 'Channel',
      ...getColumnSearchProps('Channel'),
    },
    {
      title: 'Date',
      dataIndex: 'FormatDate',
      key: 'FormatDate',
      sorter: (a, b) => {
        return b.DateMs - a.DateMs;
      },
    },
    {
      title: 'Media Source',
      dataIndex: 'Media Source',
      key: 'Media Source',
    },
    {
      title: 'ADS FIVE WATCHED',
      dataIndex: 'ADS_FIVE_WATCHED',
      key: 'ADS_FIVE_WATCHED'
    },
    {
      title: 'ADS VIDEOAD WATCHED',
      dataIndex: 'ADS_VIDEOAD_WATCHED',
      key: 'ADS_VIDEOAD_WATCHED'
    },
    {
      title: 'Add Friend Request',
      dataIndex: 'Add_Friend_Request',
      key: 'Add_Friend_Request'
    }
  ];

  return (
    <TableAntd
      rowKey={record => record['Campaign'] + record['Channel']}
      columns={columns}
      dataSource={filteredDataSource}
      onRow={(record, rowIndex) => {
        return {
          onClick: () => {
            setCampaign(record['Campaign'] + record['Channel']);
          }
        };
      }}
    />
  );
}
