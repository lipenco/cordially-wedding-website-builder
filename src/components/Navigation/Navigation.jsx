import React, { Component } from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import ToolbarActions from '../ToolbarActions/ToolbarActions.jsx';
import Footer from '../Footer/Footer.jsx';
import GetNavList from './NavList.jsx';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    const { children, config, LocalTitle } = this.props;
    return (
      <NavigationDrawer
        style={{backgroundColor: 'transparent'}}
        drawerTitle={<a href='/'>Cordially</a>}
        toolbarTitle={LocalTitle}
        contentClassName="main-content"
        navItems={GetNavList(config)}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MAX}
        toolbarActions={<ToolbarActions config={config} />}
      >
        <div className="main-container">
          {children}
        </div>
        <Footer config={config} />
      </NavigationDrawer>
    );
  }
}

export default Navigation;
