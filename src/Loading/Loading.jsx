import React from "react";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return Array(6)
    .fill({})
    .map(() => {
      return (
        <div>
          <Skeleton width={100} height={100} className="mb-2" />
          <Skeleton width={100} height={100} className="mb-2" />
        </div>
      );
    });
};

export default Loading;
