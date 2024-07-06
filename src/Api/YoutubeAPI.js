import axios from 'axios';
const Part = 'snippet';
const MaxResult = 10;

const YoutubeApi = () => axios.create({
        baseURL : 'https://www.googleapis.com/youtube/v3',
        params : {
            part : Part,
            maxResults : MaxResult,
        }})

export default YoutubeApi