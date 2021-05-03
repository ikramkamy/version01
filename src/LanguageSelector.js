import React from 'react'
import { useTranslation } from 'react-i18next'
import './languagesellector.css'
const LanguageSelector = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }
  

  return (
    <div onChange={changeLanguage} style={{color:"white"}} className="langue-botton">
       <span> <input type="radio" value="en" name="language"  id="eng"  /> En</span>
      <span><input type="radio" value="fr" name="language"  id="frn"  /> Fr</span> 
    <span><input type="radio" value="ar" name="language" id="arb" /> Ar</span>
      
    </div>
  )
}

export default LanguageSelector