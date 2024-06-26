import scorekeeper from './assets/scorekeeper.png'
import vault from './assets/vault.png'
import gilluly from './assets/gilluly.png'
import './App.css'
import { LinkRow } from './LinkRow'

const data = [
  {
    name: 'Score Keeper',
    screenshot: scorekeeper,
    technologies: 'React, Chakra UI, Firebase',
    link: 'https://scorekeeper.jamesonb.com/',
  },
  {
    name: 'Vault Game',
    screenshot: vault,
    technologies: 'React, TypeScript',
    link: 'https://vault.jamesonb.com/',
  },
  {
    name: 'Gilluly Planner',
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
