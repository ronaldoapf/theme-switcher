import { useAuth } from '@hooks/useAuth';
import { useTheme } from '../../../hooks/useTheme';
import { ContainerHeader, Button} from './styles'

export const Topbar = () => {
  const { toggleMode } = useTheme(); 
  const { loading, signOut, roles } = useAuth();

  return (
    <ContainerHeader>
      <Button onClick={toggleMode}>
        Trocar tema
      </Button>
      <Button onClick={signOut}>
        Sair
      </Button>
    </ContainerHeader>
  );
};