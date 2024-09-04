import Button from '../common/Button';

const SearchAllButton = ({setKeyword}) => {
    const searchAll = () => {
        setKeyword('');
    }

    return (
        <Button onClick={searchAll} backgroundColor={'#2478FF'}>전체보기</Button>
    )
}

export default SearchAllButton;