import React from 'react';
import 'font-awesome/scss/font-awesome.scss';
import Navigation from '../components/Navigation/Navigation.jsx';
import config from '../../data/SiteConfig';
import './index.scss';
import ReactGA from 'react-ga';

export default class MainLayout extends React.Component {
  getLocalTitle(currentPath) {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let title = '';
    if (currentPath === ('')) {
      title = 'Home';
    } else if (currentPath === ('tags/')) {
      title = 'Tags';
    } else if (currentPath === ('categories/')) {
      title = 'Categories';
    } else if (currentPath === ('about/')) {
      title = 'About';
    } else if (currentPath === ('blog/')) {
      title = 'Blog';
    } else if (currentPath.includes('posts')) {
      title = 'Article';
    } else if (currentPath.includes('tags/')) {
      const tag = currentPath.replace('tags/', '').replace('/', '').replace('-', ' ');
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.includes('categories/')) {
      const category = currentPath.replace('categories/', '').replace('/', '').replace('-', ' ');
      title = `${capitalize(category)}`;
    }
    return title;
  }

  componentDidMount() {
    ReactGA.initialize('UA-84206959-1');
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    const { children } = this.props;
    const pathPrefix = config.pathPrefix ? config.pathPrefix : '/';
    const currentPath = this.props.location.pathname.replace(pathPrefix, '').replace('/', '');
    return (
      <div>
      {
        currentPath === ('') &&
            children()
      }
      {
        currentPath !== ('') && <Navigation config={config} LocalTitle={this.getLocalTitle(currentPath)}>
                <div>
                  {children()}
                </div>
              </Navigation>
      }
      </div>
    );
  }
}
