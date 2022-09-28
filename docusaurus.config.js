// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const CodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KVIB',
  tagline: 'Styleguides',
  url: 'https://kartverket.github.io/',
  baseUrl: '/kvib/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  staticDirectories: ['src/js', 'static'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kartverket', // Usually your GitHub org/user name.
  projectName: 'kvib', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'no',
    locales: ['no'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: false,
          blogTitle: 'KVIB Versjoner',
          blogDescription: 'En oversikt over versjoner av KVIB',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'Alle versjoner',
          blogSidebarCount:'ALL',

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        algolia: {
          // The application ID provided by Algolia
          appId: '5F5HK7A36S',

          // Public API key: it is safe to commit it
          apiKey: '13e6147634622624bf57712cbc4e9c8d',

          indexName: 'kvib',

          // Optional: see doc section below
          contextualSearch: true,

          // Optional: Algolia search parameters
          searchParameters: {},

          // Optional: path for search page that enabled by default (`false` to disable it)
          searchPagePath: 'search',

        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
        metadata: [{
          name: 'color-scheme',
          content: 'light only'
        }],
        navbar: {
          logo: {
            alt: 'Kartverket logo',
            src: 'img/logo/kvib_logo.svg',
            // href: 'https://kartverket.github.io/kvib/'
          },
          items: [
            {
              type: 'doc',
              docId: 'omKvib/infoKvibID',
              position: 'left',
              label: 'Om KVIB',
            },
            {
              type: 'doc',
              docId: 'designsystems/sizesID',
              position: 'left',
              label: 'Designsystem',
            },

            {to: 'blog', label: 'Versjoner', position: 'left'},

          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Om KVIB',
                  to: '/',
                },
                {
                  label: 'Installasjon',
                  to: '/omKvib/implementering',
                },
                {
                  label: 'Utvide KVIB',
                  to: '/utvideKvib',
                },
              ],
            },
            {
              title: 'GitHub',
              items: [
                {
                  label: 'KVIB',
                  href: 'https://github.com/kartverket/kvib',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Slack',
                  href: '#',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} KVIB.`,
        },
        prism: {
          theme: CodeTheme,

        },
      }),
};

module.exports = config;
