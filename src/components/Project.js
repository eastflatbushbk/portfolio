import React from 'react'
import wineFanatic from '../images/wineFanatic.png'
import matchday from '../images/matchday.png'

const Project = () => {
  return (
    <div id='projects' className='section '>
        <div className='container'>
            <h2 className='title is-3 has-text-info'>My projects</h2>
            <div class="columns is-multiline is-mobile">
            <div className='column is-half'>

                <div class="card">
                   <div class="card-image">
                       <figure class="image is-3by3">
                             <img src={wineFanatic} alt=""/>
                             
                       </figure>
                   </div>
                               <div class="card-content">
                                         <div class="media">
                                              <div class="media-content">
                                                  <p class="title is-4">Wine Fanatic</p>
                                                  <p class="text is-8">Front end : React - Redux</p>
                                                  <p class="text is-8">Back end : Ruby on rails API</p>
                                              </div>
                                              <a href='/portfolio/project-one'>
                                              <button class="button is-info is-outlined">more info</button>
                                              </a>
                                          </div>
        
                                </div>
                 </div>
            </div>

       <div className='column is-half'>
            <div class="card">
                <div class="card-image">
                  <figure class="image is-3by3">
                          <img src={matchday} alt=""/>
                  </figure>
               </div>
                         <div class="card-content">
                               <div class="media">
                                    <div class="media-content">
                                             <p class="title is-4">Matchday</p>
                                             <p class="text is-8">Front end : React - useContext</p>
                                             <p class="text is-8">Back end : Ruby on rails API</p>
                                     </div>
                                     <a href='/portfolio/project-two'>
                                          <button class="button is-info is-outlined">more info</button> 
                                          </a> 
                                 </div>
                           </div>
                    </div>
               </div>
          </div>
        </div>
    </div>
    
  )
}

export default Project