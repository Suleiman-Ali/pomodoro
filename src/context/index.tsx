import {
  createContext,
  FormEvent,
  FormEventHandler,
  ReactNode,
  useEffect,
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

interface ProviderProps {
  children: ReactNode;
}
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
  audio: React.MutableRefObject<HTMLAudioElement>;
  submitHandler: FormEventHandler<HTMLFormElement>;
  optionChangeHandler: (n: number) => void;
  selectColor: (color: string) => void;
  modelChangeHandler: (exp: boolean) => void;
  onChangeHandler: (exp: boolean) => void;
  getCurrent: () => string[];
}

const Context = createContext<ContextTypes>(undefined!);
export default Context;

const bySixty = (n: number) => n * 60;
let POMODORO = bySixty(25);
let SB = bySixty(5);
let LB = bySixty(10);

export function ContextProvider({ children }: ProviderProps): JSX.Element {
  const [pomodoro, setPomodoro] = useState<number>(POMODORO);
  const [sb, setSB] = useState<number>(SB);
  const [lb, setLB] = useState<number>(LB);
  const [option, setOption] = useState<number>(1);
  const [color, setColor] = useState<string>(colors[4]);
  const [on, setOn] = useState<boolean>(false);
  const [model, setModel] = useState<boolean>(false);
  const pomodoroInput = useRef<HTMLInputElement>(undefined!);
  const sbInput = useRef<HTMLInputElement>(undefined!);
  const lbInput = useRef<HTMLInputElement>(undefined!);
  const audio = useRef<HTMLAudioElement>(undefined!);

  useEffect(() => {
    let currentOption = setPomodoro;
    if (option === 2) currentOption = setSB;
    if (option === 3) currentOption = setLB;
    let timer: any = () => setInterval(() => currentOption((n) => n - 1), 1000);
    if (on) timer = timer();
    return () => clearInterval(timer);
  }, [on]);

  useEffect(() => {
    if (pomodoro <= 0) {
      setOn(false);
      setPomodoro(POMODORO);
      audio.current.play();
    }
  }, [pomodoro]);

  useEffect(() => {
    if (sb <= 0) {
      setOn(false);
      setSB(SB);
      audio.current.play();
    }
  }, [sb]);

  useEffect(() => {
    if (lb <= 0) {
      setOn(false);
      setLB(LB);
      audio.current.play();
    }
  }, [lb]);

  const optionChangeHandler = (n: number) => setOption(n);

  const selectColor = (color: string) => setColor(color);

  const modelChangeHandler = (exp: boolean) => setModel(exp);

  const onChangeHandler = (exp: boolean) => setOn(exp);

  const submitHandler: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    if (pomodoroInput.current.value) {
      POMODORO = bySixty(+pomodoroInput.current.value);
      setPomodoro(bySixty(+pomodoroInput.current.value));
    }
    if (sbInput.current.value) {
      SB = bySixty(+sbInput.current.value);
      setSB(bySixty(+sbInput.current.value));
    }

    if (lbInput.current.value) {
      LB = bySixty(+lbInput.current.value);
      setLB(bySixty(+lbInput.current.value));
    }
    setModel(false);
  };

  const getCurrent = (): string[] => {
    let current, CURRENT;

    if (option === 1) {
      current = pomodoro;
      CURRENT = POMODORO;
    }
    if (option === 2) {
      current = sb;
      CURRENT = SB;
    }
    if (option === 3) {
      current = lb;
      CURRENT = LB;
    }

    if (!current || !CURRENT) return [];

    const x = current / 60;
    let minutes = `${Math.floor(x)}`.padStart(2, '0');
    let preSeconds = Math.round(+`0.${`${x}`.split('.')[1]}` * 60);
    let seconds = !preSeconds ? '00' : `${preSeconds}`.padStart(2, '0');
    const text = `${minutes}:${seconds}`;
    const percent = `${((CURRENT - current) / CURRENT) * 100}`;

    return [text, percent];
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
        audio,
      }}
    >
      {children}
    </Context.Provider>
  );
}
