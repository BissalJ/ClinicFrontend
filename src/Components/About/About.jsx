import React from 'react';
import './About.css';

const education = [
  {
    period: '2019-2024',
    title: 'MBBS',
    institution: 'Sahiwal Medical College, Sahiwal',
    score: '72%',
  },
  {
    period: '2017-2019',
    title: 'FSc Pre-Medical',
    institution: 'Punjab College, Sahiwal',
    score: '94%',
  },
];

const skillGroups = [
  {
    title: 'Obstetrics & Gynecology',
    items: [
      'Assisted in and independently performed Cesarean section deliveries.',
      'Conducted antenatal and postnatal patient assessments.',
      'Managed labor monitoring, fetal heart rate assessment, and postpartum care.',
    ],
  },
  {
    title: 'General Surgery',
    items: [
      'Pre-operative and post-operative patient evaluation and daily rounds.',
      'Basic surgical assistance including wound closure, dressing changes, and suture removal.',
      'Participated in minor surgical procedures.',
    ],
  },
];

const interests = [
  {
    title: 'Internal Medicine',
    text: 'Patient-centered management of chronic and acute conditions.',
  },
  {
    title: 'Dermatology',
    text: 'Medical and procedural dermatology.',
  },
  {
    title: 'Cosmetic (Aesthetic) Surgery',
    text: 'Facial rejuvenation, body contouring, and minimally invasive techniques.',
  },
];

const About = () => {
  return (
    <main className="aboutPage">
      <section className="aboutHero">
        <div className="aboutContainer aboutHeroGrid">
          <div className="aboutHeroCopy">
            <span className="aboutTag">About Me</span>
            <h1>Dr. Maheen Javaid</h1>
            <p>
              House Officer at Sahiwal Teaching Hospital with hands-on experience in
              surgery and Obstetrics & Gynecology, focused on patient-centered care,
              clinical growth, and thoughtful treatment support.
            </p>

            <div className="aboutHeroStats">
              <div className="aboutStatCard">
                <strong>Current Role</strong>
                <span>House Officer at Sahiwal Teaching Hospital.</span>
              </div>
              <div className="aboutStatCard">
                <strong>Current Rotation</strong>
                <span>Surgery.</span>
              </div>
              <div className="aboutStatCard">
                <strong>Completed Rotation</strong>
                <span>Obstetrics & Gynecology, 3 months.</span>
              </div>
            </div>
          </div>

          <div className="aboutHeroVisual">
            <div className="aboutVisualCard">
              <span className="aboutVisualBadge">Professional Profile</span>
              <h2>Clinical care grounded in skill, empathy, and consistency.</h2>
              <p>
                Dr. Maheen Javaid combines strong academic training with practical
                hospital experience, with special interest in medicine, dermatology,
                and aesthetic surgery.
              </p>
            </div>
            <div className="aboutAccentCard aboutContactCard">
              <span>114-D Small Industrial Estate, Sahiwal</span>
              <span>+92 318 0072325</span>
              <span>maheenjavaid511@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutStorySection">
        <div className="aboutContainer">
          <div className="aboutSectionHeading">
            <span className="aboutTag">Education</span>
            <h2>Academic foundation and medical training.</h2>
            <p>
              A strong educational record shaped the transition into clinical practice,
              supporting both hospital-based care and long-term professional development.
            </p>
          </div>

          <div className="aboutEducationGrid">
            {education.map((item) => (
              <article className="aboutEducationCard" key={item.title}>
                <span className="aboutMiniTag">{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
                <strong>{item.score}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aboutValuesSection">
        <div className="aboutContainer aboutValuesLayout">
          <div className="aboutValuesCard">
            <span className="aboutTag">Present Position</span>
            <h2>Current hospital training and rotation experience.</h2>
            <p>
              Ongoing clinical work is centered on practical patient care, ward duties,
              procedural exposure, and continued learning within hospital rotations.
            </p>
          </div>

          <div className="aboutChecklist">
            <div className="aboutChecklistItem">
              <span className="aboutChecklistIcon">+</span>
              <p>House Officer at Sahiwal Teaching Hospital.</p>
            </div>
            <div className="aboutChecklistItem">
              <span className="aboutChecklistIcon">+</span>
              <p>Current rotation: Surgery.</p>
            </div>
            <div className="aboutChecklistItem">
              <span className="aboutChecklistIcon">+</span>
              <p>Completed rotation: Obstetrics & Gynecology, 3 months.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutStorySection">
        <div className="aboutContainer">
          <div className="aboutSectionHeading">
            <span className="aboutTag">Clinical Skills</span>
            <h2>Hands-on proficiencies developed through hospital practice.</h2>
            <p>
              Clinical experience includes direct patient assessment, peri-operative care,
              assistance in procedures, and active participation across core rotations.
            </p>
          </div>

          <div className="aboutSkillsGrid">
            {skillGroups.map((group) => (
              <article className="aboutSkillCard" key={group.title}>
                <h3>{group.title}</h3>
                <div className="aboutBulletList">
                  {group.items.map((item) => (
                    <div className="aboutBulletItem" key={item}>
                      <span className="aboutBulletDot"></span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aboutCtaSection">
        <div className="aboutContainer">
          <div className="aboutSectionHeading aboutCompactHeading">
            <span className="aboutTag">Clinical Interests</span>
            <h2>Focused areas of ongoing medical interest.</h2>
          </div>

          <div className="aboutInterestsGrid">
            {interests.map((item) => (
              <article className="aboutInterestCard" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="aboutCtaCard aboutAchievementCard">
            <span className="aboutTag">Honors & Achievements</span>
            <h2>Certificate of Distinction in Pathology</h2>
            <p>
              Awarded during MBBS by Sahiwal Medical College, Sahiwal, reflecting
              strong academic performance and subject distinction.
            </p>
            <div className="aboutCtaActions">
              <a href="/" className="aboutPrimaryAction">Back to Home</a>
              <a href="/#appointment-section" className="aboutSecondaryAction">Book an Appointment</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
