import React from 'react'
import {connect} from 'react-redux';
//connect react component to  a redux store
import {buyCake} from '../redux/index';
function cakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes : {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

//when we want to access the redux state in our component we define mapStateToProps func which accepts state as a parameter
const mapStateToProps = (state)=>{
    return {
        numOfCakes: state.numOfCakes
    }
}
//similarly for dispatching we have mapDispatchToProps func- gets dispatch method as a parameter
//and allows us to map action creator to props in our component
const mapDispatchToProps = dispatch =>{
    return {
        //here we mapped action created to a prop called buyCake so using it as a onClick above throught props
        buyCake: () => dispatch(buyCake())
    }
}
//and all this is possible because of connect function provided by react-redux
export default connect(mapStateToProps,mapDispatchToProps)(cakeContainer)

//we can also use react hooks to subscribe to store and dispatch actions without connect()
