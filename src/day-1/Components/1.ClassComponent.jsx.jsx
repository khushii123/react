




/*
 * 
       * Import React or {Component} from react
      Create a class with any name
      Extend it to component
      Define a render method
      Write Return JSX
      Export default
 * 
 * */


      import { Component } from "react";
class ClassComp extends Component{
    render(){
        return(
            <div>
                <p>Hello{ 10+20}</p>
                <p> from cc</p>
            </div>
        )
    }
}
export default ClassComp

