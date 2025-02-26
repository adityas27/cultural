import React from 'react';
import './Department.css';
const LogoFlexbox = () => {
  return (
    <div className="department" style={{ 
     display: 'flex', 
      justifyContent: 'space-around',
      width:"100%",
      height:"300px",
      flexWrap:"wrap",
      alignItems: 'center', 
      borderRadius:"45px",
      margin:"auto",
    }}>
      <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699257/OJUSPHOTOS/s7kpjfjof8jsckpqihsz.png" alt="Logo 1" style={{ width: '130px', height: 'auto' }} />
      <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699263/OJUSPHOTOS/hmqlfhlrv92drregbyhg.png" alt="Logo 2" style={{ width: '130px', height: 'auto' }} />
      <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699266/OJUSPHOTOS/j1fi3twa2rx3x3lhuwa8.png" alt="Logo 3" style={{ width: '130px', height: 'auto' }} />
      <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699276/OJUSPHOTOS/vbd00sgou0ychslyokto.png" alt="Logo 4" style={{ width: '130px', height: 'auto' }} />
      <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699277/OJUSPHOTOS/gvuiwwildkcuc36sdtnz.png" alt="Logo 5" style={{ width: '130px', height: 'auto' }} />
      <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735038785/cu8hlpt8rqt5o4iviahc.png" alt="Logo 5" style={{ width: '130px', height: 'auto' }} />
      <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735111164/OJUSPHOTOS/aodjjuyppjlryybhivak.png" alt="Logo 5" style={{ width: '130px', height: 'auto' }} />
    </div>
  );
};

export default LogoFlexbox;
