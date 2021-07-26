import services from '../data/contact.json';
import { useEffect } from 'react'

export default function Contact() {

  useEffect(() => {
    document.querySelector('video').playbackRate = 0.3;
  }, [])

  const greeting = () => {
    const greetings = ['Hi', 'Hola', 'Aloha', "Let's Collaborate!", 'Bonjour', "What's Up", 'Hey', 'Buenos Días', 'Guten Tag', 'Schöner Code' ]
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  return (
    <>
      <h2 className="lg:text-4xl mt-2 text-2xl font-extrabold text-gray-900 dark:text-gray-200">{`Say ${greeting()} 👋`}</h2>
      <p className="my-2 tracking-normal leading-normal text-xl dark:text-gray-400">
        No really. I <i>love</i> talking with anyone in the dev tools space. Feel free to reach me on the following:
      </p>
      <div className="relative pb-20">
        <video preload="true" autoPlay muted loop playsInline className="w-full my-10">
          <source src='/videos/clip-fast-square-compressed.mp4' type="video/mp4" />
        </video>
        <ul className="absolute lg:top-20 top-0 flex flex-row flex-wrap left-0 w-full" style={{marginTop: '50%'}}>
          {services.map((s, idx) => (
            <li >
              <a className="text-display p-5 m-2 lg:mix-blend-multiply lg:bg-gray-700 bg-gray-900 block hover:mix-blend-normal hover:bg-gray-900" href={s.url} target="_blank" rel="noopener">
                <span className="text-s text-purple-400 block">{s.title}</span>
                <strong className="text-2xl text-white block">{s.name}</strong>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
