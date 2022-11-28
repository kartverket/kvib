import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/kvib/__docusaurus/debug',
    component: ComponentCreator('/kvib/__docusaurus/debug', '1fa'),
    exact: true
  },
  {
    path: '/kvib/__docusaurus/debug/config',
    component: ComponentCreator('/kvib/__docusaurus/debug/config', 'd60'),
    exact: true
  },
  {
    path: '/kvib/__docusaurus/debug/content',
    component: ComponentCreator('/kvib/__docusaurus/debug/content', 'db8'),
    exact: true
  },
  {
    path: '/kvib/__docusaurus/debug/globalData',
    component: ComponentCreator('/kvib/__docusaurus/debug/globalData', '11d'),
    exact: true
  },
  {
    path: '/kvib/__docusaurus/debug/metadata',
    component: ComponentCreator('/kvib/__docusaurus/debug/metadata', '41f'),
    exact: true
  },
  {
    path: '/kvib/__docusaurus/debug/registry',
    component: ComponentCreator('/kvib/__docusaurus/debug/registry', '2d7'),
    exact: true
  },
  {
    path: '/kvib/__docusaurus/debug/routes',
    component: ComponentCreator('/kvib/__docusaurus/debug/routes', '411'),
    exact: true
  },
  {
    path: '/kvib/blog',
    component: ComponentCreator('/kvib/blog', '4b1'),
    exact: true
  },
  {
    path: '/kvib/blog/2022/07/29/version-[1.0.0]',
    component: ComponentCreator('/kvib/blog/2022/07/29/version-[1.0.0]', 'd81'),
    exact: true
  },
  {
    path: '/kvib/blog/2022/08/03/version-[1.0.1]',
    component: ComponentCreator('/kvib/blog/2022/08/03/version-[1.0.1]', '32f'),
    exact: true
  },
  {
    path: '/kvib/blog/2022/08/04/version-[1.0.2]',
    component: ComponentCreator('/kvib/blog/2022/08/04/version-[1.0.2]', '7c6'),
    exact: true
  },
  {
    path: '/kvib/blog/2022/08/09/version-[1.0.3]',
    component: ComponentCreator('/kvib/blog/2022/08/09/version-[1.0.3]', '17c'),
    exact: true
  },
  {
    path: '/kvib/blog/2022/08/10/version-[1.0.4]',
    component: ComponentCreator('/kvib/blog/2022/08/10/version-[1.0.4]', 'a91'),
    exact: true
  },
  {
    path: '/kvib/blog/2022/08/22/version-[1.0.5]',
    component: ComponentCreator('/kvib/blog/2022/08/22/version-[1.0.5]', 'ca9'),
    exact: true
  },
  {
    path: '/kvib/blog/2022/09/02/version-[1.0.23]',
    component: ComponentCreator('/kvib/blog/2022/09/02/version-[1.0.23]', '6d2'),
    exact: true
  },
  {
    path: '/kvib/blog/2022/09/08/version-[1.0.25]',
    component: ComponentCreator('/kvib/blog/2022/09/08/version-[1.0.25]', '553'),
    exact: true
  },
  {
    path: '/kvib/blog/2022/09/16/version-[1.0.28]',
    component: ComponentCreator('/kvib/blog/2022/09/16/version-[1.0.28]', 'e53'),
    exact: true
  },
  {
    path: '/kvib/blog/2022/09/23/version-[1.0.29]',
    component: ComponentCreator('/kvib/blog/2022/09/23/version-[1.0.29]', '414'),
    exact: true
  },
  {
    path: '/kvib/blog/2022/11/07/version-[1.0.32]',
    component: ComponentCreator('/kvib/blog/2022/11/07/version-[1.0.32]', 'c51'),
    exact: true
  },
  {
    path: '/kvib/blog/archive',
    component: ComponentCreator('/kvib/blog/archive', '164'),
    exact: true
  },
  {
    path: '/kvib/blog/tags',
    component: ComponentCreator('/kvib/blog/tags', '7d5'),
    exact: true
  },
  {
    path: '/kvib/blog/tags/avmerkingsbokser',
    component: ComponentCreator('/kvib/blog/tags/avmerkingsbokser', '3ac'),
    exact: true
  },
  {
    path: '/kvib/blog/tags/dokumentasjon',
    component: ComponentCreator('/kvib/blog/tags/dokumentasjon', 'b7c'),
    exact: true
  },
  {
    path: '/kvib/blog/tags/inputfelt',
    component: ComponentCreator('/kvib/blog/tags/inputfelt', '817'),
    exact: true
  },
  {
    path: '/kvib/blog/tags/knapper',
    component: ComponentCreator('/kvib/blog/tags/knapper', 'f66'),
    exact: true
  },
  {
    path: '/kvib/blog/tags/kvib',
    component: ComponentCreator('/kvib/blog/tags/kvib', '4d6'),
    exact: true
  },
  {
    path: '/kvib/blog/tags/navigasjon',
    component: ComponentCreator('/kvib/blog/tags/navigasjon', '4ac'),
    exact: true
  },
  {
    path: '/kvib/blog/tags/nedtrekksmeny',
    component: ComponentCreator('/kvib/blog/tags/nedtrekksmeny', 'b62'),
    exact: true
  },
  {
    path: '/kvib/blog/tags/slider-knapp',
    component: ComponentCreator('/kvib/blog/tags/slider-knapp', '05d'),
    exact: true
  },
  {
    path: '/kvib/blog/tags/sokefelt',
    component: ComponentCreator('/kvib/blog/tags/sokefelt', '5b6'),
    exact: true
  },
  {
    path: '/kvib/blog/tags/utvidbar-panel',
    component: ComponentCreator('/kvib/blog/tags/utvidbar-panel', 'fde'),
    exact: true
  },
  {
    path: '/kvib/blog/tags/utvidbart-panel',
    component: ComponentCreator('/kvib/blog/tags/utvidbart-panel', '65f'),
    exact: true
  },
  {
    path: '/kvib/search',
    component: ComponentCreator('/kvib/search', 'a2a'),
    exact: true
  },
  {
    path: '/kvib/',
    component: ComponentCreator('/kvib/', '0be'),
    exact: true
  },
  {
    path: '/kvib/',
    component: ComponentCreator('/kvib/', '745'),
    routes: [
      {
        path: '/kvib/designsystem/designTokens',
        component: ComponentCreator('/kvib/designsystem/designTokens', '0fe'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystem/Komponenter',
        component: ComponentCreator('/kvib/designsystem/Komponenter', '0aa'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystem/komponenter/checkbox',
        component: ComponentCreator('/kvib/designsystem/komponenter/checkbox', '841'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystem/komponenter/grid',
        component: ComponentCreator('/kvib/designsystem/komponenter/grid', '444'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystem/komponenter/inputfelt',
        component: ComponentCreator('/kvib/designsystem/komponenter/inputfelt', '100'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystem/komponenter/logo',
        component: ComponentCreator('/kvib/designsystem/komponenter/logo', 'd80'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystem/komponenter/navigasjon',
        component: ComponentCreator('/kvib/designsystem/komponenter/navigasjon', '55b'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystem/komponenter/nedtrekksmeny',
        component: ComponentCreator('/kvib/designsystem/komponenter/nedtrekksmeny', '456'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystem/komponenter/radiobutton',
        component: ComponentCreator('/kvib/designsystem/komponenter/radiobutton', '46a'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystem/komponenter/sideelementer',
        component: ComponentCreator('/kvib/designsystem/komponenter/sideelementer', 'a0e'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystem/komponenter/slider',
        component: ComponentCreator('/kvib/designsystem/komponenter/slider', '0bb'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystem/komponenter/søkefelt',
        component: ComponentCreator('/kvib/designsystem/komponenter/søkefelt', '597'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystem/komponenter/table',
        component: ComponentCreator('/kvib/designsystem/komponenter/table', 'c0f'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystem/komponenter/utvidbar-panel',
        component: ComponentCreator('/kvib/designsystem/komponenter/utvidbar-panel', '7e4'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystems/designtokens/colors',
        component: ComponentCreator('/kvib/designsystems/designtokens/colors', 'ccf'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystems/designTokens/designsystems/designtokens/ikoner',
        component: ComponentCreator('/kvib/designsystems/designTokens/designsystems/designtokens/ikoner', 'c60'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystems/designtokens/typografi',
        component: ComponentCreator('/kvib/designsystems/designtokens/typografi', '3b7'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystems/Komponenter/Knapper',
        component: ComponentCreator('/kvib/designsystems/Komponenter/Knapper', 'a07'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystems/Komponenter/Knapper/blåknappID',
        component: ComponentCreator('/kvib/designsystems/Komponenter/Knapper/blåknappID', '5f3'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystems/Komponenter/Knapper/disabledknappID',
        component: ComponentCreator('/kvib/designsystems/Komponenter/Knapper/disabledknappID', '24e'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystems/Komponenter/Knapper/grønnknappID',
        component: ComponentCreator('/kvib/designsystems/Komponenter/Knapper/grønnknappID', 'f6e'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystems/Komponenter/Knapper/ikonknappID',
        component: ComponentCreator('/kvib/designsystems/Komponenter/Knapper/ikonknappID', 'f60'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystems/Komponenter/Knapper/toggleSwitchID',
        component: ComponentCreator('/kvib/designsystems/Komponenter/Knapper/toggleSwitchID', '12b'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystems/sizes',
        component: ComponentCreator('/kvib/designsystems/sizes', 'ae6'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystems/tilleggskomponenterID',
        component: ComponentCreator('/kvib/designsystems/tilleggskomponenterID', '7ea'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/designsystems/uu',
        component: ComponentCreator('/kvib/designsystems/uu', 'a23'),
        exact: true,
        sidebar: "designsystemSidebar"
      },
      {
        path: '/kvib/omkvib',
        component: ComponentCreator('/kvib/omkvib', '6af'),
        exact: true,
        sidebar: "OmKvibSidebar"
      },
      {
        path: '/kvib/omKvib/dokumentasjon',
        component: ComponentCreator('/kvib/omKvib/dokumentasjon', '37c'),
        exact: true,
        sidebar: "OmKvibSidebar"
      },
      {
        path: '/kvib/omKvib/implementering',
        component: ComponentCreator('/kvib/omKvib/implementering', 'a32'),
        exact: true,
        sidebar: "OmKvibSidebar"
      },
      {
        path: '/kvib/omKvib/kvalitetskontroll',
        component: ComponentCreator('/kvib/omKvib/kvalitetskontroll', '63a'),
        exact: true,
        sidebar: "OmKvibSidebar"
      },
      {
        path: '/kvib/omKvib/publisering',
        component: ComponentCreator('/kvib/omKvib/publisering', '2fd'),
        exact: true,
        sidebar: "OmKvibSidebar"
      },
      {
        path: '/kvib/omKvib/struktur',
        component: ComponentCreator('/kvib/omKvib/struktur', '339'),
        exact: true,
        sidebar: "OmKvibSidebar"
      },
      {
        path: '/kvib/omKvib/versjon',
        component: ComponentCreator('/kvib/omKvib/versjon', 'ce3'),
        exact: true,
        sidebar: "OmKvibSidebar"
      },
      {
        path: '/kvib/utvideKvib',
        component: ComponentCreator('/kvib/utvideKvib', 'c16'),
        exact: true,
        sidebar: "OmKvibSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
