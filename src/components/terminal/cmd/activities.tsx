import { h } from 'preact';
import style from './style.css'

export const CommandActivities = () => {
  return (
    <div class={style.output}>
      <strong>Activities :</strong>
      <div class={style.section}>
        <p class={style.title}>
          <strong>Feb 2023)</strong>
        </p>
        <p class={style.description}>
          Release conventional commit stat tool <a href="https://github.com/atomiyama/ccstat"><b>ccstat</b></a>
        </p>
      </div>
      <div class={style.section}>
        <p class={style.title}>
          <strong>December 2019)</strong>
        </p>
        <p class={style.description}>
          <span>
            Presentation <b><i>Build Gem in Rust </i></b>
          </span>
          <span>
            at <a href="https://heiseirb.connpass.com/event/151414/">heisei.rb#9</a> 
          </span>
        </p>
        <p class={style.description}>
            <a href="https://speakerdeck.com/atomiyama/rustdegemwozuo-rou">Speaker Deck</a>
        </p>
      </div>
      <div class={style.section}>
        <p class={style.title}>
          <strong>Oct 2019)</strong>
        </p>
        <p class={style.description}>
          <span>
            Presentation <b><i>FFI & Native Extension </i></b>
          </span>
          <span>
            at <a href="https://heiseirb.connpass.com/event/148650/">heisei.rb#9</a>
          </span>
        </p>
        <p class={style.description}>
          <a href="https://speakerdeck.com/atomiyama/ffi-and-native-extension">Speaker Deck</a>
        </p>
      </div>
      <div class={style.section}>
        <p class={style.title}>
          <strong>Dec 2018)</strong>
        </p>
        <p class={style.description}>
          Release Cursor based pagination gem <a href="https://github.com/studyplus/jinrai">jinrai</a>
        </p>
      </div>
      <div class={style.section}>
        <p class={style.title}>
          <strong>Jun 2018)</strong>
        </p>
        <p class={style.description}>
          Applied Information Technology Engineer Examination
        </p>
      </div>
    </div>)

}