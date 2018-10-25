import React from 'react';

export const AppContext = React.createContext();

class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.changeLocale = () => {
      this.setState(state => {
        const newLocale = state.locale === 'en' ? 'fr' : 'en';
        return {
          locale: newLocale
        };
      });
    };

    this.state = {
      locale: 'en',
      changeLocale: this.changeLocale
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;