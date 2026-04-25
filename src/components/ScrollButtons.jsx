import styled from "styled-components";

const StyleScroll = styled.div`
    
    position: fixed;
    cursor: pointer;
    right: 0;
    display: flex;
    flex-direction: column;
    left: max(70%, 550px);
    transform: translateX(50%);

    button {
        background: white;
        border-radius: 50%;
        border: 2px solid var(--dark-green);
        color: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        margin: 20px 0;
        width: 15px;
        height: 15px;
        padding: 0;
        
        // box-shadow: 
        //     0 0 8px var(--dark-green),
        //     0 0 20px var(--dark-green),
        //     0 0 30px rgba(0, 128, 0, 0.6);
    }

    button.active-section {
        background: var(--dark-green);
        width: 20px;
        height: 20px;
    }

    button:hover {
        background: var(--green);
        width: 15px;
        height: 15px;
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