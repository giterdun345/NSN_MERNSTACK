import { useState, useEffect } from "react";
import { Table } from 'antd'
import 'antd/dist/antd.css';

const ProductDetail = (props) => {
  const [details, setDetails] = useState()
  const current_nsn = props.match.params.nsn

  const getDetails = ()=>{
    // fetches details of NSN located in aggregated db 
    fetch(`/detail/${current_nsn}`)
    .then(res => res.json())
    .then(data => {
        setDetails(data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  useEffect(()=>{
    getDetails()
  }, [])

  const columns = [
    {
      title: 'NIIN',
      width: 50,
      dataIndex: "NIIN",
      key: 'niin',
      fixed: 'left',
    },
    {
      title: 'Name',
      width: 100,
      dataIndex: 'NAME',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Part Number',
      dataIndex: 'PART_NUMBER',
      key: 'part_number',
      width: 50,
    },
    {
      title: 'Cage Code',
      dataIndex: 'CAGE_CODE',
      key: 'cage_code',
      width: 50,
    },
    { 
      title: 'Item Number',
      dataIndex: 'ITEM_NUMBER',
      key: 'item_number', 
      width: 50
    },
    { 
      title: 'Publication Date',
      dataIndex: 'PUBLICATION_DATE',
      key: 'pub_date',
      width: 65
    },
    { 
      title: 'Requirements Statement',
      dataIndex: 'REQUIREMENTS_STATEMENT',
      key: 'req_statement',
      width: 75 
    },
    { 
      title: 'Clear Text Reply',
      dataIndex: 'CLEAR_TEXT_REPLY',
      key: 'clear_text_reply',
      width: 75 
    },
    { 
      title: 'INC',
      dataIndex: 'INC',
      key: 'inc',
      width: 50 
    },
    { 
      title: 'DAC',
      dataIndex: 'DAC',
      key: 'dac',
      width: 25
    },
    { 
      title: 'MRC',
      dataIndex: 'MRC',
      key: 'mrc',
      width: 50
    },
    { 
      title: 'RNAAC',
      dataIndex: 'RNAAC',
      key: 'rnaac',
      width: 50
    },
    { 
      title: 'RNVC',
      dataIndex: 'RNVC',
      key: 'rnvc',
      width: 50 
    },
    { 
      title: 'RNCC',
      dataIndex: 'RNCC',
      key: 'rncc',
      width: 50 
    },
    { 
      title: 'Status',
      dataIndex: 'STATUS',
      key: 'status',
      width: 50
    },
    { 
      title: 'MSDS',
      dataIndex: 'MSDS',
      key: 'MSDS',
      width: 50 
    },
    { 
      title: 'SADC',
      dataIndex: 'SADC',
      key: 'SADC',
      width: 50 
    }
  ];
  
  return ( 
    <div>
      <a href='/' className='return-home'>Return to Home Page</a>
      <h1 style={{textAlign:'center'}}> Details for {current_nsn}</h1>
      <Table
        columns={columns}
        dataSource={details}
        scroll={{ x: 1600 }}
        sticky
      />
    </div>
   );
}
 
export default ProductDetail;