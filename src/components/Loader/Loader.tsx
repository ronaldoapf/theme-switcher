import CircleLoader from '@assets/circleLoader.svg';
import { LoaderContainer } from './styles';

export const Loader = () => {
  return (
    <LoaderContainer>
      <figure>
        <img src={CircleLoader} />
      </figure>
    </LoaderContainer>    
  );
};

