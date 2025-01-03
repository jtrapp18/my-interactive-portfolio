import { useRef } from "react";

const ChooseSection = (containerRef, sectionsRef, currentSectionIndex, setCurrentSectionIndex) => {

    // const containerRef = useRef(null);  // Reference for the main scroll container
    // const sectionsRef = useRef([]);

    // Function to scroll the container by a certain amount
    const scrollDown = () => {
        const container = containerRef.current;
        if (container) {
            // Get the next section index
            const nextSectionIndex = currentSectionIndex + 1;
            const nextSection = sectionsRef.current[nextSectionIndex];

            // If the next section exists, scroll to it
            if (nextSection) {
                const scrollDistance = nextSection.offsetTop;
                container.scrollTo({
                    top: scrollDistance,
                    behavior: 'smooth',
                });

                // Update the current section index
                setCurrentSectionIndex(nextSectionIndex);
            }
        }
    };

    // Function to scroll the container by a certain amount (scroll up)
    const scrollUp = () => {
        const container = containerRef.current;
        if (container) {
            // Get the previous section index
            const prevSectionIndex = currentSectionIndex - 1;
            const prevSection = sectionsRef.current[prevSectionIndex];

            // If the previous section exists, scroll to it
            if (prevSection) {
                const scrollDistance = prevSection.offsetTop;
                container.scrollTo({
                    top: scrollDistance,
                    behavior: 'smooth',
                });

                // Update the current section index
                setCurrentSectionIndex(prevSectionIndex);
            }
        }
    };

return [scrollDown, scrollUp]
}

export default ChooseSection;