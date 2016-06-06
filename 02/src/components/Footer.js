import React from 'react';
import FilterLink from './FilterLink';
//Replace constants like `'SHOW_ALL'` in `<Footer>` with paths like `'all'`.
    //<FilterLink filter="SHOW_ACTIVE">
const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="all">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="active">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="completed">
      Completed
    </FilterLink>
  </p>
);

export default Footer;
