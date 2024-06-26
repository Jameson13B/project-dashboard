import { useEffect, useRef } from 'react'

export const LinkRow = ({
  project,
}: {
  project: {
    name: string
    screenshot: string
    technologies: string
    link: string
  }
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const clickRef = useRef<HTMLAudioElement>(null)

  // This effect adds click sound on hover
  useEffect(() => {
    const link = linkRef.current
    const click = clickRef.current

    link?.addEventListener('mouseenter', () => {
      click?.play()
    })
    link?.addEventListener('mouseleave', () => click?.pause())

    return () => {
      link?.removeEventListener('mouseenter', () => () => {
        click?.play()
      })
      link?.removeEventListener('mouseleave', () => click?.pause())
    }
  }, [])

  return (
    <a className="link-row" href={project.link} ref={linkRef}>
      <img className="screenshot" src={project.screenshot} />
      <div className="info">
        <div className="name-container">
          <p className="name white">{project.name}</p>
          <p className="name black">{project.name}</p>
        </div>
        <p className="technologies">{project.technologies}</p>
      </div>
      <div className="arrow-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 71 78"
          className="arrow-white"
        >
          <path d="m31.812 0-9.874 9.93 22.217 22.11H0v13.92h44.155L21.938 68.07 31.812 78 71 39 31.812 0Z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#090909"
          viewBox="0 0 71 78"
          className="arrow-black"
        >
          <path d="m31.812 0-9.874 9.93 22.217 22.11H0v13.92h44.155L21.938 68.07 31.812 78 71 39 31.812 0Z"></path>
        </svg>
      </div>
      <audio
        ref={clickRef}
        preload="auto"
        muted={true}
        style={{ display: 'none' }}
      >
        <source src="https://backstage.bonjovi.com/audio/tick.mp3"></source>
        Your browser isn't invited for super fun audio time.
      </audio>
    </a>
  )
}
