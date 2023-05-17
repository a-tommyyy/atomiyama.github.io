import { h } from 'preact';
import style from './style.css'

export const CommandEducation = () => {
  return (
    <div class={style.output}>
      <strong>Education :</strong>
      <div class={style.section}>
        <p class={style.title}>
          Iwate Prefectural University(2013~2017)
        </p>
        <p class={style.description}>
          <strong>Unfinished</strong>
        </p>
        <p class={style.description}>
          Completed 66 Credits towards a Bachelor of Policy Management
        </p>
      </div>
    </div>)

}