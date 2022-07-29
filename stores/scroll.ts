import { useEffect, useState } from "react";

type Observer<T> = (value: T) => void;
type Setter<T> = (value: T) => T;
type Observable<T> = {
  value: T;
  subscribe(listener: Observer<T>): () => void;
  set(setter: Setter<T>): void;
  getValue(): T;
};
function createObservable<T>(initialValue: T): Observable<T> {
  let value = structuredClone(initialValue);
  const listeners = new Set<Observer<T>>();
  const notify = () => listeners.forEach((listener) => listener(value));
  return {
    value,
    subscribe(listener: Observer<T>) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    set(setter: Setter<T>) {
      const newValue = setter(value);
      if (newValue !== value) {
        value = newValue;
      }
      notify();
    },
    getValue() {
      return value;
    },
  };
}

type ScrollStore = {
  top: Observable<number>;
  height: Observable<number[]>;
  position: {
    landing: number;
    about: number;
    projects: number;
    blog: number;
    contact: number;
  };
};

export const scroll: ScrollStore = {
  top: createObservable(0),
  height: createObservable([]),
  position: {
    landing: 0,
    about: 0,
    projects: 0,
    blog: 0,
    contact: 0,
  },
};

export const useObservable = <T extends Observable<any>>(obs: T) => {
  const [value, setValue] = useState(obs.getValue());
  useEffect(() => {
    const unsubscribe = obs.subscribe((e) => {
      setValue(e);
    });
    return () => {
      unsubscribe();
    };
  }, [obs]);
  return [value, obs.set];
};
