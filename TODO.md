## New Folder Structure

```bash
src
|-- app
|   |-- pages
|   |   |-- about.tsx
|   |   |-- blogs.tsx
|   |   |-- contact.tsx
|   |   |-- error.tsx
|   |   |-- not-found.tsx
|   |   |-- page.tsx
|   |   `-- work.tsx
|   |-- api
|   |   |-- contact-route.ts
|   |   |-- og-route.tsx
|   |   `-- rss-route.ts
|   `-- layout.tsx
|-- components
|   |-- About
|   |   |-- AboutMe.tsx
|   |   |-- AboutMeBanner.tsx
|   |   |-- AnimeWatchList.tsx
|   |   |-- TechStack.tsx
|   |   |-- Timeline.tsx
|   |-- AnalyticsWrapper.tsx
|   |-- Blogs
|   |   |-- AllBlogs.tsx
|   |   `-- Blog
|   |       |-- PostHeader.tsx
|   |       `-- TwitterCTA.tsx
|   |-- Contact.tsx
|   |-- ExternalLink.tsx
|   |-- Footer.tsx
|   |-- Header.tsx
|   |-- Landing
|   |   |-- FeaturedProjects.tsx
|   |   |-- Hero.tsx
|   |   |-- RecentPost.tsx
|   |   `-- SocialsSideBar.tsx
|   |-- Nav
|   |   |-- Logo.tsx
|   |   |-- MobileNav.tsx
|   |   |-- NavBar.tsx
|   |   `-- NavPopover.tsx
|   |-- SectionHeader.tsx
|   |-- ThemeProvider.tsx
|   |-- ThemeToggler.tsx
|   |-- Work
|   |   |-- OtherProjectCard.tsx
|   |   `-- RecentProjectCard.tsx
|   `-- ui
|       |-- alert.tsx
|       |-- avatar.tsx
|       |-- badge.tsx
|       |-- button.tsx
|       |-- card.tsx
|       |-- dropdown-menu.tsx
|       |-- popover.tsx
|       |-- progress.tsx
|       |-- scroll-area.tsx
|       |-- sheet.tsx
|       |-- skeleton.tsx
|       `-- tooltip.tsx
|-- content
|   `-- blogs
|       `-- hello-world
|           |-- images
|           |   `-- banner.png
|           `-- index.mdx
|-- lib
|   |-- anime.ts
|   |-- config.ts
|   |-- hooks
|   |   `-- use-scroll.ts
|   |-- plugin
|   |   |-- placeholder.ts
|   |   `-- rehype-cl-img.ts
|   |-- time.ts
|   `-- utils.ts
|-- styles
|   `-- globals.css
`-- types
    `-- index.d.ts
```