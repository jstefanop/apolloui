import React from 'react';

export const AppContext = React.createContext();

class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.changeOption = (option) => {
      this.setState(state => {
        return option;
      });
    };

    this.state = {
      options: {
        pools: [{
          enabled: true,
          url: 'stratum+tcp://litecoinpool.org:3333',
          username: 'futurebit.1',
          password: 'x',
          proxy: null
        }],
        minerMode: 'eco', // eco | turbo | custom
        voltage: 0.5,
        frequency: 450,
        fan: -1, // -1 = auto, any other value between 0-100 = manual
        connectedWifi: 'ssid', // ssid name or false
        leftSidebarVisibility: true,
        leftSidebarExtended: true,
        rightSidebarVisibility: false,
        temperatureUnit: 'f' // c = celsius, f = fahrenheit
      },
      changeOption: this.changeOption
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