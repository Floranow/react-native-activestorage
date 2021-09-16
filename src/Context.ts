import { createContext } from 'react';

type ContextType = {
  host: string;
  mountPath?: string;
  interval?: number;
};

const defaultContext = {
  host: 'http://localhost:3000',
  mountPath: '/rails/active_storage',
  interval: 2000,
};

export const Context = createContext<ContextType>(defaultContext);
export const { Consumer, Provider } = Context;

export default Context;
