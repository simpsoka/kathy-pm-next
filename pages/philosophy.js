import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';

// Removed: import Markdown from '../data/philosophy.mdx';

export default function PhilosophyPage({ source }) { // Renamed from Philosophy to PhilosophyPage
  return (
    <article className="prose md:prose-xl dark:prose-dark dark:bg-gray-800 bg-white">
      {/* Replaced Markdown component with MDXRemote */}
      <MDXRemote {...source} />
    </article>
  );
}

export async function getStaticProps() {
  // Construct the absolute path to the MDX file
  const filePath = path.join(process.cwd(), 'data', 'philosophy.mdx');
  // Read the file content
  const source = fs.readFileSync(filePath, 'utf8');

  // Serialize the MDX content
  const mdxSource = await serialize(source);

  // Return the serialized content as props
  return {
    props: {
      source: mdxSource,
    },
  };
}
