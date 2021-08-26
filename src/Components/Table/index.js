import React from "react";
import "./style.scss";
function Table({ column, data }) {
  return (
    <div className="table-container">
      <div className="flex-table">
        {column?.map((item, index) => {
          return (
            <div className="flex-row" key={index}>
              {item.name}
            </div>
          );
        })}
      </div>
        {data?.map((data, index) => {
          return (
            <div className="flex-table" key={index} onClick={()=>{console.log('Data',data)}}>
              {column?.map((item, index) => (
                <div className="flex-row" key={index}>
                  {data[item.dataIndex]}
                </div>
              ))}
            </div>
          );
        })}
    </div>
  );
}

export default Table;
