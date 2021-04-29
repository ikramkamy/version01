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
      <input type="radio" value="en" name="language"  id="eng"/> English
      <input type="radio" value="ar" name="language" id="arb"/> Arab
      <input type="radio" value="fr" name="language" defaultChecked id="frn" /> Français
      
    </div>
  )
}

export default LanguageSelector