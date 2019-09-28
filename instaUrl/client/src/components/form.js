import React,{Component} from 'react';
import '../assets/css/grid.css';
import axios from 'axios';
import validator from 'validator';
import 'bootstrap/dist/css/bootstrap.min.css';
class Form extends Component {
  state = {
    url:'',
    link:''
   
  };
  handelChange =(e) =>{
   //console.log('inside click',e.target.value);
    this.setState({
      url: e.target.value
    });
  }
  handleSubmit = (e) => {
    console.log('inside handle change');
    e.preventDefault();
    const validUrl = validator.isURL(this.state.url,{
      require_protocol: true
    });

    if(!validUrl) {
      alert('Please enter the valid url');
    }
    else {
      console.log('URL is ', this.state.url);
      
      //post values

      axios.post('http://localhost:5000/api/shorten', {
        url: this.state.url
      })
      .then( res => {
        console.log(res.data.hash);
        this.setState({
          link: `http://instacar.link/${res.data.hash}`
         
        })
      })
      .catch(err => console.log(err));
      alert('This link will expire after 10 minutes');
    }
   
  }
  render(){
  return (

    <div className="container ">
   
      <div className="body-wrap col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
        <header>
          <h1><span className="focus">instacar</span>.link</h1>
          <small>...make work easy</small>
        </header>
        <main >
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <input type="text"
              name="url"
                placeholder="enter the proper URL"
                onChange ={this.handelChange}/>
              <input type="submit" value="Minify"/> 
            </fieldset>
            <fieldset>
           <a href={this.state.url} target="_blank"><span id ="result">{this.state.link}</span></a>
            </fieldset>
          </form>
        </main>
      </div> 
    </div>
  );
}
}
export default Form;
