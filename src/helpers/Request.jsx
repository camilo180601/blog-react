const Request = async(url, method, saveData = "", files = false) => {

    let loading = true;

    let options = {
        method: "GET"
    }

    if (method == "GET" || method == "DELETE") {
        options = {
            method: method
        };
    }

    if (method == "POST" || method == "PUT") {

        let body = JSON.stringify(saveData);
        
        if(files){      
            options = {
                method: method,
                body: saveData,
            };
        }else{   
            options = {
                method: method,
                body,
                headers: {
                    "Content-Type": "application/json"
                }
            };
        }
        
    }

    const request = await fetch(url, options);
    const data = await request.json();

    loading = true;

    return {
        data,
        loading
    }

}

export default Request