// @ts-check
import { themes as prismThemes } from "prism-react-renderer";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "eliza",
  tagline: "The flexible, scalable AI agent for everyone",
  favicon: "img/favicon.ico",
 
  // GitHub Pages Configuration
  url: "https://ai16z.github.io",
  baseUrl: "/eliza/",
  organizationName: "ai16z",
  projectName: "eliza",
  deploymentBranch: "gh-pages",
  trailingSlash: true,
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
  ],
  plugins: [
  [
    "docusaurus-plugin-typedoc",
    {
      entryPoints: ["../packages/core/src/index.ts"],
      tsconfig: "../packages/core/tsconfig.json",
      out: "./api",
      skipErrorChecking: true,
      excludeExternals: false,
      excludeProtected: false,
      excludePrivate: true,
      excludeNotDocumented: false,
      cleanOutputDir: true,
      hideGenerator: true,
      exclude: [
        "**/_media/**",
        "**/node_modules/@types/node/events.d.ts",
        "**/dist/**"
      ],
      plugin: ['typedoc-plugin-markdown'],
      disableSources: false,
      excludeInternal: false, // Instead of stripInternal
      watch: false,
      preserveWatchOutput: false,
      validation: {
        notExported: false,
        invalidLink: false,
        notDocumented: false
      },
      // Add these to handle markdown formatting
      gitRevision: 'main',
      readme: 'none',
      treatWarningsAsErrors: false, // Add this to prevent warnings from failing build
      treatValidationWarningsAsErrors: false, // Add this too
    },
  ],
    require.resolve("docusaurus-lunr-search"),
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        path: "api",
        routeBasePath: "api",
        sidebarPath: "./sidebars.api.js",
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/ai16z/eliza/tree/main/docs/",
          routeBasePath: "docs",
          exclude: ["**/_media/**"],  // Add exclude pattern here too
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Rest of themeConfig remains the same
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "eliza",
        logo: {
          alt: "Eliza Logo",
          src: "img/favicon.ico",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            type: "doc",
            docsPluginId: "api",
            position: "left",
            label: "API",
            docId: "index",
          },
          {
            href: "https://github.com/ai16z/eliza",
            label: "GitHub",
            position: "right",
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { 
                label: 'General',
                href: './'
              },
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/NQHKW7US'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/pmairca'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ai16z/eliza'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ai16z.ai`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    }),
};
export default config;
