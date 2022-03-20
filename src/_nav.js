export default {
  items: [
    {
      name: 'Miner',
      url: '/miner',
      icon: 'fa fa-hdd',
      children: [
        {
          name: 'Dashboard',
          url: '/miner',
          icon: 'icon-speedometer'
        },
        {
          name: 'Start',
          url: '/miner/start',
          icon: 'fa fa-play'
        },
        {
          name: 'Stop',
          url: '/miner/stop',
          icon: 'fa fa-stop'
        },
        {
          name: 'Restart',
          url: '/miner/restart',
          icon: 'fa fa-redo'
        }
      ]
    },
    {
      name: 'Node',
      url: '/node',
      icon: 'fa fa-network-wired',
      children: [
        {
          name: 'Dashboard',
          url: '/node',
          icon: 'icon-speedometer'
        },
        {
          name: 'Start',
          url: '/node/start',
          icon: 'fa fa-play'
        },
        {
          name: 'Stop',
          url: '/node/stop',
          icon: 'fa fa-stop'
        }
      ]
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
      divider: true
    },
    {
      name: 'System',
      icon: 'fa fa-server',
      children: [{
        name: 'Reboot',
        url: '/mcu/reboot',
        icon: 'fa fa-spinner'
      }, {
        name: 'Shutdown',
        url: '/mcu/shutdown',
        icon: 'fa fa-power-off'
      }]
    },
    {
      name: 'Logout',
      url: '/logout',
      icon: 'fa fa-sign-out-alt',
      class: 'mt-auto',
      variant: 'info'
    }
  ]
};
