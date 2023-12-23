'use client'
import { useState } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const themes = {
  winter: 'winter',
  dracula: 'dracula',
}

const ThemeBtn = () => {
  const [theme, setTheme] = useState(themes.dracula)
  const toggleTheme = () => {
    const newTheme = theme === themes.winter ? themes.dracula : themes.winter
    document.documentElement.setAttribute('data-theme', newTheme)
    setTheme(newTheme)
  }
  return (
    <button className='btn btn-outline  btn-sm' onClick={toggleTheme}>
      {theme === 'winter' ? <BsMoonFill size={16} /> : <BsSunFill size={16} />}
    </button>
  )
}

export default ThemeBtn
