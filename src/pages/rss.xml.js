import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: `Muhabbat's Blog`,
    description:
      "A Full Stack Developer loves to write about programming and tech",
    site: context.site,
    items: posts
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/post/${post.slug}`,
      }))
      .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
