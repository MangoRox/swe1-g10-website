import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SWE Group 10 Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Details", link: "/details/background" },
    ],

    sidebar: {
      "/details/": [
        {
          text: "Project Details",
          items: [
            {
              items: [
                { text: "Background", link: "/details/background" },
                { text: "Motivation", link: "/details/motivation" },
                { text: "Authors",    link: "/details/people"}
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
});
