import React from "react";
import Footer from "./Footer";
import classes from "./Layout.module.css";

export default function Layout(props) {
  return (
    <div>
      <main className={classes.layout}>{props.children}</main>
      <Footer />
    </div>
  );
}
