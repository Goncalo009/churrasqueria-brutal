"use client"

import { useState, useEffect } from "react"

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isClicking, setIsClicking] = useState(false)
  const [isLink, setIsLink] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const down = () => setIsClicking(true)
    const up = () => setIsClicking(false)
    const over = () => setIsLink(true)
    const out = () => setIsLink(false)

    window.addEventListener("mousemove", move)
    window.addEventListener("mousedown", down)
    window.addEventListener("mouseup", up)

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", over)
      el.addEventListener("mouseleave", out)
    })

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mousedown", down)
      window.removeEventListener("mouseup", up)
    }
  }, [])

  return (
    <>
      <div className="pointer-events-none fixed z-[10000] mix-blend-difference hidden md:block"
        style={{ left: pos.x - 4, top: pos.y - 4, transition: "transform 0.15s ease-out" }}
      >
        <div
          className="w-2 h-2 bg-fire-500"
          style={{
            transform: isClicking ? "scale(0.5)" : "scale(1)",
            transition: "transform 0.1s ease",
          }}
        />
      </div>
      <div className="pointer-events-none fixed z-[9999] mix-blend-difference hidden md:block"
        style={{
          left: pos.x - (isLink ? 24 : 16),
          top: pos.y - (isLink ? 24 : 16),
          transition: "left 0.3s ease-out, top 0.3s ease-out, width 0.3s ease, height 0.3s ease",
          width: isLink ? 48 : 32,
          height: isLink ? 48 : 32,
        }}
      >
        <div
          className="w-full h-full border border-fire-500/50 transition-all duration-200"
          style={{
            transform: isClicking ? "scale(0.8)" : "scale(1)",
          }}
        />
      </div>
    </>
  )
}
