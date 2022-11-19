const getData = async (url, params=[]) => {
    const UrlWithParams = new URL(url)
    if (params.length !== 0){
        params.map((item) => (UrlWithParams.searchParams.append(Object.keys(item)[0], Object.values(item)[0])))
    }
    let response = await fetch(`${UrlWithParams.href}`);
    var data = await response.json();
    return data
}

export default getData