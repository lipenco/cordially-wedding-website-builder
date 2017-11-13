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
        drawerStyle={{backgroundColor: 'rgb(123, 231, 215)', boxShadow: 'none'}}
        drawerHeader={(<a className="logo-cordially" href="/"><img src="https://app.cordially.co/cordially-logo-new.jpg" style={{width: 100, paddingTop:9}}/></a>)}
        toolbarTitle={LocalTitle}
        toolbarStyle={{
          boxShadow: 'none',
          background:'linear-gradient(45deg, rgb(123, 231, 215) 1%, rgb(123, 231, 215) 40%, rgb(123, 231, 215) 40%, rgb(134, 164, 227) 100%)'
        }}
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
