import {
  createContext,
  FormEvent,
  FormEventHandler,
  ReactNode,
  useRef,
  useState,
} from 'react';

const colors = [
  '#20ab8a',
  '#0f76ca',
  '#e26970',
  '#FC6E72',
  '#fcbc04',
  '#6b51f3',
  '#fa5788',
  '#e92a64',
];

interface ContextTypes {
  pomodoro: number;
  sb: number;
  lb: number;
  option: number;
  colors: string[];
  color: string;
  model: boolean;
  on: boolean;
  POMODORO: number;
  SB: number;
  LB: number;
  pomodoroInput: React.MutableRefObject<HTMLInputElement>;
  sbInput: React.MutableRefObject<HTMLInputElement>;
  lbInput: React.MutableRefObject<HTMLInputElement>;
  submitHandler: FormEventHandler<HTMLFormElement>;
  optionChangeHandler: (n: number) => void;
  selectColor: (color: string) => void;
  modelChangeHandler: (exp: boolean) => void;
  onChangeHandler: (exp: boolean) => void;
  getCurrent: (option: number) => number[];
}

interface ProviderProps {
  children: ReactNode;
}

const Context = createContext<ContextTypes>(undefined!);
export default Context;

let POMODORO = 25 * 60;
let SB = 5 * 60;
let LB = 10 * 60;

export function ContextProvider({ children }: ProviderProps): JSX.Element {
  const [pomodoro, setPomodoro] = useState<number>(POMODORO);
  const [sb, setSB] = useState<number>(SB);
  const [lb, setLB] = useState<number>(LB);
  const [option, setOption] = useState<number>(1);
  const [color, setColor] = useState<string>(colors[1]);
  const [on, setOn] = useState<boolean>(false);
  const [model, setModel] = useState<boolean>(false);
  const pomodoroInput = useRef<HTMLInputElement>(undefined!);
  const sbInput = useRef<HTMLInputElement>(undefined!);
  const lbInput = useRef<HTMLInputElement>(undefined!);

  const optionChangeHandler = (n: number) => setOption(n);
  const selectColor = (color: string) => setColor(color);
  const modelChangeHandler = (exp: boolean) => setModel(exp);
  const onChangeHandler = (exp: boolean) => setOn(exp);
  const submitHandler: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    if (pomodoroInput.current.value) {
      POMODORO = +pomodoroInput.current.value * 60;
      setPomodoro(+pomodoroInput.current.value * 60);
    }

    if (sbInput.current.value) {
      SB = +sbInput.current.value * 60;
      setSB(+sbInput.current.value * 60);
    }

    if (lbInput.current.value) {
      LB = +lbInput.current.value * 60;
      setLB(+lbInput.current.value * 60);
    }

    setModel(false);
  };

  const getCurrent = (option: number): number[] => {
    if (option === 1) return [pomodoro, POMODORO];
    if (option === 2) return [sb, SB];
    if (option === 3) return [lb, LB];
    return [0, 0];
  };

  return (
    <Context.Provider
      value={{
        lb,
        pomodoro,
        sb,
        option,
        colors,
        color,
        optionChangeHandler,
        model,
        lbInput,
        pomodoroInput,
        sbInput,
        submitHandler,
        selectColor,
        on,
        modelChangeHandler,
        onChangeHandler,
        POMODORO,
        SB,
        LB,
        getCurrent,
      }}
    >
      {children}
    </Context.Provider>
  );
}
