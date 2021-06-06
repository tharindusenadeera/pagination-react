import React from "react";
import { Pagination } from "antd";

export const PaginationComponent = (props) => {
  const {
    pageSize,
    current,
    total,
    onChange,
    disable,
    defaultCurrent,
    hideOnSinglePage,
  } = props;
  return (
    <Pagination
      defaultCurrent={defaultCurrent}
      pageSize={pageSize}
      current={current}
      total={total}
      disable={disable}
      onChange={onChange}
      hideOnSinglePage={hideOnSinglePage}
    />
  );
};
