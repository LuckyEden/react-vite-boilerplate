import axios from "axios";

export const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
})


const errorHandler = (error:any) => {
    const statusCode = error.response?.status

    if (error.code === "ERR_CANCELED") {
        /*notification.error({
            placement: "bottomRight",
            description: "API canceled!",
        })*/
        return Promise.resolve()
    }

    
    if (statusCode && statusCode !== 401) {
        console.error(error)
    }

    return Promise.reject(error)
}

api.interceptors.response.use(undefined, (error) => {
    return errorHandler(error)
})

/*
export function LoadData(path:string, name:string) {
    return function (dispatch:Dispatch) {
        var d:any = {name: name, data: undefined};
        dispatch(setData(d));

        api.get(`${path}`, {
            headers: {
                'mode': 'cors',
                //'x-access-token': getCookie('token')
            },
        }).then((response) => {
            d.data = response.data;
            dispatch(setData(d))
            
        }).catch(error => {
            if (error === undefined || error.response === undefined || error.response.status === undefined) return
            if(error.response.status === 401){
                //dispatch(Logout());
            }
        });
    }
}

export function GetData(path:string, name:string) {
    store.dispatch(LoadData(path, name));
}*/