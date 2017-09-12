

demo 展示直接使用非对称密钥加解密数据大体流程

算法： RSA ,Elgamal，ECC


RSA的两种方式：

1. 直接使用非对称密钥加解密数据

  安全性低，复杂度低

  密钥越长，加解密越耗时

  **能加密的明文长度有限制，密钥长度是2048bit的最多能加密245字节**

  一般都是用户自己保存私钥来解密，所以用公钥加密


2. 用对称密钥（比如AES/DES等加解密方法）加解密数据，然后使用非对称密钥（RSA加解密密钥）加解密 对称密钥

  安全性高，复杂度高，不存在加密数据长度限制问题


  ```
                客 户 端                                    服 务 端

                    +                                            +
                    |                                            |
      1. 生 成 随 机 的 对 称 加 密 密 钥                                     
                    |                                            |
                    |                                            |
      2. 对 称 加 密 数 据 |                                            
                    |                                            |
                    |                                            |
      3. 非 对 称 加 密 对 称 密 钥                                       
                    |                                            |
                    |                                            |
                    |  4.保 存 数 据 和 加 密 后 的 对 称 密 钥               
                    | +----------------------------------------> |
                    | <------------------------------------------+
                    |                                            |
      5.解 密 对 称 密 钥 ，用 对 称 密 钥 解 密 数 据                             
                    |                                            |
                    |                                            |
                    |                                            |
                
  ```


如果数据是第三方平台加密好的，我们只读，能否解密，还要考虑对方用加密方式和使用的库

如果加解密都是自己的系统做，推荐RSA方式2
