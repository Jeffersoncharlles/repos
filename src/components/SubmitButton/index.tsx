import {
    Container,
} from './styles';
import { FaPlus, FaSpinner } from 'react-icons/fa'

interface ISubmitButton {
    loading: number;
}

export const SubmitButton = ({ loading, ...rest }: ISubmitButton) => {

    return (
        <Container loading={loading} onClick={() => { }} type='submit' {...rest} aria-label='Botão Search'>
            {loading ? (<FaSpinner size={24} />) : (<FaPlus size={24} />)}
        </Container>
    );
}