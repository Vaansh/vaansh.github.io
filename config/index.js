module.exports = {
  //-- SITE SETTINGS -----
  author: "@vaanshlakhwara",
  siteTitle: "Vaansh Lakhwara Portfolio",
  siteShortTitle: "vl.", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Hi there! I'm Vaansh Lakhwara, a student and software developer based in Canada.",
  siteUrl: "https://vaansh.dev",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Vaansh Lakhwara", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  useCookieBar: true, // If you use Google Analytics and want to be GDPR-compliant, set it to true
  googleAnalyticsTrackingId: "UA-254798345-1",

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#CDF3E1",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https://techcrunch.com/feed/",
  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    // {
    //   name: "Xing",
    //   url: "https://www.xing.com/profile/Konstantin_Muenster",
    // },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/vaansh/",
    },
    {
      name: "Github",
      url: "https://github.com/Vaansh",
    },
    {
      name: "Mail",
      url: "mailto:vaansh.lakhwara@mail.concordia.ca",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Work",
        url: "/#work",
      },
      {
        name: "Contact",
        url: "/#contact",
      },
    ],
    button: {
      useFileName: true,
      name: "Resume",
      fileName: "resume.pdf",
      url: "",
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
  ],
}
