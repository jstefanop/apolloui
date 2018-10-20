export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'success',
        text: 'ONLINE',
      },
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: 'fa fa-cog '
    },
    {
      name: 'Miner',
      icon: 'fa fa-hdd',
      children: [{
        name: 'Start',
        url: '/theme/colors',
        icon: 'fa fa-play',
      }, {
        name: 'Stop',
        url: '/theme/colors',
        icon: 'fa fa-stop',
      }, {
        name: 'Restart',
        url: '/theme/colors',
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
        url: '/theme/colors',
        icon: 'fa fa-spinner',
      }, {
        name: 'Shutdown',
        url: '/theme/colors',
        icon: 'fa fa-power-off',
      }]
    }
  ],
};
