import axios from 'axios'

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
      console.log('fetchShow get request response', res)
      return res
    })
    .catch(err => console.log(err))
}