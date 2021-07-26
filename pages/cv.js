import Markdown from '../data/cv.mdx';

export default function Resume() {
  return (
    <article className="prose md:prose-xl dark:prose-dark">
      <Markdown />
    </article>
  );
}
