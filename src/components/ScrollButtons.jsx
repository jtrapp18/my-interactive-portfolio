import styled from "styled-components";

const StyleScroll = styled.div`
    
    position: fixed;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    background-color: rgba(69, 99, 244, 0.5);
    justify-content: space-between;
    height: 50%;
    transform: translateY(-50%);
    width: 50px;
    top: 50%;
    right: 5%;

    button {
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 16px;
        width: 100%;
    }

    // .scroll-btn:hover {
    //     background-color: #0056b3;
    // }
`;

const ScrollButtons = ({containerRef, sectionsRef, setCurrentSectionIndex}) => {

    const chooseIndex = (index) => {
        const container = containerRef.current;
        if (container) {
            // Get the next section index
            // const nextSectionIndex = currentSectionIndex + 1;
            const section = sectionsRef.current[index];

            // If the next section exists, scroll to it
            if (section) {
                const scrollDistance = section.offsetTop;
                container.scrollTo({
                    top: scrollDistance,
                    behavior: 'smooth',
                });

                // Update the current section index
                setCurrentSectionIndex(index);
            }
        }
    };

    return (
            <StyleScroll>
                <button
                    onClick={() => chooseIndex(0)}
                >
                    1
                </button>
                <button
                    onClick={() => chooseIndex(1)}
                >
                    2
                </button>
                <button
                    onClick={() => chooseIndex(2)}
                >
                    3
                </button>
            </StyleScroll>
)};

export default ScrollButtons;