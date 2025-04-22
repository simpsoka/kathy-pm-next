import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';

// Removed: import CV from '../data/cv.mdx';

export default function CVPage({ source }) { // Renamed from Resume to CVPage for clarity
  return (
    <article className="prose md:prose-xl dark:prose-dark dark:bg-gray-800 bg-white">
      {/* Replaced CV component with MDXRemote */}
      <MDXRemote {...source} />
    </article>
  );
}

export async function getStaticProps() {
  // Construct the absolute path to the MDX file
  const filePath = path.join(process.cwd(), 'data', 'cv.mdx');
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
