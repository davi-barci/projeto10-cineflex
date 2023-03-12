import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

    const [filmes, setFilmes] = useState([]);
    const [pedido, setPedido] = useState({});

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

		requisicao.then(resposta => {
			setFilmes(resposta.data);
		});

        requisicao.catch(err => {
            console.log(err.response.data);
        })
	}, []);

    if(filmes.length === 0){
        return(<div>Carregando filmes...</div>);
    }

    return (
        <>
        <BrowserRouter>
            <NavContainer>CINEFLEX</NavContainer>

			<Routes>
				<Route path="/" element={<HomePage filmes={filmes}/>} />
				<Route path="/sessoes/:idFilme" element={<SessionsPage />}/>
                <Route path="/assentos/:idSessao" element={<SeatsPage setPedido={setPedido}/>}/>
                <Route path="/sucesso" element={<SuccessPage pedido={pedido}/>}/>
			</Routes>
		</BrowserRouter>
        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
