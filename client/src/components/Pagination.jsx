export default function Pagination({countriesPerPage, allCountries, currentPage, pagination}){
    const pageNumber = []

    for(let i = 0; i<Math.ceil(allCountries/10); i++){
        pageNumber.push(i+1)
    }
    return (
        <nav>
            <ul>
            <h3>{currentPage}</h3>

            {
            <button  onClick={() => pagination(currentPage - 1)}   disabled={currentPage === 1}>
                Back
            </button> }

            {/* <button onClick={() => pagination(currentPage)}>
                    <a>{currentPage}</a>
            </button> */}

            {currentPage < allCountries/10 ?
            <button onClick={() => pagination(currentPage + 1)} >
                Next
            </button> :
            null}
            </ul>
        </nav>
    )

}