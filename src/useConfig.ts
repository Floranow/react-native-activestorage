import { useContext } from 'react';
import Context from './Context';

const useConfig = () => {
  const config = useContext(Context);
  const mountPath = config.mountPath || '/rails/active_storage';
  const interval = config.interval || 2000;
  const url = `${config.host}${mountPath}`;

  return {
    ...config,
    mountPath,
    directUploadsUrl: `${url}/direct_uploads`,
    interval,
  };
};

export default useConfig;
