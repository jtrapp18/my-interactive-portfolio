import styled from "styled-components";

const StyledTag = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;

    label {
        color: var(--green);
    }

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
const Tags = ({tags, tagType}) => {
    return (
        <StyledTag>
            <label>{tagType ? `${tagType}:` : "Tags:"}</label>
            {tags.map(tag=>
                <span key={tag}>
                    {tag}
                </span>
            )}
        </StyledTag>
    );
}

export default Tags;