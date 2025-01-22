import { useEffect, useRef, useState } from "preact/hooks";
import { CmdProps } from ".";

type UseCmd = {
  formRef: React.RefObject<HTMLFormElement>;
  handleExecCmd: (input: string) => void;
  commandProps: CmdProps[];
};

export const useCmd = (): UseCmd => {
  // To scroll to bottom of terminal when new command is entered
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => formRef.current.scrollIntoView({ behavior: "smooth" }));

  // To restore history when user presses up/down arrow keys
  const [results, setResults] = useState<CmdProps[]>([]);

  const handleExecCmd = (input: string) => {
    const command = input.split(" ")[0];
    const args = input.split(" ").slice(1);
    if (command === "clear") {
      return setResults([]);
    }

    const result = {
      rawInput: input,
      command,
      args,
    };
    setResults((results) => [...results, result]);
  };

  return {
    formRef,
    handleExecCmd,
    commandProps: results,
  };
};

