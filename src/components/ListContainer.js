import MovieContainer from './MovieContainer';
import styled from 'styled-components';

export default function ListContainer(props){
    return (
        <ListContainerStyle>
            {props.filmes.map((elem, index) => 
            <MovieContainer key={index} filmeAtual={elem}/>)}
        </ListContainerStyle>
    );
}

const ListContainerStyle = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`