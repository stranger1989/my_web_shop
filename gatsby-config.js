require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "my-web-shop",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    "@chakra-ui/gatsby-plugin",
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACEID,
      },
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.0.29",
        publicApiKey: process.env.SNIPCART_PUBLIC_API_KEY, // use public api key here or in environment variable
        defaultLang: "ja",
        currency: "eur",
        openCartOnAdd: false,
        useSideCart: true,
        // be careful with this mode cart. The cart in this mode has a bug of scroll in firefox
        locales: {
          ja: {
            actions: {
              checkout: "Valider le panier",
            },
          },
        },
        templatesUrl:
          "path on your template file. Set file in the static folder, ex: '/snipcart/index.html'",
        // not work on dev. Gatsby not serve html file in dev https://github.com/gatsbyjs/gatsby/issues/13072
        innerHTML: `
            <billing section="bottom">
                <!-- Customization goes here -->
            </billing>`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Noto Sans JP\:100,300,400,500,700,900`, "Cookie"],
        display: "swap",
      },
    },
  ],
}
