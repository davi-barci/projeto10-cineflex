import { useState, useEffect } from 'react';
import axios from 'axios';
import NavContainer from "./components/NavContainer";
import LoadingContainer from './components/LoadingContainer';
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
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
        return(<LoadingContainer texto={"Carregando Filmes..."}/>);
    } 

    return (
        <>
        <BrowserRouter>
            <NavContainer/>
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


