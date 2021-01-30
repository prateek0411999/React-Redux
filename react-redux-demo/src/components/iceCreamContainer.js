import React from 'react'
import {connect} from 'react-redux';
//connect react component to  a redux store
import {buyIceCream} from '../redux/index';
function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of IceCream : {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

//when we want to access the redux state in our component we define mapStateToProps func which accepts state as a parameter
const mapStateToProps = (state)=>{
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}
//similarly for dispatching we have mapDispatchToProps func- gets dispatch method as a parameter
//and allows us to map action creator to props in our component
const mapDispatchToProps = dispatch =>{
    return {
        //here we mapped action created to a prop called buyCake so using it as a onClick above throught props
        buyIceCream: () => dispatch(buyIceCream())
    }
}
//and all this is possible because of connect function provided by react-redux
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)

//we can also use react hooks to subscribe to store and dispatch actions without connect()
