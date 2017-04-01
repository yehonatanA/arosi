export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0,
            roles: ["AccountHolder", "Merchant", "Supervisor"]
          }
        }
      },
      {
        path: 'admin-interface',
        data: {
          menu: {
            title: 'Admin Interface',
            icon: 'ion-android-cart',
            selected: false,
            expanded: false,
            order: 10,
            roles: ["AccountHolder", "Merchant", "Supervisor"]
          }
        },
        children: [{
          path: 'network-details',
          data: {
            menu: {
              title: 'Network details',
              roles: ["AccountHolder", "Merchant", "Supervisor"],
            }
          }
        },
        {
          path: 'sales-point',
          data: {
            menu: {
              title: 'Sales point ',
              roles: ["AccountHolder", "Merchant", "Supervisor"],
            }
          }
        },
        {
          path: 'employees',
          data: {
            menu: {
              title: 'Employees',
              roles: ["AccountHolder", "Merchant", "Supervisor"],
            }
          }
        }]
      },
      {
        path: 'prizes',
        data: {
          menu: {
            title: 'Prizes',
            icon: 'ion-cash',
            selected: false,
            expanded: false,
            order: 20,
            roles: ["AccountHolder", "Merchant", "Supervisor"]
          }
        },
        children: [{
          path: 'surprize',
          data: {
            menu: {
              title: 'Surprize',
              roles: ["AccountHolder", "Merchant", "Supervisor"],
            }
          }
        },
        {
          path: 'weekly-prize',
          data: {
            menu: {
              title: 'Weekly prize',
              roles: ["AccountHolder", "Merchant", "Supervisor"],
            }
          }
        }]
      }, {
        path: 'calls-messaging',
        data: {
          menu: {
            title: 'Calls & Messaging',
            icon: 'ion-speedometer',
            selected: false,
            expanded: false,
            order: 30,
            roles: ["AccountHolder", "Merchant", "Supervisor"]
          }
        }
      }, {
        path: 'users-managment',
        data: {
          menu: {
            title: 'Users management',
            icon: 'ion-person-stalker',
            selected: false,
            expanded: false,
            order: 40,
            roles: ["AccountHolder", "Merchant", "Supervisor"]
          }
        }
      }, {
        path: 'ewallet',
        data: {
          menu: {
            title: 'E-Wallet top up',
            icon: 'ion-bag',
            selected: false,
            expanded: false,
            order: 50,
            roles: ["AccountHolder", "Merchant", "Supervisor"]
          }
        }
      },{
        path: 'products',
        data: {
          menu: {
            title: 'Products',
            icon: 'ion-ios-pricetags',
            selected: false,
            expanded: false,
            order: 60,
            roles: ["AccountHolder", "Merchant", "Supervisor"]
          }
        }
      }
    ]
  }
];
