import styled from "styled-components"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import FooterContainer from "../../components/FooterContainer"
import SessionContainer from "../../components/SessionContainer";

export default function SessionsPage() {

    const { idFilme } = useParams();
    const [sessoes, setSessoes] = useState(null);

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);

        requisicao.then(resposta => {
            setSessoes(resposta.data);
        });

        requisicao.catch(err => {
            console.log(err.response.data);
        })
    }, []);

    if (sessoes === null) {
        return (<div>Carregando Sessões...</div>);
    }

    return (
        <PageContainer>
            Selecione o horário
            <div>
                {sessoes.days.map((elem, index) => 
                <SessionContainer key={index} sessaoAtual={elem}/>)}
            </div>

            <FooterContainer posterFilme={sessoes.posterURL} nomeFilme={sessoes.title}/>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`

