// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const CodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "KVIB",
  tagline: "Kartverkets designsystem",
  url: "https://kartverket.github.io/",
  baseUrl: "/kvib/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  staticDirectories: ["src/js", "static"],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kartverket", // Usually your GitHub org/user name.
  projectName: "kvib", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "no",
    locales: ["no"],
  },

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: false,
          blogTitle: "KVIB Versjoner",
          blogDescription: "En oversikt over versjoner av KVIB",
          postsPerPage: "ALL",
          blogSidebarTitle: "Alle versjoner",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "5F5HK7A36S",

        // Public API key: it is safe to commit it
        apiKey: "13e6147634622624bf57712cbc4e9c8d",

        indexName: "kvib",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      metadata: [
        {
          name: "color-scheme",
          content: "light only",
        },
      ],
      navbar: {
        logo: {
          alt: "Kartverket logo",
          src: "img/logo/kvib_logo.svg",
          // href: 'https://kartverket.github.io/kvib/'
        },
        items: [
          {
            type: "doc",
            docId: "omKvib/infoKvibID",
            position: "right",
            label: "Kom i gang",
          },
          {
            to: "designsystem/Komponenter",
            position: "right",
            label: "Komponenter",
          },
          {
            to: "designsystem/designTokens",
            position: "right",
            label: "Tokens",
          },
          {
            to: "designsystems/uu",
            position: "right",
            label: "Universell utforming",
          },
          {
            to: "blog",
            label: "Versjoner",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Kartverket KVIB Logo",
          src: "img/logo/kartverket_liggende.png",
        },
        links: [
          {
            title: "Nyttige sider",
            items: [
              {
                label: "Om KVIB",
                to: "/omkvib",
              },
              {
                label: "Installasjon",
                to: "/omKvib/implementering",
              },
              {
                label: "Utvide KVIB",
                to: "/utvideKvib",
              },
            ],
          },
          {
            title: "GitHub",
            items: [
              {
                label: "KVIB",
                href: "https://github.com/kartverket/kvib",
              },
            ],
          },
          {
            title: "Kontakt",
            items: [
              {
                label: "#gen-kvib på slack",
                href: "https://slack.com/app_redirect?channel=gen-kvib",
              },
              {
                label: "Send oss en epost",
                href: "mailto:kvib-feedbacks-aaaahwh252gnftmofucpaa47ca@kartverketgroup.slack.com?subject=KVIB Feedback",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} KVIB.`,
      },
      prism: {
        theme: CodeTheme,
      },
    }),
};

module.exports = config;
