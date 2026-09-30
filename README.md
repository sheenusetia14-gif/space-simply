# Space, Simply

**Mind-blowing space, explained in 3 minutes.**

This is the website for Space, Simply. It's built with [Astro](https://astro.build), which turns simple text files into a fast website made of plain HTML pages. It has no database and nothing to log in to. Each blog post is one text file.

---

## How to add a new post (the short version)

1. Copy `src/content/blog/what-is-a-black-hole.md` and rename the copy, for example `why-is-mars-red.md`.
   The file name becomes the web address: `why-is-mars-red.md` → `/blog/why-is-mars-red`.
   Use only lowercase letters, numbers and hyphens (-). No spaces.
2. Put the post's picture in `public/images/blog/`, for example `public/images/blog/why-is-mars-red.jpg`.
3. Open your new file and change the details at the top (see below), then write the post.
4. Check it (see "Preview your changes"), then commit and push. That's it. The home page, the blog list and the sitemap all update automatically.

---

## Step 1: The details at the top of the post ("frontmatter")

Every post starts with a block between two `---` lines. It looks like this:

```yaml
---
title: "Why is Mars red?"
description: "Mars looks red because its dust is full of rust. Here's how a whole planet ended up rusty, explained simply."
pubDate: 2026-10-07
topic: "Planets"
heroImage: "/images/blog/why-is-mars-red.jpg"
heroAlt: "A photo of Mars showing its orange-red surface."
sources:
  - title: "NASA Science — Mars"
    url: "https://science.nasa.gov/mars/"
  - "https://www.esa.int/Science_Exploration/Space_Science/Mars_Express"
---
```

What each line means:

| Field | What to write |
| --- | --- |
| `title` | The post's headline. Shown on the page and in Google results. |
| `description` | One or two sentences (under about 160 characters) that sum up the post. Google and WhatsApp/LinkedIn previews show this. |
| `pubDate` | The date it was published, written as `YEAR-MONTH-DAY` (e.g. `2026-10-07`). Posts are sorted newest first by this date. |
| `updatedDate` | *(Optional)* Add this line when you edit a post later, e.g. `updatedDate: 2026-12-01`. It becomes the "Last updated" date. If you leave it out, the publish date is used. |
| `topic` | A short label like `Black holes`, `Planets`, `Stars`, `The Moon`. |
| `heroImage` | The picture's path. It **must** start with `/images/blog/` (don't include the word `public`). |
| `heroAlt` | A short description of the picture for people who can't see it, and for Google. |
| `sources` | The links you used to check your facts. Either `- title: ...` + `url: ...` (nicer) or just `- "https://..."`. At least one is required. |

Tip: keep the quotes `" "` around text. They matter if your text contains a colon (:).

## Step 2: Write the post (the order matters)

Under the second `---`, write your post in plain text using this structure:

```markdown
Mars is red because its surface is covered in rusty dust. The iron in its rocks has reacted with tiny amounts of oxygen over billions of years.

## First heading of the explanation

Normal paragraphs go here. Leave an empty line between paragraphs.
Use **double stars** for bold and *single stars* for italics.

## Another heading

- A bullet point
- Another bullet point

> Mind-blowing fact goes here, as one or two sentences.

## Frequently asked questions

### A question people ask?

The answer, in a sentence or two.

### Another question?

Another answer.
```

The website styles these parts for you:

- **The very first paragraph** is shown in a box labelled **"The short answer"**. Make it your 2-sentence answer.
- **Any line starting with `>`** becomes the orange **"Mind-blowing fact"** box. Don't type the words "Mind-blowing fact" yourself, because the box adds them.
- **`##`** makes a section heading. **`###`** makes a smaller heading, which we use for each FAQ question.
- The **Sources** list and the **"Last updated"** date are added at the bottom automatically from the frontmatter. Don't type them into the post.

## Step 3: The picture

- Put it in `public/images/blog/`.
- Best size: **1200 × 675 pixels** (a 16:9 rectangle). JPG or PNG, ideally under 200 KB (compress it at [squoosh.app](https://squoosh.app)).
- Use a **JPG or PNG** if you want it to appear when the post is shared on WhatsApp, LinkedIn or X. (SVG drawings show on the site, but social apps can't display them, so the site falls back to the default share image.)
- Only use images you're allowed to use. NASA and ESA images are generally free to use with credit.

---

## Preview your changes on your computer

You need [Node.js](https://nodejs.org) version 22.12 or newer installed. Then, in this folder:

```bash
npm install        # only the first time
npm run dev        # opens a live preview at http://localhost:4321
```

Before publishing, check that everything builds:

```bash
npm run build
```

If there's a mistake in a post (like a missing field or a badly written date), this command stops and tells you which file and which line to fix.

---

## Before going live: things to set once

- **Your domain:** open `astro.config.mjs` and change `SITE_URL` (currently `https://spacesimply.in`) to your real address. It's used for Google, the sitemap, robots.txt and share previews.
- **Newsletter:** the signup box is design-only for now. To connect Mailchimp, Kit (ConvertKit), Buttondown, Brevo or similar, follow the three steps at the top of `src/components/NewsletterForm.astro`.
- **Hosting:** the site is plain static files in the `dist/` folder after `npm run build`. Netlify, Vercel, Cloudflare Pages and GitHub Pages all work. Use build command `npm run build` and output folder `dist`.

## What's already set up for Google and AI search

- A unique title and description on every page
- Canonical URLs and clean addresses (e.g. `/blog/what-is-a-black-hole`)
- Open Graph and X/Twitter tags for share previews
- Structured data (JSON-LD): Organization on the home page, Article on each post
- An automatic sitemap at `/sitemap-index.xml`
- `/robots.txt` that allows all crawlers, including Google, Bing and AI search bots (ChatGPT, Claude, Perplexity and others)

## Where things live

```
src/content/blog/       ← your posts (one .md file each)
public/images/blog/     ← post pictures
src/pages/              ← the pages: home, blog list, post template, about
src/components/         ← post card and newsletter box
src/layouts/            ← shared page frame + all SEO tags
src/styles/global.css   ← colours, fonts, spacing
src/consts.ts           ← site name, tagline, description, author
```
