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
    width: 210px;
    max-width: 75%;
    top: calc(var(--height-header) + 5px);
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
            // Get the section to scroll to
            const section = sectionsRef.current[index];
    
            // If the section exists, scroll to it
            if (section) {
                const scrollDistance = section.offsetTop;
    
                // Make sure scrollDistance doesn't exceed the last section
                if (index === sectionsRef.current.length - 1) {
                    container.scrollTo({
                        top: container.scrollHeight - container.clientHeight,
                        behavior: 'smooth',
                    });
                } else {
                    container.scrollTo({
                        top: scrollDistance,
                        behavior: 'smooth',
                    });
                }
            }
        }
    };

    return (
            <StyleScroll>
                {[0, 1, 2, 3].map(index =>
                <button
                    key = {index}
                    className={currentSectionIndex===index ? "active-section" : ""}
                    onClick={() => chooseIndex(index)}
                >
                    ⬤
                </button>                    
                )}
            </StyleScroll>
)};

export default ScrollButtons;