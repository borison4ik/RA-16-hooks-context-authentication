import { createContext } from 'react';

type TAuthContext = {
  token: any | null;
  profile: any | null;
  authError: string | null;
  onLogin?(login?: string, password?: string): void;
  onLogout?(): void;
  getProfile?(token: string): void;
};
const AuthContext = createContext<TAuthContext>({
  token: null,
  profile: null,
  authError: null,
});

export default AuthContext;
