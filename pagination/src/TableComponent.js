import React, { useEffect, useState, Fragment } from "react";
import { PaginationComponent } from "./App";
import { TestData } from "./Constants";

const pageSize = 5;

export const TableComponent = (props) => {
  const [tableData, setTableData] = useState([]);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    setTableData(TestData);
    setTotalPage(TestData.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, []);

  const handlePagination = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };

  return (
    <Fragment>
      <table>
        <thead>
          <td>Name</td>
          <td>Value</td>
          <td>Status</td>
        </thead>
        <tbody>
          {tableData.map((item, key) => {
            return (
              <Fragment>
                {key >= minIndex && key < maxIndex && (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.value}</td>
                    <td>{item.status}</td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
      <PaginationComponent
        pageSize={pageSize}
        current={current}
        total={tableData && tableData.length}
        onChange={handlePagination}
      />
    </Fragment>
  );
};
