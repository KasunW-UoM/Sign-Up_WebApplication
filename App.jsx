import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component{

   // state ={ }


   constructor(){
       super()
       this.state ={
       fullName:'',
       userName:'',
       email:'',
       password:''
       }
       this.changeFullName=this.changeFullName.bind(this)
       this.changeuserName=this.changeuserlName.bind(this)
       this.changeEmail=this.changeEmail.bind(this)
       this.changepassword=this.changepassword.bind(this)
       this.onSubmit= this.onSubmit.bind(this)
   }

changeFullName(event){

    this.setState({
        fullName:event.target.value
    })

}

changeuserlName(event){

    this.setState({
        userName:event.target.value
    })

}

changeEmail(event){

    this.setState({
        email:event.target.value
    })

}

changepassword(event){

    this.setState({
        passsword:event.target.value
    })

}

onSubmit(event){
    event.preventDefault()

    const registered ={

        fullName:this.state.fullName,
       userName:this.state.userName,
        email:this.state.email,
        passsword:this.state.password

    }
    axios.post('http://localhost:4000/app/signup',registered)
    .then(response => console.log(response.data))

    this.setState ({
        fullName:'',
        userName:'',
        email:'',
        password:''
        })


}


    render(){
        return(
            <div>

<div className='container'>
    <div className='from-div'>
        <from onSubmit={this.onSubmit}>
            <input type ='text'
            placeholder='Full Name'
            onChange ={this.changeFullName}
            value ={this.state.fullName}
            className='from-control from-group'
            />

            <input type ='text'
            placeholder='userName'
            onChange ={this.changeuserName}
            value ={this.state.userName}
            className='from-control from-group'
            />

            <input type ='text'
            placeholder='E-mail'
            onChange ={this.changeEmail}
            value ={this.state.email}
            className='from-control from-group'
            />

            <input type ='password'
            placeholder='password'
            onChange ={this.changepassword}
            value ={this.state.password}
            className='from-control from-group'
            />

            <input type ='submit' className='btn btn-danger btn-block' value='Submit'/>


        </from>
    </div>
</div>
            </div>
         );
    }
}
export default App;