import { h, Fragment } from 'preact';
import style from "./style.css";
import { useCmd } from './cmd/useCmd';
import { Cmd } from './cmd';

export const PROMPT = "guest@atomiyama.dev:~$"

export const Terminal = () => {
	const {
		formRef,
		inputRef,
		commandProps,
		handleExecCmd,
	} = useCmd()

  return (
    <div class={style.terminal}>
      <div class={style.welcome}>
        <p>Hello, there!</p>
        <p>Welcome to atomiyama's CLI resume.</p>
        <p>Type "help" to see the list of available commands.</p>
      </div>
      {commandProps.map((props, i) => (
        <Fragment key={`history_${i}`}><Cmd {...props} /></Fragment>
      ))}
      <Prompt handleExecCmd={handleExecCmd} formRef={formRef} inputRef={inputRef} />
    </div>
  )
}

const Prompt = ({ handleExecCmd, formRef, inputRef }) => {
	const handleSubmit = (e) => {
		e.preventDefault()
		const input = e.target.command.value;
		handleExecCmd(input);
		// reset input field
		e.target.command.value = '';
	}

	return (
		<form ref={formRef} id="activeprompt" class={style.activeprompt} onSubmit={handleSubmit}>
			<span class={style.prompt}>{PROMPT}</span>
			<input ref={inputRef} type="text" name="command" class={style.command} autofocus autocomplete="off" />
		</form>
	)
}
