import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SWE Group 10 Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Download", link: "/download/" },
      { text: "About", link: "/about/background" },

    ],

    sidebar: {
      "/about/": [
        {
          text: "",
          base: "/about/",
          items: [
            {
              items: [
                { text: "Background", link: "/background" },
                { text: "Motivation", link: "/motivation" },
                { text: "Authors",    link: "/people"}
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }, // change this later
    ],
  },
  base: "/swe1-g10-website/",
});
