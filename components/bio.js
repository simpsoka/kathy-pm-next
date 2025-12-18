import Image from 'next/image';
import avatar from '../public/images/avatar-compressed.webp';

export default function Bio() {
  // TODO: Refactor hardcoded links (e.g., to Google, CV, etc.) into a configuration or data file, similar to how `publications` and `talks` are handled.
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="lg:w-28 w-20">
          <Image src={avatar} alt="Kathy Korevec" className="rounded-full" />
        </div>
        <h1 className="my-5 lg:text-5xl text-3xl font-extrabold text-gray-900 dark:text-gray-200">
          Kathy Korevec
        </h1>
        <h2 className="mb-10 lg:text-2xl text-xl font-semibold leading-4 text-gray-900 dark:text-gray-600">
          Product Manager
        </h2>
      </div>
      <p className="tracking-normal leading-normal lg:p-0 text-xl px-2 dark:text-gray-400  dark:bg-gray-800 bg-white">
        Hi! My name is Kathy. I’m from Alaska, and I’m a product manager in San
        Francisco. I believe all great products
        start with a conversation. I've taken products
        from early prototypes to launch day consistently for the
        <a href="/cv"
        className="mx-1 leading-8 text-purple-600 dark:text-purple-400 underline cursor-pointer hover:text-pink-600 dark:hover:text-pink-400"
        >
        past 15 years.
        </a>
        Through my successes (and failures) I've developed a
        <a
          href="/philosophy"
          className="mx-1 leading-8 text-purple-600 dark:text-purple-400 underline cursor-pointer hover:text-pink-600 dark:hover:text-pink-400"
        >
          philosophy
        </a>
        about the path we take to make products that shine. My process thrives
        on the delicate dance between data driven design, business goals, and
        user feedback. I've worked with a lot of
        <a
          href="#recs"
          className="mx-1 leading-8 text-purple-600 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 underline cursor-pointer"
        >
          great people
        </a>
        through the years. Now I work at
        <a
          href="https://labs.google/"
          className="mx-1 leading-8 text-purple-600 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 underline cursor-pointer"
        >Google</a>

        on Code AI and AI developer tools.
        <a
          href="/contact"
          className="mx-1 leading-8 text-purple-600 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 underline cursor-pointer"
        >
          Say hi
        </a>
        👋😎.
      </p>
      <p className="text-gray-500 mt-4">
        Last revised
        <a
          href="https://gist.github.com/b35fcde405ddbf4b9ab1"
          className="mx-1 leading-6 underline cursor-pointer hover:text-pink-600 dark:hover:text-pink-400"
        >
          <abbr title="2021-06-27T14:07:36Z" className="dark:text-gray-600">
            Sunday, June 27th 2021
          </abbr>
        </a>
      </p>
    </>
  );
}
