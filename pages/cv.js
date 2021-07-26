import Markdown from '../data/cv.mdx';

export default function Resume() {
  return (
    <article className="prose md:prose-xl dark:prose-dark dark:bg-gray-800 bg-white">
      <Markdown />
    </article>
  );
}
