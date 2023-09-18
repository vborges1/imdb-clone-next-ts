"use client";
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MdLightMode } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'

export default function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true));
  
  return (
    <>
      {mounted && (resolvedTheme === "dark" ? (
        <MdLightMode className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme("light")} />
      ) : (
        <BsFillMoonFill className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme("dark")} />
      ))}
    </>
  )
}
