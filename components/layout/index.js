import { Fragment } from 'react';
import Fotter from './fotter';
import Header from './header';

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Fotter/>
    </Fragment>
  );
}

export default Layout;
