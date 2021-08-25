import React from "react";

export default function EmptyState(props) {
  const NO_DATA_MESSAGE='No data found..!'
  return (
    <>
      {props.isError ? (
        <>
          <h1>oops!. Something went wrong</h1>
          {props.message && <p>{props?.message?.message}</p>}
        </>
      ) : (
        <h1>{NO_DATA_MESSAGE}</h1>
      )}
    </>
  );
}
