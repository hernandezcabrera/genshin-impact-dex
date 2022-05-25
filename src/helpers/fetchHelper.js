export const fetchHelpers = (endpoint, data, method = "GET") => {
    const url = encodeURI(endpoint);
    // console.20g({url});
    if (method === "GET"){
        fetch(url);
    } else
    return fetch(url,{
        method,
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
};
