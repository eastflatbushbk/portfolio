import React from 'react'

const Home = () => {
  return (
    <div>
        &nbsp;
        &nbsp;
        &nbsp;
        <div className='has-text-centered'>
    <div className='max-width-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
            <p className='uppercase text-sm tracking-widest text-white'>
                
            </p>
            <h1 className='is-size-2 is-family-primary'> 
                Hi, I'm <span className='has-text-info'>Robert</span>
            </h1>
            &nbsp;
        &nbsp;
        &nbsp;
            <h1 className='is-size-2'> 
                A Full-Stack Web Developer
            </h1>
            &nbsp;
        &nbsp;
        &nbsp;
            <p className='px-24 py-4 text-white max-2-[80%] m-auto text-2xl is-size-3'>
            I am a Full-stack Software Engineer with a strong background in JavaScript, React, Ruby, Ruby on Rails, SQL, and PostgreSQL. I graduated from Flatiron School and have honed my skills through hands-on experience. My previous experience in pest management has taught me to be detail-oriented and an excellent communicator. I am a people person who enjoys working collaboratively with colleagues to tackle difficult tasks. I am passionate about building clean, user-friendly digital experiences that make people’s lives easier. I am confident that my skills and experience make me a valuable asset to any team.</p>
            &nbsp;
        &nbsp;
        &nbsp;
            <div >
                <a href="https://www.linkedin.com/in/robert-sainton-677500286/" target="_blank" rel="noopener noreferrer">
                    {/* <div className='rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        linkedin
                    </div> */}
                    <button class="button is-medium">
    <span class="icon">
    <ion-icon name="logo-linkedin"></ion-icon>
    </span>
    <span>LinkedIn</span>
  </button>
                </a>
                &nbsp;
                <a href="https://github.com/eastflatbushbk" target="_blank" rel="noopener noreferrer">
                <button class="button is-medium">
                     <span class="icon">
                            <ion-icon name="logo-github"></ion-icon>
                       </span>
         <span>GitHub</span>
  </button>
                </a>                        
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Home