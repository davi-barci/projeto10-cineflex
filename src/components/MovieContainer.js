import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function MovieContainer(props){
    return (
        <MovieContainerStyle>
            <Link to={`/sessoes/${props.filmeAtual.id}`}>
                <img src={props.filmeAtual.posterURL} alt="poster"/>
            </Link>
        </MovieContainerStyle>
    );
}

const MovieContainerStyle = styled.div`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;

    a{
        width: 100%;
        height: 100%;
    }

    img {
        width: 130px;
        height: 190px;
    }
`