import Image from 'next/image';
import recommendations from '../data/recommendations';

export default function Recommendations() {
  return (
    <div
      id="recs"
      className="pt-8 mt-8"
    >
      <div className="mx-auto leading-4 text-gray-800">
        <h2 className="mb-2 text-2xl font-semibold leading-7 text-gray-900 dark:text-gray-200">
          Recommendations
        </h2>
        <ul>
          {recommendations.map((rec) => (
            <li key={rec.full_name} className="flex my-16 mx-0">
              <div className="flex mr-6 lg:h-20 lg:w-20 lg:min-h-[80px] lg:min-w-[80px] w-10 h-10 min-h-[40px] min-w-[40px] ">
                <Image
                  src={rec.avatar_url}
                  alt={rec.full_name}
                  height={80}
                  width={80}
                  className="rounded-full"
                />
              </div>
              <div>
                <strong className="block mb-2 text-xl font-bold dark:text-gray-200">
                  {rec.full_name}
                </strong>
                <span className="block mb-6  dark:text-gray-400">{rec.role}</span>
                <p className="mb-6 leading-6 text-gray-700 dark:text-gray-400 dark:bg-gray-800 bg-white">{rec.body}</p>
                <span className="text-md text-gray-500 dark:text-gray-700">
                  {rec.published_date_text}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
