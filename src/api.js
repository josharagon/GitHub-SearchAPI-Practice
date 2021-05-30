export const getSearchResults = (query, lang, sort) => {
  return fetch(`https://api.github.com/search/repositories?q=${query}+language:${lang ? lang : ''}&sort=${sort ? sort : ''}`)
            .then((response) => response.json())
}