import styled from "styled-components";

const StyleScroll = styled.div`
    
    position: fixed;
    cursor: pointer;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    background-color: rgba(195, 236, 168, 0.9);
    overflow: hidden;
    border-radius: 20px;
    justify-content: space-between;
    height: 200px;
    max-height: 50%;
    transform: translateY(-50%);
    width: 30px;
    top: calc(50% + 45px);
    right: 8%;

    button {
        color: gray;
        background: None;
        border: none;
        cursor: pointer;
        font-size: 16px;
        width: 100%;
        padding: 20px 0px 20px 0px;
    }

    button.active-section {
        color: var(--green);
    }

    button:hover {
        color: var(--light-green);
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