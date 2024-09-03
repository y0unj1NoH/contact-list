import Button from '../common/Button';

const SearchAllButton = ({setKeyword}) => {
    const searchAll = () => {
        setKeyword('');
    }

    return (
        <Button onClick={searchAll}>전체보기</Button>
    )
}

export default SearchAllButton;