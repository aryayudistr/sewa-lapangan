
import React,{Component} from "react";
import axios from "axios";
import $ from "jquery";
import Modal from "../component/Modal";
import Toast from "../component/Toast";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      id: "",
      username: "",
      email: "",
      password: "",
      repassword: "",
      action: "insert",
      role: "member",
      find: "",
      message: ""
    }

    // jika tidak terdapat data token pada local storage
    // if(!localStorage.getItem("Token")){
    //   // direct ke halaman login
    //   window.location = "/";
    // }
  }

    bind = (event) => {
      this.setState({[event.target.name] : event.target.value});
    }
    // bindImage = (e) => {
    //   this.setState({image: e.target.files[0]})
    // }

    Add = () => {
      // membuka modal
      $("#modal_user").modal("show");
      // mengosongkan data pada form
      this.setState({
        action: "insert",
        id: "",
        username:"",
        email: "",
        password: "",
        role:""
      });
    }

    Save = (event) => {
      event.preventDefault();
      
    var pw1 = this.state.password;
    var pw2= this.state.repassword;
      // menampilkan proses loading
      $("#loading").toast("show");
      // menutup form modal
      $("#modal_user").modal("hide");
      if(pw1 === pw2){
      let url = "http://localhost/lapangan/public/register";
      let form = new FormData();
      form.append("action", this.state.action);
      form.append("id", this.state.id);
      form.append("username", this.state.username);
      form.append("email", this.state.email);
      form.append("password", this.state.password);
      form.append("repassword", this.state.repassword);
      form.append("role", this.state.role);

      axios.post(url, form)

      .then(response => {
        $("#loading").toast("hide");
        this.setState({message: response.data.message});
        $("#message").toast("show")
        alert("Register Berhasil");
        window.location = "/login"
      })
      .catch(error => {
        console.log(error);
      });
      } else {
            alert("Password tidak sama");
    }
    }

    render(){
      return(
        <div className="container" style={{ width: "60%" }}><br/><br/><br/>
                <div className="card my-2 shadow">
                <div className="card-header bg-dark">
                    <center><h5 className="text-white">Register</h5></center>
            </div>
            <div className="card-body">
            <form onSubmit={this.Save}>
                Username
                  <input type="text" className="form-control m-1" name="username"
                    value={this.state.nama_user} onChange={this.bind} required />
                Email
                  <input type="email" className="form-control m-1" name="email"
                    value={this.state.email} onChange={this.bind} required />
                Password
                  <input type="password" className="form-control m-1" name="password"
                    value={this.state.password} onChange={this.bind} required />
                Ulangi Password
                  <input type="password" className="form-control m-1" name="repassword"
                    value={this.state.repassword} onChange={this.bind} required />
                  <button type="submit" className="btn btn-warning pull-right m-2">
                    <span className="fa fa-check"></span> Simpan
                  </button>
                </form>
            </div>
          </div>
        </div>
      );
    }



}
export default Register;


