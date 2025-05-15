import React, { useEffect } from 'react';
import "./Home.css";
import * as THREE from 'three';
import earthImage from "../../Images/earth.jpg"
import {Typography} from "@mui/material"
import Plane from '../Plane/Plane';
import Contact from '../Contact/Contact';
import {Text} from 'troika-three-text';
import { Appoint } from '../Appoint/Appoint';


const Home = () => {
  useEffect(() => {
    const textureLoader= new THREE.TextureLoader();
    const earthTexture= textureLoader.load(earthImage);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const earthGeometry = new THREE.SphereGeometry(3, 64, 64);
    const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.x = -10;
    scene.add(earth);
    const pointLight = new THREE.PointLight(0xFFFFFF, 50000);
    pointLight.position.set(30, 50, 50);
    scene.add(pointLight);
    scene.background = new THREE.Color(0xFFFFFF);



const myText = new Text()
scene.add(myText)

// Set properties to configure:
myText.text = 'Doctor Clinic'
myText.fontSize = 2
myText.position.x = -5
myText.position.y = 1
myText.color = 0x3498DB

// Update the rendering:
myText.sync()



    const constSpeed=0.01;
    window.addEventListener("mousemove",(e)=>{
      if(e.clientX<window.innerWidth/2){
        earth.rotation.x-=constSpeed;
        earth.rotation.y+=constSpeed;

      }
      if(e.clientX>window.innerWidth/2){
        earth.rotation.x-=constSpeed;
        earth.rotation.y-=constSpeed;

      }
      if(e.clientY>window.innerHeight/2){
        earth.rotation.x-=constSpeed;
        earth.rotation.y+=constSpeed;

      }
      if(e.clientX<=window.innerHeight/2){
        earth.rotation.x-=constSpeed;
        earth.rotation.y-=constSpeed;

      }
    })


    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.x += 0.001;
      earth.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className='homeContainer'>
        <Plane/>
      </div>
      <div className='homeSkills'>
      <div className='servicesContainer'>
          <Typography variant="h3" >
            SERVICES AVAILABLE
            <ul className="servicesList">
              <li>General Consultations</li>
              <li>Preventive Care</li>
              <li>Health Assessments</li>
              <li>Pediatrics</li>
              </ul>
              </Typography>
              </div>

        <div className='homeCubeSkills'>
          <div className='skillCube cubeFace1'>
            <img src="https://i.pinimg.com/564x/25/94/b9/2594b93a05876942bc889c46443bd9a8.jpg" 
              alt="Face1"></img>
          </div>
          <div className='skillCube cubeFace2'>
            <img src="https://i.pinimg.com/564x/25/94/b9/2594b93a05876942bc889c46443bd9a8.jpg" 
            alt="Face2"></img>
          </div>
          <div className='skillCube cubeFace3'>
            <img src="https://i.pinimg.com/564x/25/94/b9/2594b93a05876942bc889c46443bd9a8.jpg" 
            alt="Face3"></img>
          </div>
          <div className='skillCube cubeFace4'>
            <img src="https://i.pinimg.com/564x/25/94/b9/2594b93a05876942bc889c46443bd9a8.jpg" 
            alt="Face4"></img>
          </div>
          <div className='skillCube cubeFace5'>
            <img src="https://i.pinimg.com/564x/25/94/b9/2594b93a05876942bc889c46443bd9a8.jpg" 
            alt="Face5"></img>
          </div>
          <div className='skillCube cubeFace6'>
            <img src="https://i.pinimg.com/564x/25/94/b9/2594b93a05876942bc889c46443bd9a8.jpg" 
            alt="Face6"></img>
          </div>
        </div>


    </div>
    <div className='appoint'>
      <Appoint></Appoint>
    </div>

    <div className='contact'>
        <Contact/>
      </div>

  </div>
  );
};

export default Home;
