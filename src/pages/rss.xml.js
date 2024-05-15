
import rss from '@astrojs/rss';

export const GET = async(context) => {
  const postImportResult = import.meta.glob('./post/**/*.mdx', { eager: true });
  const posts = Object.values(postImportResult);
  console.log(posts[0].body);
  return rss({
    title: 'DevMohib’s Blog',
    description: 'An RSS feed to all my blogs',
    site:  context.url.origin,
    items : posts.map(post => ({
      title : post.frontmatter.title,
      pubDate : post.frontmatter.pubDate,
      description: post.frontmatter.description,
      link : `${context.url.origin}${post.url}`,
      author : "Muhabbat Ali",
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}

