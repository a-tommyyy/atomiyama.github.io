import { h } from 'preact';
import style from './style.css'

export const CommandSkills = () => {
  return (
    <div class={style.output}>
      <strong>Skills :</strong>
      <div class={style.section}>
        <p class={style.title}>
          Software Development
        </p>
        <ul>
          <li>Ruby</li>
          <li>Node.js</li>
          <li>Go</li>
          <li>Python</li>
          <li>Rust</li>
        </ul>
      </div>
      <div class={style.section}>
        <p class={style.title}>
          Data Engineering
        </p>
        <ul>
          <li>digdag</li>
          <li>embulk</li>
          <li>GCP BigQuery</li>
          <li>GCP Datastream</li>
          <li>GCP Dataform</li>
        </ul>
      </div>
      <div class={style.section}>
        <p class={style.title}>
          Web Development
        </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript/TypeScript</li>
          <li>React/Next.js</li>
          <li>Ruby on Rails</li>
          <li>Sidekiq</li>
        </ul>
      </div>
      <div class={style.section}>
        <p class={style.title}>
          Misc
        </p>
        <ul>
          <li>Git</li>
          <li>Scrum Development</li>
          <li>Schema Driven Development</li>
          <li>Interviewing</li>
          <li>Team organization</li>
        </ul>
      </div>
      <div class={style.section}>
        <p class={style.title}>
          Interests
        </p>
        <ul>
          <li>Engineering excellence</li>
          <li>Authorization and Authentication</li>
          <li>Machine Learning</li>
        </ul>
      </div>
    </div>)

}