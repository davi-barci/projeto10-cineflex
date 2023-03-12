import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SuccessPage(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      const navigate = useNavigate();

    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer>
                <strong><p>Filme e sessão</p></strong>
                <p>{props.pedido.nomeFilme}</p>
                <p>{props.pedido.diaFilme} - {props.pedido.horarioFilme}</p>
            </TextContainer>

            <TextContainer>
                <strong><p>Ingressos</p></strong>
                {props.pedido.assentos.map((elem, index) =>
                    <p key={index}>Assento {elem}</p>
                )}
            </TextContainer>

            <TextContainer>
                <strong><p>Comprador</p></strong>
                <p>Nome: {props.pedido.nome}</p>
                <p>CPF: {props.pedido.cpf}</p>
            </TextContainer>

            <button onClick={() => navigate("/")}>Voltar para Home</button>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`