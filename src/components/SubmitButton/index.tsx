import {
    Container,
} from './styles';
import { FaPlus } from 'react-icons/fa'


export const SubmitButton = ({ ...rest }) => {

    return (
        <Container onClick={() => { }} type='submit' {...rest} aria-label='Botão Search'>
            <FaPlus size={24} />
        </Container>
    );
}