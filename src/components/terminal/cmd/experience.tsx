import { h } from "preact";
import style from "./style.css";

export const CommandExperience = () => {
  return (
    <div className={style.output}>
      <strong>Professional Experience :</strong>
      <div className={style.section}>
        <p className={style.title}>
          <strong>1) Software Engineer Backend Techlead</strong>, Mercari, Inc.
          Tokyo, Japan (2024/10 ~ Now)
        </p>
        <p className={style.description}>
          As a Software Engineer Backend Tech Lead, I was responsible for the
          system design, feature development, and operation of services in the
          HR domain, as well as the technical management of a team of three
          people.
        </p>
        <ul>
          <li>Developing GraphQL API and gRPC.</li>
          <li>Technical management for a team of 3 people.</li>
        </ul>
      </div>

      <div className={style.section}>
        <p className={style.title}>
          <strong>2) Software Engineer Backend</strong>, Mercari, Inc. Tokyo,
          Japan (2023/10 ~ 2024/09)
        </p>
        <p className={style.description}>
          As a Software Engineer Backend, I was responsible for the system
          design, feature development, and operation of services in the HR
          domain.
        </p>
        <ul>
          <li>
            Building a distributed record lock service across multiple services
            within modular monolith application.
          </li>
          <li>Developing GraphQL API and gRPC.</li>
        </ul>
      </div>

      <div className={style.section}>
        <p className={style.title}>
          <strong>3) Customer Reliability Engineer</strong>, Studyplus, Inc.
          Tokyo, Japan (2022/05 ~ Now)
        </p>
        <p className={style.description}>
          A first member of the team. Decrease Customer's anxiety and increase
          Customer's satisfaction by improving the reliability of the service.
        </p>
        <ul>
          <li>
            Building Data Pipeline and Data Warehouse(~500 tables, 1billion
            records)
          </li>
          <li>
            Implement a system to detect messages between users that violate the
            terms of service.(1M messages/month)
          </li>
        </ul>
      </div>

      <div className={style.section}>
        <p className={style.title}>
          <strong>4) Team Leader</strong>, Studyplus, Inc. Tokyo, Japan (2020/01
          ~ Now)
        </p>
        <p className={style.description}>
          As a team leader of 9 people web application group, I have led the
          team to deliver features in the educational field. Examples of actions
          I have taken are as follows.
        </p>
        <ul>
          <li>
            Create a career ladder to clarify the career goals and current
            status of the members
          </li>
          <li>Introduced scrum development and reduced project delays</li>
        </ul>
      </div>

      <div className={style.section}>
        <p className={style.title}>
          <strong>5) Back-End Engineer</strong>, Studyplus, Inc. Tokyo, Japan
          (2018/09 ~ 2020/12)
        </p>
        <p className={style.description}>
          As part of B2B SaaS Web Application Team, I have delivered features to
          improve the learning efficiency of students and teachers.
        </p>
        <ul>
          <li>
            Migrate monolith Ruby on Rails App into REST API and React SPA
          </li>
          <li>Introduce Schema Driven Development process</li>
          <li>
            Implement front-end and back-end across ambiguous systems and
            environment
          </li>
        </ul>
      </div>

      <div className={style.section}>
        <p className={style.title}>
          <strong>6) System Engineer</strong>, Technobrain,Inc. Tokyo, Japan
          (2017/09 ~ 2018/08)
        </p>
        <p className={style.description}>
          As a system engineer of a contract software development team, I have
          developed web applications for internal business operations.
        </p>
      </div>
    </div>
  );
};
