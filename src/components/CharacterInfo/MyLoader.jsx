import { ColorRing } from 'react-loader-spinner'
import { WrapperStyled } from './MyLoader.styled';
import PropTypes from 'prop-types';

const MyLoader = ({ loading }) => {
    

  return (
    
    
    <WrapperStyled>
    <ColorRing
  visible={loading}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
        wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
    </WrapperStyled>)
}

MyLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
}

export default MyLoader;