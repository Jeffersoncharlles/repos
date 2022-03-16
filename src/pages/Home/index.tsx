import {
    Container, Form, List, DeleteButton
} from './styles';

import { FaGithub, FaBars, FaTrash } from 'react-icons/fa'
import { SubmitButton } from '../../components/SubmitButton';
import { useCallback, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

interface IRepositories {
    name: string;
}

export const Home = () => {
    const [newRepo, setNewRepo] = useState('')
    const [repositories, setRepositories] = useState<IRepositories[]>([])
    const [loading, setLoading] = useState(false)

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        async function submit() {
            setLoading(true);
            try {
                const response = await api.get(`repos/${newRepo}`)
                const data = {
                    name: response.data.full_name,
                }
                setRepositories([...repositories, data])
                setNewRepo('')
            } catch (error) {

            } finally {
                setLoading(false)
            }
        }
        submit();
        //quando uma ou outra state for atualizada vai chamar o useCallback
    }, [newRepo, repositories])

    const handleDelete = (name: string) => {
        const find = repositories.filter(r => r.name !== name)
        setRepositories(find)
    }

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
                <SubmitButton loading={loading ? 0 : 1} />
            </Form>

            <section>
                <List>
                    {repositories.map((repo) => (
                        <li key={repo.name}>
                            <span>
                                <DeleteButton onClick={() => handleDelete(repo.name)}>
                                    <FaTrash size={14} />
                                </DeleteButton>
                                {repo.name}

                            </span>
                            <Link to='/repo'>
                                <FaBars size={24} />
                            </Link>
                        </li>
                    ))}
                </List>
            </section>
        </Container>
    );
}