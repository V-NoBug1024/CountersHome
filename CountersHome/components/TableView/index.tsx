import * as React from "react";

const TableView = React.memo(
  React.forwardRef((props, ref) => {
    return <div>表格</div>;
  })
);

export default TableView;
