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
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => inputRef.current.focus(), []);
  const inputValueMemo = useRef<string>('');
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // formにフォーカスがない状態でEnterが押されたらformのinputにフォーカスする
      if (e.key === 'Enter' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }

      // historyIndexが最大値のときその時点でのinputの値をinputValueMemoに保存する
      if (historyIndex === results.length) {
        inputValueMemo.current = inputRef.current?.value || '';
      }
      // 上下矢印キーで履歴を遡れるようにする
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = results[historyIndex  - 1];
        if (prev && inputRef.current) {
          inputRef.current.value = prev.rawInput;
          setHistoryIndex(current => current - 1);
        }
      }
      // 下矢印キーで履歴を進められるようにする
      // ただし、最新の履歴まで進んだ場合は、もとの入力を復元する
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = results[historyIndex + 1];
        if (next && inputRef.current) {
          inputRef.current.value = next.rawInput;
          setHistoryIndex(current => current + 1);
        } else {
          inputRef.current.value = inputValueMemo.current;
          setHistoryIndex(results.length);
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [results, historyIndex])

  const handleExecCmd = (input: string) => {
    const command = input.split(' ')[0];
    const args = input.split(' ').slice(1);
    if (command === 'clear') {
      return setResults(results => results.map(result => ({...result, hidden: true })))
    }

    const result = {
      rawInput: input,
      command,
      args,
    }
    setResults(results=> [...results, result])
    setHistoryIndex(current => current + 1);
  }

  return {
    formRef,
    inputRef,
    handleExecCmd,
    commandProps: results,
  }
}