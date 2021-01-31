import React, {useState} from 'react'
import {connect} from 'react-redux';
//connect react component to  a redux store
import {buyCake} from '../redux/index';
function NewCakeContainer(props) {
    const [number, setNumber]= useState(1)
    return (
        <div>
            <h2>Number of Cakes : {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() =>props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

//when we want to access the redux state in our component we define mapStateToProps func which accepts state as a parameter
const mapStateToProps = (state)=>{
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
//similarly for dispatching we have mapDispatchToProps func- gets dispatch method as a parameter
//and allows us to map action creator to props in our component
const mapDispatchToProps = dispatch =>{
    return {
        //here we mapped action created to a prop called buyCake so using it as a onClick above throught props
        buyCake: (number) => dispatch(buyCake(number))
    }
}
//and all this is possible because of connect function provided by react-redux
export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)

//we can also use react hooks to subscribe to store and dispatch actions without connect()
