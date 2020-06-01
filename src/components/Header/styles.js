import styled from 'styled-components';

export const Headers = styled.header`
    position: fixed;
    display: flex;
    flex-direction: column;

    width: 100vw;
    padding: 7px 100px;

    background: #000;
    color: #fff;
    z-index: 3;

    a {
        cursor: pointer;
    }

    @media (max-width: 750px){
        padding: 10px 50px;
    }
`;

export const Menu = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;

    .line {
        width: 33px;
        height: 3px;
        background: white;
        margin: 5px;
    }

    .hamburger {
        cursor: pointer;
    }
`;

export const Conteudo = styled.div`
    align-self: center;
    display: flex;
    z-index: -1;
    position: fixed;
    transition: top 0.9s cubic-bezier(1, 0, 0, 1);


    top: ${props => (props.open ? "0%" : "-100%")};
    background: #000;
    height: 100vh;
    width: 100vw;
    list-style: none;
    align-items: center;
    justify-content: center;

    ul {
        list-style: none;
        font-size: 3rem;
        text-align: center;

        li {
            padding: 30px 0;

            a {
                color: #fff;
                letter-spacing: 2px;
                font-family: "Bebas neue", cursive;

                &:hover {
                    transition: color 0.1s ease-in;
                    color: #10e660;
                }
            }
        }
    }
`;
