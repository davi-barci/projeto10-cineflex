import styled from "styled-components";

export default function CaptionContainer(props){
    return (
        <Container>
            {props.statusAssento.map((elem, index) => 
            <CaptionItem key={index}>
                <CaptionCircle backgroundColor={props.corStatus[index].background} bordaColor={props.corStatus[index].borda}/>
                {elem}
            </CaptionItem>
            )}
        </Container>
    );
}


const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid ${props => props.bordaColor};         // Essa cor deve mudar
    background-color: ${props => props.backgroundColor};    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`