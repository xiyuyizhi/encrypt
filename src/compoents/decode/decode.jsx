import React, { Component } from 'react';
import Button from "../button"
import jsencrypt from "jsencrypt"
import "./decode.css"

export default class Decode extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data:{}
        }
        this.decode=this.decode.bind(this)
    }

    decode(){
        var res = window.prompt("粘贴您的私钥到此");
        if(res){
            const encrypt=new jsencrypt.JSEncrypt()
            encrypt.setPrivateKey(res)
            const d=encrypt.decrypt(localStorage.getItem('encodeData'))
            if(d){
                this.setState({
                    data:JSON.parse(d)
                })
            }else{
                alert('解析失败')
            }
        }
    }

    render() {
        return <div className="decode">
            <div>
                录入项1:{this.state.data.prop1 || '**'}
            </div>
            <div>
                录入项2:{this.state.data.prop2 || '**'}
            </div>
            <div>
                录入项3:{this.state.data.prop3 || '**'}
            </div>
            <div className="decode_btn">
                <Button label="解密" onClick={this.decode}></Button>
            </div>
        </div>
    }

}


