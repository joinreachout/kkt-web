import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('insights');
  const visible = posts
    .filter((p) => p.data.draft !== true)
    .sort((a, b) => +new Date(b.data.publishedAt) - +new Date(a.data.publishedAt));

  return rss({
    title: 'KKT — Insights',
    description:
      'Working in Public — notes from inside KKT engagements. Two named authors, one post a month.',
    site: context.site!,
    items: visible.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishedAt),
      description: post.data.summary ?? '',
      link: `/insights/${post.id}/`,
      author: post.data.author,
    })),
    customData: '<language>en-us</language>',
  });
}
