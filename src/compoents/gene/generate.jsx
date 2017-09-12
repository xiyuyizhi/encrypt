import React, { Component } from 'react';
import jsencrypt from "jsencrypt"
import Button from "../button"
import "./generate.css"

export default class Generate extends Component {

    constructor(props) {
        super(props)
        this.geneKeys = this.geneKeys.bind(this)
        this.reset = this.reset.bind(this)
        this.defualtKey = {
            publickKey: '',
            privateKey: ''
        }
        this.state = {
            key: Object.assign({},this.defualtKey)
        }
    }


    geneKeys() {
        const crypt = new jsencrypt.JSEncrypt({default_key_size:2048});
        const publickKey = crypt.getPublicKey()
        const privateKey = crypt.getPrivateKey()
        console.log(';;;;;;;;;;')
        const key = {
            publickKey,
            privateKey
        }
        this.setState({
            key
        })
        localStorage.setItem('key', JSON.stringify(key))
    }
    reset() {
        this.setState({
            key: Object.assign({},this.defualtKey)
        })
        localStorage.removeItem('key')
    }

    componentWillMount() {
        const key = localStorage.getItem('key')
        if (key) {
            this.setState({
                key: JSON.parse(key)
            })
        }
    }

    render() {
        return <div className="generate">
            <Button label="生成公钥私钥" onClick={this.geneKeys}></Button>
            <Button label="清空" onClick={this.reset}></Button>
            <div>
                <div className="keyArea">
                    <label>公钥</label>
                    <textarea value={this.state.key.publickKey}></textarea>
                </div>
                <div className="keyArea">
                    <label>私钥 2048bit</label>
                    <textarea value={this.state.key.privateKey}></textarea>
                </div>
            </div>
        </div>
    }

}


