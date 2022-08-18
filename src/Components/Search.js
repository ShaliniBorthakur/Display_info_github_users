import React,{useState} from 'react'
import Userprof from './Userprof';
function Search() {
    const [userName,setUserName] = useState("");
    const [data,setData] = useState({});


    const onChangeHandler =(e)=>{
        setUserName(e.target.value)
    }

    const onSubmitHandler =(e)=>{
        e.preventDefault();
        fetch(`https://api.github.com/users/${userName}`)
        .then((response)=>{
          return response.json();
        }).then((originalData)=>{
          if(originalData){
            setData(originalData);
          }
        })
    }
    return (
        <>
        <div className="container my-5" >
            <div className="row mt-auto">
                <div className="col-lg-8 col-sm-12 text-center mx-auto">
                    <h1 className="display-4 mb-3">Github Users</h1>
                </div>
            </div>
            <div className="row">
                
                <div className="col-md-6 mx-auto text-center">
                    <div className="row mb-5 justify-content-center">
                        <form id="myform" autoComplete='off' onSubmit={onSubmitHandler}>
                         <div className="col-lg-8 col-sm-12 my-3 text-center mx-auto form-group">
                            <input className="form-control form-control-lg" placeholder="Github username" type={userName} id="w"  onChange={onChangeHandler}/>
                        </div>
                        <div className="col-lg-3 col-sm-12 my-2 text-center mx-auto form-group">
                            <button className="btn btn-primary btn-block w-100 btn-lg">Search</button>
                        </div>
                        </form>
                        
                    </div>


               
                </div>
            </div>
        </div>
        <Userprof data={data}></Userprof>
        </>

    )
}

export default Search;