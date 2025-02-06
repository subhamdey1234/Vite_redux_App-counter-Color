const initialvalue=1;

const countreducer=(state=initialvalue,action)=>{
    if (action.type==="inc") {
        return state+1;
    }
    else if(action.type==='dec')
    {
        return state-1;
    }
    else if(action.type==='mul_two')
    {
        return state*2;
    }
    else if (action.type==='div_two') {
        return Math.floor(state/2);
    }
    else{
        return state;
    }
}

export default countreducer;