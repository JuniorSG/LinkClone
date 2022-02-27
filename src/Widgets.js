import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading , subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4> {heading} </h4>
                <p> {subtitle} </p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("Entérate qué pasa si cargas tu celular Android toda la noche", "Mag el Comrade - 22 hours ago")}
        {newsArticle("YouTube launches NFTs so fans can 'own' videos" , "The independent - 1 day ago")}
        {newsArticle("¿Las Nvidia GeForce RTX 4000 son GeForce RTX 3000 @ 5nm", "El Chapuzas info - 1 day ago")}
        {newsArticle("La importancia de los alters en Lost Ark", "Esportmaniacs - 2 days ago")}
    </div>
  )
}

export default Widgets