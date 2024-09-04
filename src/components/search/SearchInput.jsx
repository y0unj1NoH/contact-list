import styled, { css } from 'styled-components';
import LabelInput from "../common/LabelInput";

const SearchInput = ({ setKeyword }) => {
    const onKeyUp= (e) => {
        if (e.key === "Enter") {
            const keyword = e.target.value;
            setKeyword(keyword.toLowerCase().trim());                
        }
    }

    return (
        <LabelInput
            onKeyUp={onKeyUp}
            placeholder="검색어를 입력하세요"
        
        />

    );
}

export default SearchInput;