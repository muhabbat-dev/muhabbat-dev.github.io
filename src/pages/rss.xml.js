
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export const GET = async(context) => {
  const allBlog = await getCollection("posts")

  return rss({
    title: 'DevMohib',
    description: 'Programming and Tech blogs',
    site:  context.url.origin,
    xmlns: {
      media: "http://search.yahoo.com/mrss/",
      atom: "http://www.w3.org/2005/Atom",
      webfeeds : "http://webfeeds.org/rss/1.0"
    },
    items : allBlog.map(blog => ({
      title : blog.data.title,
      pubDate : blog.data.pubDate,
      description: blog.data.description,
      link : `${context.url.origin}/blog/${blog.slug}`,
      author : "Muhabbat Ali",
      content : sanitizeHtml(parser.render(blog.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),
      enclosure: {
      length: 0,
      type :`image/${blog.data.image.split(".")[1]}`,
      url: `${context.url.origin}${blog.data.image}`
    },
      customData: `<media:content
          type="image/${blog.data.image.split(".")[1]}"
          medium="image"
          width="400"
          height="300"
          url="${context.url.origin}${blog.data.image}" />
          <webfeeds:cover image="${context.url.origin}${blog.data.image}" />
          `,

    })),
    customData: `
    <language>en-us</language>
    <link href="${context.url.origin}/rss.xml" rel="alternate" type="application/rss+xml" title="DevMohib" />
    <webfeeds:cover image="${context.url.origin}/assets/images/about.jpg" />
    <webfeeds:accentColor>00FF00</webfeeds:accentColor>
    <webfeeds:logo>${context.url.origin}/favicon.ico</webfeeds:logo>
    `,
  });
}

