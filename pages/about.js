/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import BasePage from '../components/BasePage'
import styled from 'styled-components'
import { unit, mobile } from '../components/style-helpers'

/*
-----------------------------------------------------------------------------------
|
| Page
|
-----------------------------------------------------------------------------------
*/

export default () => (
  <BasePage>
    <TopSection>
      <img src="/static/about_me.png" />
      <p>
        Hi, I'm <strong>Theodor</strong>! I currently live in Copenhagen working on creating amazing
        health software with <a href="https://lenus.io">Lenus eHealth</a>. I love hiking and have
        most recently thruhiked the Pacific Crest Trail. What gets me out of the bed in the morning
        is the opportunity to learn something new and have a great time with the people I care
        about.
      </p>
    </TopSection>

    <Title>Experience</Title>

    <ResumeSection>
      <ResumeSectionTop>
        <p>Lenus eHealth</p>
        <p>
          <Spaced>present</Spaced>
        </p>
      </ResumeSectionTop>
      <ResumeTitle>Fullstack Developer & Partner</ResumeTitle>
      <p>
        In October 2017 I have joined <strong>Lenus eHealth</strong> as partner and fullstack
        developer. We are trying to create an online platform enabling health professionals to
        provide a better service to the end users and maintain quality at scale. We are currently
        operating mainly on the Danish market, but international expansion is our primary goal. You
        can read more about our mission <a href="https://lenus.io">here</a> 🚀.
      </p>
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTop>
        <p>Wakie Wakie</p>
        <p>2016 - 2017</p>
      </ResumeSectionTop>
      <ResumeTitle>Backend Developer</ResumeTitle>
      <p>
        Subsequently I started my own consulting company offering programming services. This led to
        employment in the startup <strong>WakieWakie</strong>. I worked as the lead backend
        developer building the infrastructure from scratch in Node. In addition to writing Node, I
        managed the AWS setup revolving around DynamoDB, Lambda and S3.
      </p>
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTop>
        <p>Shipbeat</p>
        <p>2015 - 2016</p>
      </ResumeSectionTop>
      <ResumeTitle>Customer Success Manager</ResumeTitle>
      <p>
        After more than a year of web development I was headhunted by the logistics technology
        startup <strong>Shipbeat</strong>. I decided to join them as Customer Success Manager - a
        positon spanning from writing technical documentation and helping customers to doing
        frontend development for both internal and external tools. Unfortunately Shipbeat went
        bankrupt in the summer of 2016 💸.
      </p>
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTop>
        <p>Dwarf</p>
        <p>2014 - 2015</p>
      </ResumeSectionTop>
      <ResumeTitle>Frontend Developer</ResumeTitle>
      <p>
        By coincidence I saw a job poster for a student frontend developer position in a web
        development company called <strong>Dwarf</strong>. This marked the beginning of a rigorous,
        tough and amazingly rewarding time of getting up to speed with web technology alongside my
        business studies. I got the position and helped create website for some of the major Danish
        brands ✨. I worked with Bootstrap, Backbone, Angular and Grunt.
      </p>
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTop>
        <p>IBM</p>
        <p>2012 - 2014</p>
      </ResumeSectionTop>
      <ResumeTitle>Junior Analyst</ResumeTitle>
      <p>
        My first job in the industry was at <strong>IBM</strong>. I conducted data analysis for the
        sales department and monitored KPIs. My actual work revolved around Excel (and other MS
        tools) together with some VBA sprinkled here and there. I returned to IBM once returning
        from my semester abroad in São Paulo, Brazil 🇧🇷.
      </p>
    </ResumeSection>

    <Title>Education</Title>

    <ResumeSection>
      <ResumeSectionTop>
        <p>IT University of Copenhagen</p>
        <p>2014 - 2016</p>
      </ResumeSectionTop>
      <ResumeTitle>MSc. Software Development</ResumeTitle>
      <p>
        Studying at the IT University of Copenhagen gave me a more theoretic understanding of
        computer science - this was a contrast to my previous programming experience being based
        solely on trial and error. Starting from discrete mathematics and Java 101 we worked our way
        up through algorithms to intelligent systems programming and system Scalability. I graduated
        with a thesis on <em>WebRTC in the context of P2P</em> with an emphasis on the SKIP+
        topology.
      </p>
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTop>
        <p>Copenhagen Business School</p>
        <p>2011 - 2014</p>
      </ResumeSectionTop>
      <ResumeTitle>BSc. International Business</ResumeTitle>
      <p>
        My studies in international business provided a very broad skill set of common business
        skills. We were taught basic economics, corporate finance, stastics, organizational studies,
        accounting and introductory courses to several other fields. I graduated with a thesis on
        the <em>Business Value of the Internet of Things</em>.
      </p>
    </ResumeSection>

    <Title>Projects</Title>

    <ResumeSection>
      <ResumeSectionTop>
        <p>Hikebeat</p>
        <p>2014 - 2017</p>
      </ResumeSectionTop>
      <ResumeTitle>Fullstack Developer & Partner</ResumeTitle>
      <p>
        I love to travel and especially sharing the amazing moments I experience. Prior to walking
        the <a href="http://lindekaer.com/camino-de-santiago.html">Camino de Santiago</a> I started
        tinkering with a GSM modem and a SIM-card to make it possible for me to send SMS with
        geolocation back home while traveling. This date should then be displayed on a web based map
        for all my friends and family to follow. This led to me developing <strong>Hikebeat</strong>{' '}
        together with my friends Niklas, Jesper and Dimitar. The project culminated in releasing the
        Hikebeat Web Dashboard and IOS app. The project has been discountinued and is now open
        source.
      </p>
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTop>
        <p>Pacific Crest Trail</p>
        <p>2017</p>
      </ResumeSectionTop>
      <ResumeTitle>Long Distance Hiker</ResumeTitle>
      <p>
        I have a passion for hiking. For many years, hiking the <strong>Pacific Crest Trail</strong>{' '}
        in one stretch has been a dream of mine. I undertook this project and begun planning
        throughout 2016. In April 2017 I started the 2,500 mile journey from the Mexican border to
        the Canadian border. I succeded and finished after more than five months of continous
        hiking. An experience of a lifetime 🇲🇽 🇺🇸 🇨🇦!
      </p>
    </ResumeSection>

    <ResumeSection>
      <ResumeSectionTop>
        <p>The Swedish Classic</p>
        <p>2016 - 2017</p>
      </ResumeSectionTop>
      <ResumeTitle>Runner, Swimmer, Cyclist and Skier</ResumeTitle>
      <p>
        Throughout 2016 and 2017 I completed the <strong>Swedish Classic Challenge</strong> by
        finishing four specific Swedish sport events within 12 months. The events in challenge are
        Vätternrundan (300 km biking), Vansbrosimningen (3 km open water swimming), Lidingöloppet
        (30 km trail running) and Vasaloppet (90 km cross contry skiing). Amazed by the Swedes'
        ability to host huge sport events 🇸🇪.
      </p>
    </ResumeSection>
  </BasePage>
)

/*
-----------------------------------------------------------------------------------
|
| Styles
|
-----------------------------------------------------------------------------------
*/

const Title = styled.h1`
  margin-top: 3rem;
  padding-bottom: 2px;
  border-bottom: 1px solid #2c2c2c;
  text-transform: uppercase;
  font-weight: 900;
`

const TopSection = styled.div`
  display: flex;
  align-items: center;
  ${mobile` flex-direction: column;`} img {
    max-width: 50%;
    ${mobile` 
      max-width: 100%;
      margin-bottom: 1rem;
    `};
  }

  p {
    padding: 0px ${3 * unit}px;
    ${mobile` padding: 0px;`} margin: 0px;
  }
`

const ResumeSection = styled.div`
  margin-top: ${3 * unit}px;
`

const ResumeSectionTop = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile` flex-direction: column;`} p {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.8rem;
    margin: 0px;
    color: #7d7d7d;
  }

  p:last-child {
    letter-spacing: 0px;
    ${mobile` order: -1;`};
  }
`

const ResumeTitle = styled.h3`
  font-weight: bold;
  margin: 0px;
  margin-bottom: 0.5rem;
`

const Spaced = styled.span`
  letter-spacing: 2px;
`
