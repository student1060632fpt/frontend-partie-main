/**
 * Data Table
 */
import React from 'react';
//  import 'antd/dist/antd.css';
import { Table } from 'antd';
import { itemRender, onShowSizeChange } from "../../../../paginationfunction"
import "../../../../antdstyle.css"
import Sidebar from '../../../../commoncomponent/sidebar';

const DataTable = () => {
  const data = [
    { id: 1, name: "Tiger Nixon", position: "System Architect", office: "Edinburgh", age: "61", salary: '320,800', startdate: '2011/04/25' },
    { id: 2, name: "Garrett Winters", position: "Accountant", office: "Tokyo", age: "63", salary: '170,750', startdate: '2011/07/25' },
    { id: 3, name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: "66", salary: '$86,000', startdate: '2009/01/12' },
    { id: 4, name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: "22", salary: '433,060', startdate: '2012/03/29' },
    { id: 5, name: "Airi Satou", position: "Accountant", office: "Tokyo", age: "33", salary: '162,700', startdate: '2008/11/28' },
    { id: 6, name: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: "61", salary: '372,000', startdate: '2012/12/02' },
    { id: 7, name: "Herrod Chandler", position: "Integration Specialist", office: "San Francisco", age: "59", salary: '137,500', startdate: '2012/08/06' },
    { id: 8, name: "Rhona Davidson", position: "Javascript Developer", office: "Tokyo", age: "55", salary: '327,900', startdate: '2010/10/14' },
    { id: 9, name: "Colleen Hurst", position: "Software Engineer", office: "San Francisco", age: "39", salary: '205,500', startdate: '2009/09/15' },
    { id: 10, name: "Sonya Frost", position: "Office Manager", office: "Edinburgh", age: "23", salary: '103,600', startdate: '2008/12/13' },
    { id: 11, name: "Jena Gaines", position: "Office Manager", office: "London", age: "30", salary: '90,560', startdate: '2008/12/19' },
    { id: 12, name: "Quinn Flynn", position: "Support Lead", office: "Edinburgh", age: "22", salary: '$342,000', startdate: '2013/03/03' },
    { id: 13, name: "Charde Marshall", position: "Regional Director", office: "San Francisco", age: "36", salary: '$470,600', startdate: '2008/10/16' },
    { id: 14, name: "Haley Kennedy", position: "Senior Marketing Designer", office: "London", age: "43", salary: '$313,500', startdate: '2012/12/18' },
    { id: 15, name: "Tatyana Fitzpatrick", position: "Regional Director", office: "London", age: "19", salary: '$385,750', startdate: '2010/03/17' },
    { id: 16, name: "Michael Silva", position: "Marketing Designer", office: "London", age: "66", salary: '$198,500', startdate: '2012/11/27' },







  ];
  const columns = [

    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Position',
      dataIndex: 'position',
      sorter: (a, b) => a.position.length - b.position.length,
    },

    {
      title: 'Office',
      dataIndex: 'office',
      sorter: (a, b) => a.office.length - b.office.length,
    },

    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age.length - b.age.length,
    },
    {
      title: 'Start date',
      dataIndex: 'startdate',
      sorter: (a, b) => a.age.length - b.age.length,
    },

    {
      title: 'Salary',
      dataIndex: 'salary',
      render: (text, record) => (
        <span>$ {text}</span>
      ),
      sorter: (a, b) => a.salary.length - b.salary.length,
    },
  ]
  return (
    <>
      <div className='main-wrapper'>
        <Sidebar />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Data Tables</h3>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Datatable */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="card-header pt-0 mb-4">
                      <h4 className="card-title">Default Datatable</h4>
                      <p className="card-text">
                        This is the most basic example of the datatables with zero
                        configuration. Use the <code>.datatable</code> class to
                        initialize datatables.
                      </p>
                    </div>
                    <div className="table-responsive">
                      <Table
                        pagination={{
                          total: data.length,
                          showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger: true, onShowSizeChange: onShowSizeChange, itemRender: itemRender
                        }}
                        style={{ overflowX: 'auto' }}
                        columns={columns}
                        bordered
                        dataSource={data}
                        rowKey={record => record.id}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Datatable */}
          </div>
        </div>
        {/* /Page Wrapper */}
      </div>
    </>

  );
}
export default DataTable;
