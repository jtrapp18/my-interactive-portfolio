import styled from "styled-components";

const StyledTag = styled.div`
    display: flex;
    justify-content: end;

    span {
        padding: 0px 10px 0px 10px;
        margin: 10px 0px 10px 10px;
        background-color: var(--green);
        color: white;
        border: 2px solid black;
        border-radius: 5px;
        font-size: 15px;
    }
`
const Tags = ({tags}) => {
    return (
        <StyledTag>
            {tags.map(tag=>
                <span key={tag}>
                    {tag}
                </span>
            )}
        </StyledTag>
    );
}

export default Tags;