import React, { useEffect } from 'react';
import "./Home.css";
import * as THREE from 'three';
import earthImage from "../../Images/earth.jpg";
import Plane from '../Plane/Plane';
import Contact from '../Contact/Contact';
import { Appoint } from '../Appoint/Appoint';

const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(earthImage);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvas = document.querySelector('.homeCanvas');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

    const setRendererSize = () => {
      const width = window.innerWidth;
      const height = canvas?.clientHeight || Math.floor(window.innerHeight * 0.68);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    setRendererSize();

    const earthGeometry = new THREE.SphereGeometry(3, 64, 64);
    const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);



    const lightOffset = new THREE.Vector3(-50, 50, 50);

    const pointLight = new THREE.PointLight(0xFFFFFF, 50000);
    pointLight.position.copy(earth.position).add(lightOffset);
    pointLight.lookAt(earth);
    scene.add(pointLight);

    earth.position.x=10


    pointLight.position.copy(earth.position).add(lightOffset);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);


    scene.background = new THREE.Color(0xFFFFFF);



    const constSpeed = 0.01;

    const handleMouseMove = (e) => {
      if (e.clientX < window.innerWidth / 2) {
        earth.rotation.x -= constSpeed;
        earth.rotation.y += constSpeed;
      }
      if (e.clientX > window.innerWidth / 2) {
        earth.rotation.x -= constSpeed;
        earth.rotation.y -= constSpeed;
      }
      if (e.clientY > window.innerHeight / 2) {
        earth.rotation.x -= constSpeed;
        earth.rotation.y += constSpeed;
      }
      if (e.clientX <= window.innerHeight / 2) {
        earth.rotation.x -= constSpeed;
        earth.rotation.y -= constSpeed;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', setRendererSize);
    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.x += 0.001;
      earth.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', setRendererSize);
      renderer.dispose();
      earthGeometry.dispose();
      earthMaterial.dispose();
    };
  }, []);

  return (
    <div className="home">
      <section className="heroSection">
        <div className="heroCanvasWrap">
          <canvas className="homeCanvas"></canvas>
          <div className='homeContainer'>
            <div className='heroHeading'>
              <span className='heroTag'>Care Starts Here</span>
              <h1>Doctor Clinic</h1>
              <p>Thoughtful care, timely support to feel calm, clear, and dependable.</p>
            </div>
          </div>
        </div>

        <div className='heroCardsWrap'>
          <div className='homeContainer'>
            <Plane />
          </div>
        </div>
      </section>

      <div className='homeSkills'>
        <div className="servicesContainer">
          <div className="servicesTitleBlock">
            <span className="servicesTag">Care You Can Count On</span>
            <h2>Services Available</h2>
            <p>Explore essential care options designed to support your health with trusted attention and timely treatment.</p>
          </div>

          <div className="servicesList">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i className="fa-solid fa-stethoscope"></i>
                  <h3>General Consultation</h3>
                </div>
                <div className="flip-card-back">
                  <p>Routine checkups and expert medical advice.</p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i className="fa-solid fa-shield-heart"></i>
                  <h3>Preventive Care</h3>
                </div>
                <div className="flip-card-back">
                  <p>Early detection and preventive treatments.</p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i className="fa-solid fa-notes-medical"></i>
                  <h3>Health Assessments</h3>
                </div>
                <div className="flip-card-back">
                  <p>Comprehensive evaluation of your health status.</p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i className="fa-solid fa-baby"></i>
                  <h3>Pediatrics</h3>
                </div>
                <div className="flip-card-back">
                  <p>Specialized care for infants and children.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='appoint' id='appointment-section'>
        <Appoint></Appoint>
      </div>

      <div className='contact'>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
