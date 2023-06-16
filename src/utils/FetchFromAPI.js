import axios from 'axios';

const BASE_URL ='https://youtube-v31.p.rapidapi.com'
const options = {
  params: {

    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '6396245570mshfe06f05128dd90bp1e52e9jsn25cdaf421b6c',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



export const  fetchFromAPI =async(url)=>{
    const { data } =await axios.get (`${BASE_URL}/${url}`,options);
    return data;

}
