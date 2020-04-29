# serverlessdays-virtual

Website for Virtual ServerlessDays

Static site generated using 11ty and nunjucks templates

Templates are in `src/web/_includes`

Content is in `src/web/`. Update the `.md` and `.json` file to update content.

Global Site wide data is in `src/_data`.

- `src/web/_data/event.json` basic information about the event
- `src/web/_data/nav.json` Navigation links for the site. Rendered top and bottom of the site
- `src/web/_data/news.json` Index of blog posts for the site. Used to render the blog post home page
- `src/web/_data/speakers.json` Index of speakers. Used to generate the speaker index page, and speaker component on home page

### Add a Speaker

To add a speaker you need to create a markdown file in `src/web/speakers/` using the name of the speaker (eg `src/web/speakers/emrah.md`) with the following format.

```md
---
layout: speaker.njk
speaker:
    name: Speaker Name
    title: Speaker Job Title
    bio: Speaker Bio
    img: Link to speaker Image
    social:
    -   name: Twitter
        link: Link to speaker twitter profile
        icon: /img/Twitter.svg
    -   name: LinkedIn
        link: Link to speaker LinkedIn profile
        icon: /img/linkedin_white.png
---


## Add Talk Title here

Add talk abstract/description here

```

Put the speaker profile image in `src/web/img`. It needs to be 400x400 pixels.

Update the speaker index at `src/web/_data/speakers.json` by adding an object into the array. The required format of the object is

```json
    {
        "img": "/img/speakerImage.jpg",
        "name": "Speaker Name",
        "link": "/speakers/speakerName"
    }
```


### Local Dev

```
npm run dev
```

Commit to master builds the site. A PR on the repo will generate a deploy preview
