import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import axios from "axios";

export default function FormContainer(props){

    const navigate = useNavigate();

    function finalizarCompra(event){
        event.preventDefault();

        if (props.selecionados.length === 0){
            alert("Você precisa selecionar pelo menos um assento para continuar...");
            return;
        }else{
            const body = {ids: props.selecionados, name: props.nome, cpf: props.cpf};

            const requisicao = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", body);

            requisicao.then(() => navigate("/sucesso"));
            requisicao.catch(err => {
                console.log(err.response.data);
            });
        }
    }

    return (
        <Form onSubmit={finalizarCompra}>
            Nome do Comprador:
            <input type="text" placeholder="Digite seu nome..." required onChange={e => props.setNome(e.target.value)}/>

            CPF do Comprador:
            <input type="text" placeholder="Digite seu CPF..." required onChange={e => props.setCpf(e.target.value)}/>

            <button type="submit">Reservar Assento(s)</button>
        </Form>
    );
}

const Form = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
        cursor:pointer;
    }
    input {
        width: calc(100vw - 60px);
    }
`
