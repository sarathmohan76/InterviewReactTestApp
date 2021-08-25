import React from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
export default function PageLoader(props) {
  return (
    <>
      {props.show ? (
        <div className="center">
          <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
        </div>
      ) : null}
    </>
  );
}

PageLoader.prototype = {
  loaded: PropTypes.bool.isRequired,
};
PageLoader.defaultProps = {
  loaded: false,
};
