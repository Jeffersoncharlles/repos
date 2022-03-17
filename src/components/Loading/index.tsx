import {
    Container,
} from './styles';
interface ILoading {
    children: React.ReactNode
}

export const Loading = ({ children }: ILoading) => {

    return (
        <Container>
            {children}
        </Container>
    );
}