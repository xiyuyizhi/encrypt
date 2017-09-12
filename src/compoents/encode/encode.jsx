import React, { Component } from 'react';
import Button from "../button"
import jsencrypt from "jsencrypt"
import "./encode.css"
export default class Encode extends Component {

    constructor(props) {
        super(props)
        this.getValue=this.getValue.bind(this)
        this.encode=this.encode.bind(this)
        this.state={}
    }
    getValue(e,prop){
        this.setState({
            [prop]:e.target.value
        })
    }

    encode(){
        if(!this.state.publicKey){
            alert('输入公钥')
            return
        }
        const encrypt=new jsencrypt.JSEncrypt()
        encrypt.setPublicKey(this.state.publicKey)
        const data=Object.assign({},this.state)
        delete data.publicKey
        const d=encrypt.encrypt(JSON.stringify(data))
        if(!d){
            alert('明文太长,不能加密')
            return
        }
        localStorage.setItem('encodeData',d)
        alert('已加密')
        return
    }

    render() {
        return <div className="encode">
            <form className="form">
                <div className="form_line">
                    <label>输入项1:</label>
                    <input type="text" value={this.state.prop1} onChange={(e)=>{
                        this.getValue(e,'prop1')
                    }}/>
                </div>
                <div className="form_line">
                    <label>输入项2:</label>
                    <input type="text" value={this.state.prop2} onChange={(e)=>{
                        this.getValue(e,'prop2')
                    }}/>
                </div>
                <div className="form_line">
                    <label>输入项3:</label>
                    <input type="text" value={this.state.prop3} onChange={(e)=>{
                        this.getValue(e,'prop3')
                    }}/>
                </div>
                <div className="form_line">
                    <label>公钥:</label>
                    <textarea placeholder="复制生成的公钥" value={this.state.publicKey} onChange={(e)=>{
                        this.getValue(e,'publicKey')
                    }}></textarea>
                </div>
                <div className="form_line">
                    <Button label="加密" onClick={this.encode}></Button>
                </div>
            </form>
        </div>
    }

}


