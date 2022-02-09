import React from "react";
import classes from "./Pagination.module.css";

export default function Pagination(props) {
  const btnClickHandler = (e) => {
    props.setPage(e.target.value);
  };

  const total = Math.ceil(props.len / props.resPerPage);
  let prevButton;

  if (total !== 0 && props.currentPage > 1) {
    prevButton = (
      <button
        type="button"
        onClick={btnClickHandler}
        value="prev"
        className={classes.paginationButton}
      >
        Prev {props.currentPage - 1} / {total}
      </button>
    );
  } else {
    prevButton = <button type="button" className={classes.hiddenBtn}></button>;
  }

  let nextButton;

  if (props.currentPage < total && total !== 0) {
    nextButton = (
      <button
        type="button"
        onClick={btnClickHandler}
        value="next"
        className={classes.paginationButton}
      >
        Next {props.currentPage} / {total}{" "}
      </button>
    );
  }

  return (
    <div className={classes.pagination}>
      {prevButton}
      {nextButton}
    </div>
  );
}
