import { h } from 'preact';
import style from './style.css'

export const CommandExperience = () => {
  return (
    <div class={style.output}>
      <strong>Professional Experience :</strong>
      <div class={style.section}>
        <p class={style.title}>
        <strong>1) Customer Reliability Engineer</strong>, Studyplus,Inc. Tokyo,Japan (2022/05 ~ Now)
        </p>
        <p class={style.description}>
          A first member of the team. Decrease Customer's anxiety and increase Customer's satisfaction by improving the reliability of the service.
        </p>
        <ul>
          <li>Building Data Pipeline and Data Warehouse(~500 tables, 1billion records)</li>
          <li>Implement system to detect messages between users that violate the terms of service.(1M messages/month)</li>
        </ul>
      </div>
      <div class={style.section}>
        <p class={style.title}>
          <strong>2) Team Leader</strong>, Studyplus,Inc. Tokyo,Japan (2020/01 ~ Now)
        </p>
        <p class={style.description}>
          As a team leader of 9 people web application group, I have lead the team to deliver features in educational field. Examples of actions I have taken are as follows.
        </p>
        <ul>
          <li>Create a career ladder to clarify the career goals and current status of the members</li>
          <li>Introduced scrum development and reduced project delays</li>
        </ul>
      </div>
      <div class={style.section}>
        <p class={style.title}>
          <strong>3) Back-End Engineer</strong>, Studyplus,Inc. Tokyo,Japan (2018/09 ~ 2020/12)
        </p>
        <p class={style.description}>
          As part of B2B SaaS Web Application Team, I have delivered features to improve the learning efficiency of students and teachers.
        </p>
        <ul>
          <li>Migrate monolith Ruby on Rails App into REST API and React SPA</li>
          <li>Introduce Schema Driven Development process</li>
          <li>Implement front-end and back-end across ambiguous systems and environment</li>
        </ul>
      </div>
      <div class={style.section}>
        <p class={style.title}>
          <strong>4) System Engineer</strong>, Technobrain ,Inc. Tokyo,Japan (2017/09 ~ 2018/08)
        </p>
        <p class={style.description}>
          As a system engineer of contract software development team, I have developed a internal use buisiness operation web application.
        </p>
      </div>
    </div>)

}