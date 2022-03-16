import {
    Container, Form,
} from './styles';

import { FaGithub } from 'react-icons/fa'
import { SubmitButton } from '../../components/SubmitButton';
import { useCallback, useState } from 'react';
import api from '../../services/api';

interface IRepositories {
    name: string;
}

export const Home = () => {
    const [newRepo, setNewRepo] = useState('')
    const [repositories, setRepositories] = useState<IRepositories[]>([])

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        async function submit() {
            const response = await api.get(`repos/${newRepo}`)
            const data = {
                name: response.data.full_name,
            }
            setRepositories([...repositories, data])
            setNewRepo('')
        }
        submit();
        //quando uma ou outra state for atualizada vai chamar o useCallback
    }, [newRepo, repositories])



    return (
        <Container>
            <h1>
                <FaGithub size={24} />
                Meus Repositórios
            </h1>

            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Adicionar Repositórios'
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                />


                <SubmitButton />

            </Form>
        </Container>
    );
}