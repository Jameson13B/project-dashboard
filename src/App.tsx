import scorekeeper from './assets/scorekeeper.png'
import vault from './assets/vault.png'
import gilluly from './assets/gilluly.png'
import brewstudio from './assets/BrewStudio.png'
import './App.css'
import { LinkRow } from './LinkRow'

const data = [
  {
    name: 'Score Keeper',
    description: 'Keep score for your game nights.',
    screenshot: scorekeeper,
    technologies: 'React, Chakra UI, Firebase',
    link: 'https://scorekeeper.jamesonb.com/',
  },
  {
    name: 'Vault Game',
    description: 'Bank as much money as you can.',
    screenshot: vault,
    technologies: 'React, TypeScript',
    link: 'https://vault.jamesonb.com/',
  },
  {
    name: 'Atomic10 Brew Studio',
    description: 'See the current and future home brews.',
    screenshot: brewstudio,
    technologies: 'React, Firebase, TailwindCSS',
    link: 'https://brews.atomic10.studio',
  },
  {
    name: 'Gilluly Planner',
    description: 'Ensure everyone has what they need.',
    screenshot: gilluly,
    technologies: 'React, Styled Components, Firebase',
    link: 'https://gilluly.jamesonb.com/',
  },
]

function App() {
  return (
    <>
      <h1
        style={{
          fontWeight: 'bold',
          fontFamily: 'Plus Jakarta Sans Variable',
        }}
      >
        Jameson's Projects
      </h1>
      {data.map((project) => (
        <LinkRow project={project} key={project.name} />
      ))}
    </>
  )
}

export default App
