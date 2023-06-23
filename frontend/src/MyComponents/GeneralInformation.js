import React from "react";
import "./GeneralInformation.css";
import LanguageTable from './Language';
export const GeneralInformation = () => {
  return (
    <div className="container">
      <h2 style={{fontFamily:'Pacifico'}}>General Information <span role="img" aria-label="">&#128526;</span></h2>
      <img id="dp" src="profilePic.jpg" alt="DP" />
      <br/>
      <table>
        <tr>
          <th>Name:</th>
          <td>&#x27A4; Shubham Kunal</td>
        </tr><br />
        <tr>
          <th>D.O.B:</th>
          <td>&#x27A4; 3rd April 1998</td>
        </tr><br />
        <tr>
          <th>Address:</th>
          <td>&#x27A4; E3, Block A, Devalaya Apartment, Hirapur, Dhanbad - 826001</td>
        </tr><br />
        <tr>
          <th>Contact:</th>
          <td>&#x27A4; (+91) 9308274111</td>
        </tr><br />
        <tr>
          <th>Email:</th>
          <td rowSpan="2">
            &#x27A4; shubhamkunal21@gmail.com <br />&#x27A4; shubhamkunal@zohomail.com
          </td>
        </tr>
        <br />
        <tr>
          <th>Certifications:</th>
          <td rowSpan="2"><br/>
          <i> &nbsp; &#x27A4; AWS Developer Associate</i> <br /> &nbsp; &#x27A4; Russian Language B2</td>
        </tr>
      </table>
      <br />
      <div>
      <h5 style={{textAlign:"left",}}>&nbsp;Languages and Ratings</h5>
      
      <LanguageTable />
      <br/>
    </div>
      <div id="links">
        <a id="link" href="https://github.com/ShubhamKunal">
          <img
            className="rounded-image"
            height="40px"
            width="40px" 
            src="https://camo.githubusercontent.com/b079fe922f00c4b86f1b724fbc2e8141c468794ce8adbc9b7456e5e1ad09c622/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667"
            alt="description of icon"
          />
        </a>
        <a id="link" href="https://www.linkedin.com/in/shubham-kunal-84504b45/">
          <img
          className="rounded-image"
            height="40px"
            width="40px"
            src="https://camo.githubusercontent.com/c8a9c5b414cd812ad6a97a46c29af67239ddaeae08c41724ff7d945fb4c047e5/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6c696e6b6564696e2e737667"
            alt="description of icon"
          />
        </a>
        <a id="link" href="https://www.facebook.com/shubhamkunal/">
          <img
          className="rounded-image"
            height="40px"
            width="40px"
            src="https://camo.githubusercontent.com/8f245234577766478eaf3ee72b0615e99bb9ef3eaa56e1c37f75692811181d5c/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f66616365626f6f6b2e737667"
            alt="description of icon"
          />
        </a>
        <a id="link" href="https://www.vk.com/shubhamkunal">
          <img
          className="rounded-image"
            height="40px"
            width="40px"
            src="https://camo.githubusercontent.com/26be819fcce90f75668efeb7a432b969dcc35a1e4478149c3fcd48fda5b457c3/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f766b2e737667"
            alt="description of icon"
          />
        </a>
        <a id="link" href="https://www.twitter.com/shubham__kunal">
          <img
          className="rounded-image"
            height="40px"
            width="40px"
            src="https://camo.githubusercontent.com/35b0b8bfbd8840f35607fb56ad0a139047fd5d6e09ceb060c5c6f0a5abd1044c/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f747769747465722e737667"
            alt="description of icon"
          />
        </a>
        <a id="link" href="https://www.instagram.com/shubhamkunal">
          <img
          className="rounded-image"
            height="40px"
            width="40px"
            src="https://camo.githubusercontent.com/c9dacf0f25a1489fdbc6c0d2b41cda58b77fa210a13a886d6f99e027adfbd358/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667"
            alt="description of icon"
          />
        </a>
        <a id="link" href="https://t.me/shubhamkunal">
          <img
          className="rounded-image"
            height="40px"
            width="40px"
            src="https://camo.githubusercontent.com/f4b401dd7cd9b7840fd31acafd49e151a80e4c9600bf219934461b96dd98e013/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f74656c656772616d2e737667"
            alt="description of icon"
          />
        </a>
        <a id="link" href="https://www.snapchat.com/add/shubhamkunal?share_id=Y-K995YZ8dw&locale=en-US">
          <img
          className="rounded-image"
            height="40px"
            width="40px"
            src="https://camo.githubusercontent.com/fd77cf9d7eb02c0e18aa59bfc96c599b1f22323860857124150c74c4b444d054/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f736e6170636861742e737667"
            alt="description of icon"
          />
        </a>
        <a id="link" href="https://wa.me/9308274111?text=">
          <img
          className="rounded-image"
            height="40px"
            width="40px"
            src="https://camo.githubusercontent.com/945d32cdd8d51fe844ca8b2976914ae8786586607aee1cba24d7318e24b30411/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f77686174736170702e737667"
            alt="description of icon"
          />
        </a>
        <a id="link" href="https://open.spotify.com/user/31dthpqbgp7gj5dzi7jevkzgyqsy?si=rmaWzLUVQu-Uc2ojQ71uwQ&utm_source=copy-link ">
          <img
          className="rounded-image"
            height="40px"
            width="40px"
            src="https://camo.githubusercontent.com/15d4e1b8bf3ed25b7131cc93f248f86cc42deaf9e19fdb61aa1ba3b46e0400a5/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f73706f746966792e737667"
            alt="description of icon"
          />
        </a>
      </div>
    </div>
  );
};
