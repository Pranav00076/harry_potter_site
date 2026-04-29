import { useEffect, useRef, useState } from 'react'
import './MusicPlayer.css'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [started, setStarted] = useState(false)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.5

    const startMusic = () => {
      if (audio.paused) {
        audio.play()
          .then(() => setStarted(true))
          .catch(() => {})
      }
    }

    document.addEventListener('click',     startMusic, { capture: true, once: true })
    document.addEventListener('keydown',   startMusic, { capture: true, once: true })
    document.addEventListener('scroll',    startMusic, { capture: true, once: true })
    document.addEventListener('touchstart',startMusic, { capture: true, once: true })

    return () => {
      document.removeEventListener('click',     startMusic, true)
      document.removeEventListener('keydown',   startMusic, true)
      document.removeEventListener('scroll',    startMusic, true)
      document.removeEventListener('touchstart',startMusic, true)
    }
  }, [])

  const toggle = (e) => {
    e.stopPropagation()
    const audio = audioRef.current
    if (!audio) return
    if (!started) {
      audio.play().then(() => setStarted(true)).catch(() => {})
      return
    }
    audio.muted = !audio.muted
    setMuted(audio.muted)
  }

  return (
    <>
      <audio ref={audioRef} src="/harry_potter_music.mp3" preload="auto" />
      <div className={`music-hint ${started ? 'music-hint--gone' : ''}`}>
        🎵 Click anywhere to play music
      </div>

      <button
        id="music-player-btn"
        className="music-btn"
        onClick={toggle}
        title={muted ? 'Unmute music' : 'Mute music'}
        aria-label={muted ? 'Unmute background music' : 'Mute background music'}
      >
        <span className="music-btn__icon">
          {!started ? '🎺' : muted ? '🔕' : '🎺'}
        </span>
      </button>
    </>
  )
}
