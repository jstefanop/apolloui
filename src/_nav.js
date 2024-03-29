export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: 'fa fa-cog'
    },
    {
      name: 'Pools',
      url: '/pools',
      icon: 'fa fa-database'
    },
    {
      name: 'Miner',
      icon: 'fa fa-hdd',
      children: [{
        name: 'Start',
        url: '/miner/start',
        icon: 'fa fa-play',
      }, {
        name: 'Stop',
        url: '/miner/stop',
        icon: 'fa fa-stop',
      }, {
        name: 'Restart',
        url: '/miner/restart',
        icon: 'fa fa-redo',
      }]
    },
    {
      divider: true,
    },
    {
      name: 'System',
      icon: 'fa fa-server',
      children: [{
        name: 'Reboot',
        url: '/mcu/reboot',
        icon: 'fa fa-spinner',
      }, {
        name: 'Shutdown',
        url: '/mcu/shutdown',
        icon: 'fa fa-power-off',
      }]
    },
    {
      name: 'Logout',
      url: '/logout',
      icon: 'fa fa-sign-out-alt',
      class: 'mt-auto',
      variant: 'info',
    },
  ],
};
