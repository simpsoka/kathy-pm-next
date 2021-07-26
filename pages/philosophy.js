import Markdown from '../data/philosophy.mdx';

export default function Philosophy() {
  return (
    <article className="prose md:prose-xl dark:prose-dark">
      <Markdown />
    </article>
  );
}
