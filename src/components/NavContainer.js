import styled from "styled-components";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavContainer(){
    const currentLocation = useLocation();
    const navigate = useNavigate();

    return (
        <NavBar>
            {(currentLocation.pathname !== "/" && currentLocation.pathname !== "/sucesso") &&
                <button data-test="go-home-header-btn" onClick={()=>navigate(-1)}>
                    <FiArrowLeftCircle/>
                </button>
            }
            CINEFLIX
        </NavBar>
    );
}


const NavBar = styled.div`
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

    button{
        width: 35px;
        height: 35px;
        background-color: transparent;
        cursor: pointer;
        border-width: 0;
        padding: 0;
        position: absolute;
        left: 10px;
        svg{
            font-size: 35px;
            display: block;
            color: #E8833A;
        }
    }
`;