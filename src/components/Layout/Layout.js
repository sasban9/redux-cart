import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader onToggle={props.onToggle} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
