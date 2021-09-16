import React from 'react';
import { Provider } from './Context';

type Props = {
  host: string;
  mountPath?: string;
  interval?: number;
};

const ActiveStorageProvider: React.FC<Props> = ({
  host,
  mountPath,
  interval,
  children,
}) => <Provider value={{ host, mountPath, interval }}>{children}</Provider>;

export default ActiveStorageProvider;
