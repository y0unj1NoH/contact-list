import SearchInput from "./SearchInput";
import SearchAllButton from "./SearchAllButton";

const SearchTemplate = ({ setKeyword, ...props }) => {
    const SearchTemplateBlock = 'div';
    return (
        <SearchTemplateBlock className="search" {...props}>
            <SearchInput setKeyword={setKeyword} />
            <SearchAllButton setKeyword={setKeyword} />
        </SearchTemplateBlock>
    );
};

export default SearchTemplate;

