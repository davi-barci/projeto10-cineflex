import styled from "styled-components";
import loadingGif from "../assets/loading.gif";

export default function LoadingContainer(props){
    return(
        <Loading>
            <img src={loadingGif}/>
            <p>{props.texto}</p>
        </Loading>
    );
}

const Loading = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        margin-top: 10px;
        color: #E8833A;
        font-size: 35px;
    }
`

