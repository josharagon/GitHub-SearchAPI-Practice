export const getSearchResults = async (query, lang, sort) => {
  return await fetch(`https://api.github.com/search/repositories?q=${query}+language:${lang ? lang : "''"}&sort=${sort ? sort : "''"}`)
    .then((response) => response.json())
}