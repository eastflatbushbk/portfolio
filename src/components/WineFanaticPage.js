import React from 'react'
import wfblur2 from '../images/wfblur2.png'

const WineFanaticPage = () => {
  return (
    
    <div >
        <div>
        <div  />
        <img
          layout='fill'
          objectFit='cover'
          src={wfblur2}
          alt='/'
        />
    <div className="columns is-multiline is-mobile">
      <div className='column is-three-quarter'>
        <div class="card">
  <div class="card-content">
    <div class="content">
            <h4 style={{ color: 'blue', fontSize: '20px' }}>Project Overview</h4>
            <p>Wine reviewer app that allows users to add wine to their virtual cellar</p>
             <ul>
              <p className='py-1'>● Developed JavaScript/React front-end and Ruby on Rails/SQLite back-end apppcation</p>
              <p className='py-1'>● Designed using Material UI CSS Framework</p>
              <p className='py-1'>● Implemented Redux to manage state in the front-end </p>
            </ul>
           <a href='https://github.com/eastflatbushbk/wine-fanatic'>
            <button class="button is-link is-outlined">Code</button>
            </a>
              &nbsp;
              &nbsp;
           <a href='https://youtu.be/UrFMpJmeSsk'>
              <button class="button is-link is-outlined">Demo</button>
              </a>
          </div>
        </div>
        
        </div>
        </div>
        <div className='column is-one-quarter'>
        <div class="card">
  <div class="card-content">
    <div class="content">
            <div className='p-2'>
            <p style={{ color: 'blue', fontSize: '20px' }}>Technologies</p>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-200 py-2 flex items-center'>●Ruby on Rails</p>
                <p className='text-gray-200 py-2 flex items-center'>●HTML</p>
                <p className='text-gray-200 py-2 flex items-center'>●JavaScript</p>
                <p className='text-gray-200 py-2 flex items-center'>●React</p>
                <p className='text-gray-200 py-2 flex items-center'>●Redux</p>
                <p className='text-gray-200 py-2 flex items-center'>●Material ui</p>
            </div>
        </div>
        </div>
        </div>
         </div>
       
      </div>
      </div>
      &nbsp;
      &nbsp;
      &nbsp;
      <a href='/projects'>
         <button class="button is-small is-danger">
              <span class="icon">
                 <ion-icon name="arrow-back-outline"></ion-icon>
              </span>
                   <span>Back</span>
          </button>
      </a>
    </div>
  )
}

export default WineFanaticPage