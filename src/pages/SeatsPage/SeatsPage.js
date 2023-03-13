import styled from "styled-components"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import FooterContainer from "../../components/FooterContainer";
import CaptionContainer from "../../components/CaptionContainer";
import SeatsContainer from "../../components/SeatsContainer";
import FormContainer from "../../components/FormContainer";
import LoadingContainer from "../../components/LoadingContainer";

export default function SeatsPage(props) {

    const { idSessao } = useParams();

    const [assentos, setAssentos] = useState(null);
    const [selecionados, setSelecionados] = useState([]);
    const [assentosSelecionados, setAssentosSelecionados] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const statusAssento = ["Selecionado", "Disponível", "Indisponível"];
    const corStatus = [{background: "#1AAE9E", borda: "#0E7D71"}, {background: "#C3CFD9", borda: "#7B8B99"}, {background: "#FBE192", borda: "#F7C52B"}];

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);

        requisicao.then(resposta => {
            setAssentos(resposta.data);
        });

        requisicao.catch(err => {
            console.log(err.response.data);
        })
    }, []);

    if (assentos === null) {
        return(<LoadingContainer texto={"Carregando Assentos..."}/>);
    }

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer 
                assentos={assentos.seats} 
                selecionados={selecionados} 
                setSelecionados={setSelecionados}
                assentosSelecionados = {assentosSelecionados}
                setAssentosSelecionados = {setAssentosSelecionados}
                corStatus = {corStatus}
            />

            <CaptionContainer 
                statusAssento={statusAssento} 
                corStatus={corStatus}
            />

            <FormContainer
                nome = {nome}
                setNome = {setNome}
                cpf = {cpf}
                setCpf = {setCpf}
                selecionados = {selecionados}
                assentosSelecionados = {assentosSelecionados}
                nomeFilme = {assentos.movie.title}
                diaFilme = {assentos.day.date}
                horarioFilme = {assentos.name}
                setPedido = {props.setPedido}
            />

            <FooterContainer 
                posterFilme = {assentos.movie.posterURL}
                nomeFilme = {assentos.movie.title}
                diaFilme = {assentos.day.weekday}
                horarioFilme = {assentos.name}
            />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`


