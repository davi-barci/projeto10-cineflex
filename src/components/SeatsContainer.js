import styled from "styled-components";

export default function SeatsContainer(props){

    function selecionarAssento(assento){
        if (assento.isAvailable === false){
            alert("Esse assento não está disponível");
        }else if(props.selecionados.includes(assento.id)){
            props.setSelecionados(props.selecionados.filter(elem => elem != assento.id));
        }else{
            props.setSelecionados([...props.selecionados, assento.id]);
        }
    }

    function verificaStatus(assentoAtual){
        if (assentoAtual.isAvailable === false){
            return props.corStatus[2];
        }else if(props.selecionados.includes(assentoAtual.id)){
            return props.corStatus[0];
        }else{
            return props.corStatus[1];
        }
    }

    return(
        <ContainerSeats>
            {props.assentos.map((elem, index) =>
            <SeatItem key={index} cor={verificaStatus(elem)} onClick={() => selecionarAssento(elem)}>{elem.name}</SeatItem>
            )}
        </ContainerSeats>
    );
}

const ContainerSeats = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

const SeatItem = styled.div`
    border: 1px solid ${props => props.cor.borda};         // Essa cor deve mudar
    background-color: ${props => props.cor.background};    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    cursor: pointer;
`
