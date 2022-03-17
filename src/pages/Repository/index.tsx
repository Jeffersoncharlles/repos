import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import api from '../../services/api';
import {
    Container, Owner, BackButton
} from './styles';

interface IRepositoryDetails {
    name: string;
    description?: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

export const Repository = () => {
    const navigation = useNavigate()
    const { repository } = useParams()
    const [repositoryDetail, setRepositoryDetail] = useState<IRepositoryDetails>({} as IRepositoryDetails)
    const [repositoryIssues, setRepositoryIssues] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const load = async () => {

            //array de promise
            const [repositoryData, issuesData] = await Promise.all([
                api.get(`/repos/${repository}`),
                api.get(`/repos/${repository}/issues`, {
                    params: {
                        state: 'open',
                        per_page: 5
                    }
                })
            ]);

            setRepositoryDetail(repositoryData.data)
            setRepositoryIssues(issuesData.data)
            setIsLoading(false);

            console.log(repositoryData.data)
            // console.log(issuesData.data)

            // const response = await api.get(`/repo/${repository}`)
        }

        load()
    }, [repository])

    const handleBack = () => {
        navigation('/');
    }

    if (isLoading) {
        return (
            <Loading>
                <h1>Carregando...</h1>
            </Loading>
        )
    }



    return (
        <Container>
            <BackButton onClick={() => handleBack()}>
                <FaArrowLeft size={24} />
            </BackButton>
            <Owner>
                <img src={repositoryDetail.owner?.avatar_url} alt={repositoryDetail.owner?.login} />
                <h1>{repositoryDetail.name}</h1>
                <p>{repositoryDetail.description}</p>
            </Owner>

        </Container>
    );
}