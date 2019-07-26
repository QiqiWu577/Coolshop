import React, { Component } from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ data, columns, sortColumn, onDelete, onLike, onSort }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />

      <TableBody
        data={data}
        columns={columns}
        onDelete={onDelete}
        onLike={onLike}
      />
    </table>
  );
};

export default Table;
