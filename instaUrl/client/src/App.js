import React,{Component} from 'react';
import './App.css';
import Menu from './components/menu';
import Form from './components/form';
import Footer from './components/footer';


class App extends Component {
 
  render(){
  return (
     
    <div className=" ContainerA col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Menu></Menu>
        <Form></Form>
        <Footer ></Footer>
   </div>  
    
  );
}
}
export default App;
