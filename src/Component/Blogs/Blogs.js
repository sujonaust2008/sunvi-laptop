import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='mb-5'>
            <h2 className='text-center fw-bold pt-5'>Difference between javascript and nodejs</h2>
            <div className='jsVsnode'>
                <div>
                    <h2 className='fw-bold '>JavaScript</h2>
                    <h6>01. JavaScript is a programming language. It is running in any web browser with a proper browser engine.</h6>
                    <h6>02. Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</h6>
                    <h6>03. JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</h6>
                </div>
                <div>
                    <h2 className='fw-bold '>Node.js</h2>
                    <h6>01. It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</h6>
                    <h6>02. It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</h6>
                    <h6>03. Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</h6>
                </div>
            </div>



            <h2 className='text-center fw-bold pt-5'>Differences between sql and nosql databases.</h2>
            <div className='jsVsnode'>
                <div>
                    <h2 className='fw-bold '>SQL</h2>
                    <h6>01. SQL databases are relational.</h6>
                    <h6>02. SQL databases use structured query language and have a predefined schema.</h6>
                    <h6>03. SQL databases are vertically scalable.</h6>
                    <h6>04. SQL databases are table-based</h6>
                    <h6>05. SQL databases are better for multi-row transactions</h6>
                </div>
                <div>
                    <h2 className='fw-bold '>NoSQL</h2>
                    <h6>01. NoSQL databases are non-relational.</h6>
                    <h6>02. NoSQL databases have dynamic schemas for unstructured data.</h6>
                    <h6>03. NoSQL databases are horizontally scalable.</h6>
                    <h6>04. NoSQL databases are document, key-value, graph, or wide-column stores.</h6>
                    <h6>05. NoSQL is better for unstructured data like documents or JSON</h6>

                </div>
            </div>

            <div className='w-75 mx-auto'>
                <h2 className='fw-bold text-decoration-underline text-center mb-3'>What is the purpose of jwt and how does it work? </h2>
                <h6>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.<br></br>

                Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.<br></br>

                JWT's differ  from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.<br></br>

                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.<br></br>

                Once decoded, you will get two JSON strings:<br></br>
                1. The header and the payload.<br></br>
                2. The signature.<br></br>
                The JOSE header contains the type of token-JWT in this case - and the signing algorithm.<br></br>
                The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.<br></br>

                There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. <br></br>

                The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. 
                </h6>
            </div>

        </div>
    );
};

export default Blogs;