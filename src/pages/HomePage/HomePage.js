import styled from "styled-components"
import ListContainer from "../../components/ListContainer"
import { useEffect } from "react"

export default function HomePage(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <PageContainer>
            Selecione o filme
            <ListContainer filmes={props.filmes}/>
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
    padding-top: 70px;
`
