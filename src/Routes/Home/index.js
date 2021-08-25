import React, { useState, useEffect } from "react";
import PageLoader from "../../Components/Loader";
import EmptyState from "../../Components/EmptyState";
import Table from "../../Components/Table";
import FetchApi from "../../ApiActions/FetchApiActions";
import { TABLE_COL, URL_GIVEN } from "./constants.home";
export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [isError, setError] = useState(false);
  const [data, getData] = useState([]);

  const fetchApi = () => {
    FetchApi(URL_GIVEN, "POST")
      .then((response) => {
        getData(response.data);
        setShowLoader(false);
      })
      .catch((error) => {
        getData(error);
        setShowLoader(false);
        setError(true);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      {showLoader ? (
        <PageLoader show={showLoader} />
      ) : (
        <>
          {!isError ? (
            !data.length ? (
              <EmptyState />
            ) : (
              <Table column={TABLE_COL} data={data} />
            )
          ) : (
            <EmptyState isError={isError} message={data} />
          )}
        </>
      )}
    </div>
  );
}
