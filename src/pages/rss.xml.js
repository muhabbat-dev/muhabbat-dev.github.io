
import rss from '@astrojs/rss';
import sanitizeHtml from "sanitize-html"

export const GET = async(context) => {
  const postImportResult = import.meta.glob('./post/**/*.mdx', { eager: true });
  const posts = Object.values(postImportResult);
  return rss({
    title: 'DevMohib’s Blog',
    description: 'An RSS feed to all my blogs',
    site:  context.url.origin,
    xmlns: {
      media: "http://search.yahoo.com/mrss/",
      atom: "http://www.w3.org/2005/Atom",
      webfeeds : "http://webfeeds.org/rss/1.0"
    },
    items : posts.map(post => ({
      title : post.frontmatter.title,
      pubDate : post.frontmatter.pubDate,
      description: post.frontmatter.description,
      link : `${context.url.origin}${post.url}`,
      author : "Muhabbat Ali",
      content : sanitizeHtml(`
      <figure>
        <img alt="${post.frontmatter.title}" src="${context.url.origin}${post.frontmatter.image}" />
      </figure>
    `,{
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
    }),
    enclosure: {
      length: 0,
      type :`image/${post.frontmatter.image.split(".")[1]}`,
      url: `${context.url.origin}${post.frontmatter.image}`
    },
      customData: `<media:content
          type="image/${post.frontmatter.image.split(".")[1]}"
          medium="image"
          width="400"
          height="300"
          url="${context.url.origin}${post.frontmatter.image}" />
          <webfeeds:cover image="${context.url.origin}${post.frontmatter.image}" />
          `,
    })),

    customData: `
    <language>en-us</language>
    <atom:link href="${context.url.origin}/rss.xml" rel="self" type="application/rss+xml" />
    `,
  });
}

