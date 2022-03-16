import {
    Container,
} from './styles';
import { FaPlus } from 'react-icons/fa'

export const SubmitButton = ({ ...rest }) => {

    return (
        <Container {...rest}>
            <FaPlus size={24} />
        </Container>
    );
}