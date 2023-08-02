import { Component } from "react";
 class MyForm extends Component{
state={
    name: "",
    email: "",
    password: "",
    radio:"",
    select:"",
    checkbox:"",
    DatePicker:"",
    ColorPicker:"",
    TextArea:""

};
//setter
onInputChange=(e)=>{
   const{name,value}=e.target;
   console.log("this.onInputChange",{name,value});

//getter
//this.setState({
 //  [e.target.name]:e.target.value
//});


//
this.setState({
    [name]:value,
});
};
render(){
    return(
        <div>
            <div>
                <input
                 name="name"
                 type="text"
                 placeholder="Enter your name"
                value={this.state.name}
                onChange={this.onInputChange}
                 />

            </div>
            <div>
                <input
                 name="email"
                 type="email"
                 placeholder="Enter your email"
                value={this.state.email}
                onChange={this.onInputChange}
                 />

            </div>
            <div>
                <input
                 name="password"
                 type="password"
                 placeholder="Enter your password"
                value={this.state.password}
                onChange={this.onInputChange}
                 />

            </div>
            
            <div>
                <label>
                    Gender:-
        <input    type="radio" value={this.state.gender} name="gender"  onChange={this.onInputChange} /> Male
        <input    type="radio" value={this.state.gender} name="gender"  onChange={this.onInputChange} /> Female
        <input   type="radio" value={this.state.gender} name="gender"   onChange={this.onInputChange}/> Other
        </label>
      </div>

          <div>
            <label>
                your age:-  </label>
                <select value={this.state.select} onChange={this.onInputChange} name="select">
  <option value="18+">18+</option>
  <option value="25+">25+</option>
</select>

           
            </div> 
            <div>
                <label>
                    are you Software Engineer? </label>
                <input type="checkbox" value={this.state.checkbox} onChange={this.onInputChange} name="checkbox"/>yes
                <input type="checkbox" value={this.state.checkbox} onChange={this.onInputChange} name="checkbox"/>No
               
            </div>
           
            <div><label>Date:-</label>
              <input 
              type="Date" 
              name="DatePicker"
              value={this.state.DatePicker}
              onChange={this.onInputChange}/>
                    
            </div>
            <div>
                <label>Choose your color:-</label>
                <input type="color"  name="ColorPicker" value={this.state.ColorPicker} onChange={this.onInputChange}/>
            </div>
            <div>
                <label>Textarea</label>
                <input type="TextArea" name="TextArea" value={this.state.TextArea} onChange={ this.onInputChange}/>
            </div>
            
        </div>

    )
}

 }
 export default MyForm;