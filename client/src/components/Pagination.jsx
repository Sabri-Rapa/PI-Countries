export default function Pagination({countriesPerPage, allCountries, currentPage, pagination}){
    const pageNumber = []

    for(let i = 0; i<Math.ceil(allCountries/10); i++){
        pageNumber.push(i+1)
    }
    return (
        <nav>
            <ul>
            {currentPage > 1 ? 
            <button onClick={() => pagination(currentPage - 1)}>
                <a>Volver</a>
            </button> :
            null}
            <button onClick={() => pagination(currentPage)}>
                    <a>{currentPage}</a>
            </button>
            {currentPage < allCountries/10 ?
            <button onClick={() => pagination(currentPage + 1)}>
                <a>Siguiente</a>
            </button> :
            null}
                {/* {pageNumber && pageNumber.map(number => (
            <button onClick={()=>pagination(number)}>{number}</button>
                ))} */}
            </ul>
        </nav>
    )

}