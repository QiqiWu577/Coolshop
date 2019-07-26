import React, { Component } from "react";
import auth from "../services/authService";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      lable: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", lable: "Genre" },
    { path: "numberInStock", lable: "Stock" },
    { path: "dailyRentalRate", lable: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      )
    }
  ];

  renderDelete() {
    const user = auth.getCurentUser();
    const deleteButton = {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      )
    };

    if (user && user.isAdmin === true) {
      this.columns.push(deleteButton);
    }
  }

  render() {
    const { movies, onDelete, onLike, onSort, sortColumn } = this.props;

    this.renderDelete();

    return (
      <Table
        data={movies}
        columns={this.columns}
        sortColumn={sortColumn}
        onDelete={onDelete}
        onLike={onLike}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
