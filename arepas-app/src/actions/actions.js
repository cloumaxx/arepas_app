// log actions
export const log = () =>{
    return{
        type: 'log',
    }
}

export const logout = () =>{
    return{
        type: 'logout'
    }
}

// shopping car actions
export const shopitem = (arepa) =>{
    return{
        type: 'shop',
        payload:arepa
    }
}