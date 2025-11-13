import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SWE Group 10 Project",
  description: "A website for a math mole-whacking game",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Download", link: "/download/" },
      { text: "Demo", link: "/demo" },
      { text: "Documents & Diagrams" , link: "/documents" },
      { text: "About", link: "/about/authors" },
      { text: "Credits", link: "/credits" },
    ],

    sidebar: {
      "/about/": [
        {
          text: "",
          base: "/about/",
          items: [
            {
              items: [
                { text: "Authors",    link: "/authors"},
                { text: "The Motivation", link: "/motive" }
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
