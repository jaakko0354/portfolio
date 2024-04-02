import { useEffect, useRef, useState } from 'react';
import '../styles/Background.css';
import { Avatar } from 'antd';
import cvkuva from '../assets/cv-kuva.jpg';
import Projects from './Projects';
import { DoubleRightOutlined,} from '@ant-design/icons';

export default function Background() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const [scrollY, setScrollY] = useState(0);
  const [showAvatar, setShowAvatar] = useState(true);
  const [showProjecs, setShowProjects] = useState(false);
  
  const [hasScrolledToProjects, setHasScrolledToProjects] = useState(false);
  

  //https://stackoverflow.com/a/71682214
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowAvatar(window.scrollY < 550);
      if (window.scrollY > 350 && window.scrollY < 1100) {
        setShowProjects(true);
      } else {
        setShowProjects(false);
      }
      console.log(window.scrollY);
      if ( 150 < window.scrollY && window.scrollY < 660) {
        if (!hasScrolledToProjects) {
          //focusProjects();
          setHasScrolledToProjects(true);
        }
      } else {
        setHasScrolledToProjects(false);
      }

    };

    
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolledToProjects]);

  const avatarClick = () => {
    const avatar = document.querySelector('.profile-picture');
    avatar?.classList.toggle('active');
    const info = document.querySelector('.info-container');
    info?.classList.toggle('active');
  }
  

  /* const focusProjects = () => {
    document.documentElement.scrollTo({top: 530, behavior:'smooth'});
  } */


  const avatarOpacity = Math.max(0, Math.min(1, (250 - scrollY) / 250));

  return (
    <div className="background-color">
      {showAvatar ? (
          <div className='avatar-container'>
            <Avatar size={300} src={cvkuva} className="profile-picture" style={{ opacity: avatarOpacity }} onClick={() => avatarClick()}/>
            <div className="info-container" onClick={() => avatarClick()} style={{ opacity: avatarOpacity }}>
              <div className='info-box'/>
              <div className='info-ball'/>
              <p className='info-text'>About me</p></div>
            </div>
        ) : (
          <div className="avatar-placeholder" />
          )}
        
      <div className="background-triangle" style={{ transform: `translateY(-${scrollY * 0.4}px)`, zIndex:2}}/>
      <div className="background-square" style={{ transform: `translateY(-${scrollY * 0.4}px)`, zIndex:3}}>
        <DoubleRightOutlined 
        rotate={90}
        style={{ fontSize:'50px', color:'#269d3e',}}
        className='down-arrow' onClick={() => {document.documentElement.scrollTo({top: 520, behavior:'smooth'})}}
        />
        <div className="background-bottom-triangle"/>
      </div>

      {showProjecs ? (
        <Projects ref={projectsRef} scrollY={scrollY}/>
      ) :(
        <div className='projects-placeholder'/>
      )
      }
      <div className="background-triangle" style={{ transform: `translateY(-${scrollY * 0.8}px)` }} />
      <div className="background-square" style={{ transform: `translateY(-${scrollY * 0.8}px)`}}>
        <DoubleRightOutlined 
        rotate={90}
        style={{ fontSize:'50px', color:'#269d3e',}}
        className='down-arrow' onClick={() => {document.documentElement.scrollTo({top: 960, behavior:'smooth'})}}
        />
        <div className="background-bottom-triangle"/>
      </div>
      <div style={{height:'450px'}}></div>
      <div className="background-triangle" style={{ transform: `translateY(-${scrollY * 0.9}px)` }} />
      <div className="background-square" style={{ transform: `translateY(-${scrollY * 0.9}px)` }}>
        <DoubleRightOutlined 
        rotate={90}
        style={{ fontSize:'50px', color:'#269d3e',}}
        className='down-arrow' onClick={() => {document.documentElement.scrollTo({top: 1300, behavior:'smooth'})}}
        />
        <div className="background-bottom-triangle"/>
      </div>
    </div>
  );
}