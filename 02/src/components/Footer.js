import React from 'react';
import FilterLink from './FilterLink';
//Replace constants like `'SHOW_ALL'` in `<Footer>` with paths like `'all'`.
const Footer = () => (
  <p>
    Show:
    {" "}
    //<FilterLink filter="SHOW_ALL">
    <FilterLink filter="all">
      All
    </FilterLink>
    {", "}
    //<FilterLink filter="SHOW_ACTIVE">
    <FilterLink filter="active">
      Active
    </FilterLink>
    {", "}
    //<FilterLink filter="SHOW_COMPLETED">
    <FilterLink filter="completed">
      Completed
    </FilterLink>
  </p>
);

export default Footer;
