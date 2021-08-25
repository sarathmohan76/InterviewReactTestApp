import React from "react";
import "./style.scss";
function Table({ column, data }) {
  return (
    <div class="table-container">
      <div class="flex-table header">
        {column?.map((item, index) => {
          return (
            <div class="flex-row" key={index}>
              {item.name}
            </div>
          );
        })}
      </div>
      <>
        {data?.map((data, index) => {
          return (
            <div class="flex-table row" key={index}>
              {column?.map((item, index) => (
                <div class="flex-row" key={index}>
                  {data[item.dataIndex]}
                </div>
              ))}
            </div>
          );
        })}
      </>
    </div>
  );
}

export default Table;
