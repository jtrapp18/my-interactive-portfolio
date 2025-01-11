import styled from "styled-components";

const StyleScroll = styled.div`
    
    position: fixed;
    cursor: pointer;
    box-shadow: var(--shadow);
    display: flex;
    background-color: rgba(246, 196, 146, 0.7);
    overflow: hidden;
    border-radius: 20px;
    justify-content: space-between;
    height: 30px;
    transform: translateX(-50%);
    width: 200px;
    max-width: 50%;
    top: 95px;
    left: 50%;

    button {
        color: gray;
        background: None;
        border: none;
        cursor: pointer;
        font-size: 16px;
        width: 100%;
        padding: 0px 20px 0px 20px;
    }

    button.active-section {
        color: var(--dark-green);
    }

    button:hover {
        color: var(--green);
    }
`;

const ScrollButtons = ({containerRef, sectionsRef, currentSectionIndex}) => {

    const chooseIndex = (index) => {
        const container = containerRef.current;
        if (container) {
            // Get the next section index
            const section = sectionsRef.current[index];

            // If the next section exists, scroll to it
            if (section) {
                const scrollDistance = section.offsetTop;
                container.scrollTo({
                    top: scrollDistance,
                    behavior: 'smooth',
                });
            }
        }
    };

    return (
            <StyleScroll>
                <button
                    className={currentSectionIndex===0 ? "active-section" : ""}
                    onClick={() => chooseIndex(0)}
                >
                    ⬤
                </button>
                <button
                    className={currentSectionIndex===1 ? "active-section" : ""}
                    onClick={() => chooseIndex(1)}
                >
                    ⬤
                </button>
                <button
                    className={currentSectionIndex===2 ? "active-section" : ""}
                    onClick={() => chooseIndex(2)}
                >
                    ⬤
                </button>
            </StyleScroll>
)};

export default ScrollButtons;