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
            I’m a Full-stack Software Engineer with experience in JavaScript, React, Ruby, Ruby on Rails, SQL, and PostgreSQL. I’m a graduate of Flatiron School and have a background in pest management and have excellent communication skills. I’m detail-oriented and a people person who enjoys working collaboratively with colleagues to tackle difficult tasks. I’m passionate about building clean, user-friendly digital experiences that make people’s lives easier.
            </p>
            &nbsp;
        &nbsp;
        &nbsp;
            <div >
                <a href="https://www.linkedin.com/in/robert-sainton-677500286/">
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
                <a href="https://github.com/eastflatbushbk">
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