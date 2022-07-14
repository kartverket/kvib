// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KVIB Styleguides',
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
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English',
      },
    },
  },

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
        // whether to index docs pages
        indexDocs: true,
        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 0,

        // whether to index blog pages
        indexBlog: true,

        // whether to index static pages
        // /404.html is never indexed
        indexPages: false,

        // language of your documentation, see next section
        language: "en",

        // setting this to "none" will prevent the default CSS to be included. The default CSS
        // comes from autocomplete-theme-classic, which you can read more about here:
        // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
        // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
        // overwrites with `!important`, because they might otherwise not be applied as expected. See the
        // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
        // style: undefined,

        // The maximum number of search results shown to the user. This does _not_ affect performance of
        // searches, but simply does not display additional search results that have been found.
        maxSearchResults: 8,
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
    },
    {
      href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
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
          customCss: require.resolve('./src/docusaurus_custom_css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: 'light',
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
        navbar: {
          logo: {
            alt: 'Kartverket logo',
            src: 'img/logo/kartverket_liggende.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'omKvib/infoKvibID',
              position: 'left',
              label: 'Om Kvib',
            },
            {
              type: 'doc',
              docId: 'designsystems/uuID',
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
                  label: 'KVIB Figma',
                  to: '/',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Stack Overflow',
                  href: '#',
                },
                {
                  label: 'Discord',
                  href: '#',
                },
                {
                  label: 'Twitter',
                  href: '#',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'GitHub',
                  href: '#',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} KVIB-Kartverket.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,

        },
      }),
};

module.exports = config;
