import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/blog');

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
};

export type Post = PostMeta & { content: string };

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx'));
  return files
    .map(f => {
      const slug = f.replace(/\.mdx$/, '');
      const { data } = matter(fs.readFileSync(path.join(CONTENT_DIR, f), 'utf8'));
      return { slug, ...(data as Omit<PostMeta, 'slug'>) };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, 'utf8'));
  return { slug, content, ...(data as Omit<PostMeta, 'slug'>) };
}

export function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}
