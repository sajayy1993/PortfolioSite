import React from "react"
import "./Home.css"
import hero from "../Photos/Head1.jpeg"
import skill1 from "../Photos/skill1.png"
import skill2 from "../Photos/skill2.png"
import skill3 from "../Photos/skill3.png"
import { useTypewriter} from "react-simple-typewriter"

const Home = () => {

    const {text} = useTypewriter({
        words: [ " Web-Developer.", " UI-Desiner."," Learner."," Self Believer.",],
        loop: 0, 
        cursorStyle:'|',
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000
        })
    
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>AJAY YADAV</span>
            </h1>
            <h2>
              a
              <span>
            {text}
          
              </span>
            </h2>

            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home