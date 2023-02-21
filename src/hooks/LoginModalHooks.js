import { LoginModalPlugin } from '@component/LoginDialog';

export default function useLoginModal(opts) {
  const open = (opts) => {
    LoginModalPlugin.open();
  };

  const close = (opts) => {
    LoginModalPlugin.close();
  };

  return {
    open,
    close
  };
}
