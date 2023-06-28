const endpoint=`https://www.thecocktaildb.com/api/json/v1/1/search.php?page=${page}`


function paginationtrapper(info){
    let template= ``
    for (let index = 1; index <= info.pages; index++) {
        template+=`
        <div class="page">
        <a href="index.html?page=${index}">${index}</>
        </div>
        ` 
    }
    pagination.innerHTML= template

}