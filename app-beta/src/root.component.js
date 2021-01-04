import React from "react";

export default function Root(props) {
  return <section>
    {props.name} is mounted! If you wish, you can go to <a href="/app-alpha/">App Alpha</a>
  </section>;
}
