import { useEffect, useRef, useState } from "preact/hooks";
import { CmdProps } from ".";

type UseCmd = {
  formRef: React.RefObject<HTMLFormElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  handleExecCmd: (input: string) => void;
  commandProps: CmdProps[];
}

export const useCmd = (): UseCmd => {
  // To scroll to bottom of terminal when new command is entered
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => formRef.current.scrollIntoView({ behavior: "smooth" }));

  // To restore history when user presses up/down arrow keys
  const [results, setResults] = useState<CmdProps[]>([]);

  // formにフォーカスがない状態でEnterが押されたらformのinputにフォーカスする
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [])

  const handleExecCmd = (input: string) => {
    console.log(input)
    const command = input.split(' ')[0];
    const args = input.split(' ').slice(1);
    if (command === 'clear') {
      return setResults([])
    }

    const result = {
      rawInput: input,
      command,
      args,
    }
    setResults(results=> [...results, result])
  }

  return {
    formRef,
    inputRef,
    handleExecCmd,
    commandProps: results,
  }
}