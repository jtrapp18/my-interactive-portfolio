import styled from "styled-components";

const StyleScroll = styled.div`
    
    position: absolute;
    cursor: pointer;
    display: flex;
    background-color: rgba(69, 99, 244, 0.5);
    height: 90%;
    width: 50px;
    top: 5%;
    right: 0;

    button {
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 16px;
        position: absolute;
        width: 100%;
    }

    .scroll-up {
        top: 0px;
    }

    .scroll-down {
        top: 100%;
    }

    // .scroll-btn:hover {
    //     background-color: #0056b3;
    // }
`;

const ScrollButtons = ({index, pageCount, scrollDown, scrollUp}) => {

    return (
            <StyleScroll>
                {index > 0 && (
                    <button
                        className="scroll-up"
                        onClick={scrollUp}
                    >
                        ▲
                    </button>
                )}
                {index < pageCount - 1 && (
                    <button
                        className="scroll-down"
                        onClick={scrollDown}
                    >
                        ▼
                    </button>
                )}
            </StyleScroll>
)};

export default ScrollButtons;