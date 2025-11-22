import './App.css';
import mouse from "./icon/Mouse.png";
import rocket from "./icon/Rocket.svg";
import download from "./icon/File.svg";
import instagram from "./icon/Instagram.svg";
import linkedin from "./icon/LinkedIn.svg";
import github from "./icon/GitHub.svg";
import Wave from 'react-wavify';

function App() {
  return (

    <div className="container">
      <div className="home_container"> 
        <div className="home_container_title">
          <div className="home_container_title_small">
            Dive into
          </div>
          <div className="home_container_title_big">
            My World
          </div>
        </div>
        <div className="home_container_title_line"></div>

        <img className="home_container_title_mouse" src={mouse}/>

        <div className="home_container_awan">
          <Wave fill='#313647'
          paused={false}
          style={{ display: 'flex' }}
          options={{
          height: 40,
          amplitude: 50,
          speed: 0.3,
          points: 4
          }}/>
        </div>
      </div>



      <div className="profile_container">
        <div className="profile_container_left">
          <div className="profile_container_left_greetings">
            Hi, I'm
          </div>
          <div className="profile_container_left_name">
            Eryel Maseya Putra
          </div>
          <div className="profile_container_left_carrier">
            I'm a Student
          </div>
          <div className="profile_container_left_background">
            A computer science student at Universitas Multimedia Nusantara, an enthusiastic and adaptable student with a strong interest in technology, creativity, and teamwork. Experienced in project coordination, documentation, and creative works such as photography and short movie directing. Eager to keep learning, contribute actively, and develop both technical and interpersonal skills.
          </div>
          <div className="profile_container_left_download">
          <img src={download} className='icons'/> Download CV
          </div>
        </div>
        <div className="profile_container_right">
        <div className="profile_container_right_sosmed">
          <img src={linkedin} className='icons'/> Linked In
        </div>
        <div className="profile_container_right_sosmed">
          <img src={github} className='icons'/> GitHub
        </div>
        <div className="profile_container_right_sosmed">
          <img src={instagram} className='icons'/> Instagram
        </div>
        </div>
      </div>


      {/* <div className="skill_container">
        <div className="skill_container_title">
          <div className="skill_container_title_things">
            The Things
          </div>
          <div className="skill_container_title_good">
            I'm Good At
          </div>
        </div>

        <div className="skill_container_sikil">
          <div className="skill_container_skills">
          Team Work
          </div>
          <div className="skill_container_skills">
          Photography
          </div>
          <div className="skill_container_skills">
          Leadership
          </div>
          <div className="skill_container_skill">
          Figma
          </div>
          <div className="skill_container_skill">
          Canva
          </div>
          <div className="skill_container_skill">
          ReactJS
          </div>
        </div>
        
      </div> */}



      <div className="project_container">
        <div className="project_container_title">
        PROJECT
        </div>
        <div className="project_container_text">
        Something Cool Is On My Way!  <img className="project_container_rocket" src={rocket}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
