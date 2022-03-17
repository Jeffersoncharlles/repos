import {
    Container, Form, List, DeleteButton
} from './styles';

import { FaGithub, FaBars, FaTrash } from 'react-icons/fa'
import { SubmitButton } from '../../components/SubmitButton';
import { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

interface IRepositories {
    name: string;
}

export const Home = () => {
    const [newRepo, setNewRepo] = useState('')
    const [repositories, setRepositories] = useState<IRepositories[]>([])
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false);

    //DidMount //buscar
    useEffect(() => {
        const repoStorage = localStorage.getItem('@repos');
        if (repoStorage) {
            setRepositories(JSON.parse(repoStorage))
        }
    }, [])




    //DidUpdate //Salvar Alterações
    useEffect(() => {
        localStorage.setItem('@repos', JSON.stringify(repositories));
    }, [repositories])

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        async function submit() {
            setLoading(true);
            try {
                if (newRepo === '') {
                    throw new Error('Voce precisa indicar um repositório');
                }
                const response = await api.get(`repos/${newRepo}`)

                const hasRepo = repositories.find(r => r.name === newRepo)

                if (hasRepo) {
                    throw new Error('Já existe este repositório');
                }

                const data = {
                    name: response.data.full_name,
                }
                setRepositories([...repositories, data])
                setNewRepo('')
            } catch (error) {
                setAlert(true)
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

            <Form onSubmit={handleSubmit} error={alert}>
                <input
                    type="text"
                    placeholder='Adicionar Repositórios'
                    value={newRepo}
                    onChange={(e) => { setNewRepo(e.target.value.trim()); setAlert(false) }}
                />
                <SubmitButton loading={loading ? 1 : 0} />
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
                            <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                                <FaBars size={24} />
                            </Link>
                        </li>
                    ))}
                </List>
            </section>
        </Container>
    );
}