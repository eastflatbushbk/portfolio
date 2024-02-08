import React from 'react'
import mdblur2 from '../images/mdblur2.png'
import { useNavigate } from 'react-router-dom';


const MatchdayPage = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    // Navigate to a specific route
    navigate('/portfolio/projects');
  };

  return (
    <div >
    <div>
    <div  />
    <img
      layout='fill'
      objectFit='cover'
      src={mdblur2}
      alt='/'
    />
<div className="columns is-multiline is-mobile">
  <div className='column is-three-quarter'>
    <div class="card">
<div class="card-content">
<div class="content">
        <h4 style={{ color: 'blue', fontSize: '20px' }}>Project Overview</h4>
        <p>Web-based app that enables users to post a Premier League soccer match and discuss their opinions about the match
</p>
         <ul>
          <p className='py-1'>● Designed a web application using JavaScript/React for the front-end and Ruby on Rails/SQLite for the back-end</p>
          <p className='py-1'>● Enacted useContext to share global data for React components</p>
          <p className='py-1'>● Utilized Bootstrap CSS library to design the front-end</p>
        </ul>
       <a href='https://github.com/eastflatbushbk/matchday' rel="noopener noreferrer">
        <button class="button is-link is-outlined">Code</button>
        </a>
          &nbsp;
          &nbsp;
       <a href='https://youtu.be/6yNoPodl1ck' rel="noopener noreferrer">
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
            <p className='text-gray-200 py-2 flex items-center'>●useContext</p>
            <p className='text-gray-200 py-2 flex items-center'>●Bootstrap</p>
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
  {/* <a href='/portfolio/projects'> */}
     <button class="button is-small is-danger" onClick={handleNavigation}>
          <span class="icon">
             <ion-icon name="arrow-back-outline"></ion-icon>
          </span>
               <span>Back</span>
      </button>
  {/* </a> */}
</div>
  )
}

export default MatchdayPage