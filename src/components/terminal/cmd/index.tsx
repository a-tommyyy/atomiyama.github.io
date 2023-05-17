import { Fragment, h } from 'preact';
import style from '../style.css'
import { PROMPT } from '../index';
import { CommandHelp } from './help';
import { CommandNotFound } from './error';
import { CommandExperience } from './experience';
import { CommandSkills } from './skills';
import { CommandEducation } from './education';

export type CmdProps = {
  rawInput: string;
  command: string;
  args: string[];
  hidden?: boolean;
}
export const Cmd = (props: CmdProps) => {
  if (props.hidden) return null

  return (
		<Fragment>
			<p>
				<span class={style.prompt}>{PROMPT}</span>
				<span class={style.command}>{props.rawInput}</span>
			</p>
			<CmdOutput {...props} />
		</Fragment>
  )
}

const CmdOutput = ({ command }: CmdProps) => {
  switch (command) {
    case 'help': {
      return <CommandHelp />
    }
    case 'experience': {
      return <CommandExperience />
    }
    case 'skills': {
      return <CommandSkills />
    }
    case 'education': {
      return <CommandEducation />
    }
    case '': {
      return null
    }
    default: {
      return <CommandNotFound command={command} />
    }
  }
}