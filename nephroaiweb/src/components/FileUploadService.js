import axios from "axios";

const api_url = "https://nephroapi.azurewebsites.net/api/nephro_ai";
const upload = (base64String, onUploadProgress) => {

    const data = JSON.stringify({
        "img": base64String
    });

    return axios.post(api_url, data, {
        headers: {
            'Content-Type': 'application/json'
        },
        onUploadProgress,
    });
};

export default upload;