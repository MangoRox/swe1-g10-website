import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Math Moles",
  description: "A website for a math mole-whacking game",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Download", link: "/download" },
      { text: "Demo", link: "/demo" },
      { text: "Documents & Diagrams" , link: "/documents" },
      { text: "About", link: "/about/authors" },
      { text: "Credits", link: "/credits" },
      { text: "Slides", link: "/MathMolesPresentation.pdf" },
    ],

    sidebar: {
      "/about/": [
        {
          text: "",
          base: "/about/",
          items: [
            {
              text: "About Us",
              items: [
                { text: "Authors",    link: "/authors"},
              ],
            },
            // {
            // text: "Project Info",
            // items: [
            //   { text: "Description", link: "/description" },
            //   { text: "Motivation", link: "/motive" }
            // ],
            // }
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/GJ-Repo/SWEGroup10" }, // change this later
    ],
  },
  base: "/swe1-g10-website/",
});
