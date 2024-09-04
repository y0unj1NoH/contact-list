import styled, { css } from 'styled-components';
import SearchInput from "./SearchInput";
import SearchAllButton from "./SearchAllButton";


const SearchTemplateBlock = styled.div`
    border: 1px solid #e9ecef;

    padding: 1rem;

    display: flex;
    // justify-content: space-between;
    gap: 1rem;

    // 왜 이걸 안하면 높이가 자동으로 맞춰지는 거지? 오히려 좋아
    // align-items: center;

    & > *:first-child {
        // border: 1px solid red;
        flex: 7;

        & input{
            width: 100%;
        }
    }
        
    & > *:last-child {
       flex: 3;
    }
`

const SearchTemplate = ({ setKeyword, ...props }) => {
    return (
        <SearchTemplateBlock className="search" {...props}>
            <SearchInput setKeyword={setKeyword} />
            <SearchAllButton setKeyword={setKeyword} />
        </SearchTemplateBlock>
    );
};

export default SearchTemplate;

