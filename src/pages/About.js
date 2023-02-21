import React from 'react'

const About = () => {
  return (
    
    <div className='section'>
      <p> This website was created with React, it displays anime using a public API. 
The site allows users to search, filter and display
detailed information about popular anime. Thanks to
the use of React, the site offers a fast and
reactive user experience.
  </p>
  <p style={{margin:15 }}>This website was created thanks to the following :</p>
  <div className='about-info'>
    <ul>
     <li>React</li>
     <li>React Router</li>
     <li>Jikan REST API</li>
     <li>Context</li>
     <li>custom hooks</li>
     <li>Select and Text Field React components from Material UI</li>
     <li>Netlify hosting</li>
   </ul>
   <form style={{margin:15,width:500}} action="https://github.com/yassinehaku/AnimeList">
    <button  type="submit" className='btn'>AnimeList repository on github</button>
   </form>
   </div>
    </div>
    
  )
}

export default About
