const searchBarElmt = document.getElementsByClassName("searchBar")[0];
const quoteElmt = document.getElementsByClassName("Quote")[0];
const fetchTypeElmt = document.getElementsByClassName("searchType")[0];
let searchType;
function fetchType(Type)
{
    if(Type == 'Random')
    {
        fetchTypeElmt.children[1].classList.remove('Active');
        fetchTypeElmt.children[2].classList.remove('Active');
        fetchTypeElmt.children[0].classList.add('Active');
        document.getElementsByClassName("inputBox")[0].style.display = 'none'; 
        searchAnime(0)
    }
    else if(Type == 'Anime')
    {
        fetchTypeElmt.children[0].classList.remove('Active');
        fetchTypeElmt.children[2].classList.remove('Active');
        fetchTypeElmt.children[1].classList.add('Active');
        document.getElementsByClassName("inputBox")[0].style.display = 'grid'; 
        searchType = 1;
    }
    else if(Type == 'Character')
    {
        fetchTypeElmt.children[1].classList.remove('Active');
        fetchTypeElmt.children[0].classList.remove('Active');
        fetchTypeElmt.children[2].classList.add('Active');
        document.getElementsByClassName("inputBox")[0].style.display = 'grid'; 
        searchType = 2;
    }
}
function searchAnime(searchType)
{
    if(searchType == 0)
    {
        fetch("https://animechan.xyz/api/random")
        .then((response) => response.json())
        .then(quote => quoteElmt.textContent = `${quote.quote}`)
    }
    else if (fetchType == 1) {
        fetch(`https://animechan.xyz/api/random/anime?title=${searchBarElmt.value}`)
        .then(response => response.json())
        .then(quote => quoteElmt.textContent = `${quote.quote}`)
    } else {
        fetch("https://animechan.xyz/api/random/character?name=saitama")
        .then((response) => response.json())
        .then((quote) => quoteElmt.textContent = `${quote.quote}`)        
    }   
}
