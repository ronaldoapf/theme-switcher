export interface AuthProviderProps {
  children: React.ReactNode;
}
export interface AuthProviderType {
  roles: string[];
  loading: boolean;
  signOut: () => Promise<void>;
}