import { Fragment, h } from 'preact';
import style from '../style.css'
import { PROMPT } from '../index';
import { CommandHelp } from './help';
import { CommandNotFound } from './error';
import { CommandExperience } from './experience';

export type CmdProps = {
  rawInput: string;
  command: string;
  args: string[];
}
export const Cmd = ({ command, args, rawInput }: CmdProps) => {
  return (
		<Fragment>
			<p>
				<span class={style.prompt}>{PROMPT}</span>
				<span class={style.command}>{rawInput}</span>
			</p>
			<CmdOutput command={command} args={args} rawInput={rawInput} />
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
    case '': {
      return null
    }
    default: {
      return <CommandNotFound command={command} />
    }
  }
}