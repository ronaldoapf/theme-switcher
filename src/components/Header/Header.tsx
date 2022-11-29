import { useTheme } from '../../hooks/useTheme';
import { ContainerHeader, Button} from './styles'

const Header = () => {

  const { toggleMode } = useTheme(); 

  return (
    <ContainerHeader>
      <Button onClick={toggleMode}>
        Trocar tema
      </Button>
    </ContainerHeader>
  );
};

export default Header;