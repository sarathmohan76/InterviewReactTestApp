import axios from "axios";
const DUMMY_DATA ={data:[
    {"name":"Nitin",
    "age": 40
    },
    {"name":"aadi",
    "age": 8
    }
    ]}
export default async function AxiosGetApi(url){
    const responseData = axios.get(url);
    return responseData;
}