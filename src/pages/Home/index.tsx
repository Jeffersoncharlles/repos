import {
    Container, Form,
} from './styles';

import { FaGithub } from 'react-icons/fa'
import { SubmitButton } from '../../components/SubmitButton';

export const Home = () => {

    return (
        <Container>
            <h1>
                <FaGithub size={24} />
                Meus Repositórios
            </h1>

            <Form onSubmit={() => { }}>
                <input type="text" placeholder='Adicionar Repositórios' />


                <SubmitButton />

            </Form>
        </Container>
    );
}