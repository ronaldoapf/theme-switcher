import { createContext, useCallback, useEffect, useState } from 'react';
import Keycloak from 'keycloak-js'

import { AuthProviderProps, AuthProviderType } from './types';
import { axiosClient } from '@common/resources/api';
import { interceptorHandler } from '@common/utils/api';

export const AuthContext = createContext<AuthProviderType>({ loading: true } as AuthProviderType);

const initOptions = {
  url: import.meta.env.VITE_KEYCLOAK_URL_AUTH,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENTID
}

const keycloak = new Keycloak(initOptions);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [roles, setRoles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  
  const handleAuth = useCallback(async (authenticated: boolean) => {
    if(authenticated) {
      localStorage.setItem('@Token', keycloak?.token ?? "")
      setRoles(keycloak.resourceAccess?.[import.meta.env.VITE_KEYCLOAK_CLIENTID].roles ?? [])
    }
    interceptorHandler.setTokenInterceptor()
    setAuthenticated(authenticated)
    setLoading(false)
  }, [])

  const signOut = useCallback(async () => {
    interceptorHandler.removeTokenInterceptor()
    localStorage.removeItem('@Token');
    await keycloak.logout();
  }, [])

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required', checkLoginIframe: false })
      .then(handleAuth)
      .catch(err => {
        throw new Error(err)
      })
  }, []);

  return <AuthContext.Provider value={{ loading, signOut, roles }}>
    {children}
  </AuthContext.Provider>
}