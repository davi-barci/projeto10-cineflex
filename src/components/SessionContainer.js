import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SessionContainer(props){
    return (
        <Session>
            {props.sessaoAtual.weekday} - {props.sessaoAtual.date}
            <ButtonsContainer>
                {props.sessaoAtual.showtimes.map((elem, index) => 
                <Link key={index} to={`/assentos/${elem.id}`}><button>{elem.name}</button></Link>)}
            </ButtonsContainer>
        </Session>
    );
}

const Session = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;

    a {
        width: 83px;
        text-decoration: none; 
        margin-right: 20px;
    }
`