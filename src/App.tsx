import scorekeeper from "./assets/scorekeeper.png"
import vault from "./assets/vault.png"
import gilluly from "./assets/gilluly.png"
import spark from "./assets/spark.png"
import a10brews from "./assets/a10brews.png"
import "./App.css"
import { LinkRow } from "./LinkRow"

const data = [
  {
    name: "Spark",
    description: "Get a spark of inspiration.",
    screenshot: spark,
    technologies: "React, GSAP, vanilla-extract",
    link: "https://spark.jamesonb.com/",
  },
  {
    name: "Score Keeper",
    description: "Keep score for your game nights.",
    screenshot: scorekeeper,
    technologies: "React, Chakra UI, Firebase",
    link: "https://scorekeeper.jamesonb.com/",
  },
  {
    name: "Vault Game",
    description: "Bank as much money as you can.",
    screenshot: vault,
    technologies: "React, TypeScript",
    link: "https://vault.jamesonb.com/",
  },
  {
    name: "A10 Create",
    description: "Create with the Atomic10 stack.",
    screenshot: "null",
    technologies: "Commander, Inquirer, JavaScript",
    link: "https://github.com/Jameson13B/atomic10-create",
  },
  {
    name: "Gilluly App",
    description: "Ensure everyone has what they need.",
    screenshot: gilluly,
    technologies: "React, Styled Components, Firebase",
    link: "https://gilluly.jamesonb.com/",
  },
  {
    name: "A10 Brews",
    description: "Status of all Atomic10 Brews.",
    screenshot: a10brews,
    technologies: "React, TypeScript, TailwindCSS",
    link: "https://brews.atomic10.studio",
  },
]

function App() {
  return (
    <>
      <h1
        style={{
          fontWeight: "bold",
          fontFamily: "Plus Jakarta Sans Variable",
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
