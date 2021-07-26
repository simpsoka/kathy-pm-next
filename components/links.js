import publications from '../data/publications';
import talks from '../data/talks';

export default function Shipped() {
  return (
    <div id="links" className="pt-8 mt-8">
      <div className="mx-auto leading-4 text-gray-800">
        <h2 className="mb-2 text-2xl font-semibold leading-7 text-gray-900 dark:text-gray-200">
          Publications
        </h2>
        <ul className="ml-5 mt-10 list-disc dark:text-gray-600">
          {publications.map((p) => (
            <li key={p.title} className="py-1">
              <a href={p.url} className="text-purple-600 underline cursor-pointer hover:text-pink-600 text-lg break-words dark:text-purple-400 dark:hover:text-pink-400" target="_blank" rel="noopener">{p.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-8 leading-7 text-gray-800">
        <h2 className="mb-2 text-2xl font-semibold leading-7 text-gray-900 dark:text-gray-200">
          Talks
        </h2>
        <ul className="ml-5 mt-10 list-disc dark:text-gray-600">
          {talks.map((t) => (
            <li key={t.title} className="py-1">
              <a href={t.url} className="text-purple-600 dark:text-purple-400 underline cursor-pointer hover:text-pink-600 text-lg break-words dark:hover:text-pink-400" target="_blank" rel="noopener">{t.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
