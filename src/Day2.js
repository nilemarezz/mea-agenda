import React from 'react'
import { withRouter } from 'react-router-dom'
import Context from './Context'
const Day1 = (props) => {
  const getData = (value) => {
    if (value === "1" || value === "1-2") {
      return "11 พฤศจิกายน 2563"
    } else if (value === "2") {
      return "12 พฤศจิกายน 2563"
    } else {
      return "13 พฤศจิกายน 2563"
    }
  }
  return (

    <div >
      <img src={process.env.PUBLIC_URL + '/image/header.svg'} alt="bg" style={{ position: 'fixed', width: '60vh' }} />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '12.7vh', position: 'fixed', zIndex: 10, marginLeft: '2vh' }} onClick={() => props.history.push('/')}>
        <img src={process.env.PUBLIC_URL + '/image/arrow-left.svg'} style={{ width: '1.5vh', marginRight: 10 }} />
        <p style={{ fontSize: 25 }}><strong>BACK</strong></p>
      </div >
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '12.7vh', position: 'fixed', zIndex: 10, marginLeft: '49vh' }} onClick={() => props.history.push('/day/2-2')}>
        <p style={{ fontSize: 25 }}><strong>NEXT</strong></p>
        <img src={process.env.PUBLIC_URL + '/image/arrow-right.svg'} style={{ width: '1.5vh', marginLeft: 10 }} />
      </div >
      <div style={{ backgroundColor: '#f37021', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '18vh', position: 'fixed', width: '100%' }}>
        <div className="day-grow" style={{ margin: '0px 20px 0px 20px' }} >
          <h1 style={{ lineHeight: 0, fontSize: 30, color: '#f37021' }}>AGENDA</h1>
        </div>
        <h1 style={{ color: 'white', fontSize: 30, marginRight: 20 }}>{getData(props.match.params.id)}</h1>
      </div>

      <img src={process.env.PUBLIC_URL + '/image/content.svg'} style={{ marginTop: '20vh', width: '2vh', marginLeft: '15vh', position: 'fixed' }} />
      <div style={{ position: 'fixed', marginTop: '25vh', marginLeft: '2.7vh' }}>
        <Context content="07.30 – 08.20 น." />
        <div style={{ height: 5 }}></div>
        <Context content="08.20 – 08.30 น." />
        <div style={{ marginLeft: 15 }}>
          <Context content="&nbsp;&nbsp;" />
          <Context content="&nbsp;&nbsp;" />
          <Context content="&nbsp;&nbsp;" />
          <Context content="&nbsp;&nbsp;" />
          <Context content="&nbsp;&nbsp;" />
          <Context content="&nbsp;&nbsp;" />
          <Context content="&nbsp;&nbsp;" />
          <Context content="&nbsp;&nbsp;" />
          <Context content="&nbsp;&nbsp;" />
        </div>
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 10 }}></div>
        <Context content="08.30 - 08.50 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="08.50 - 09.10 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="09.10 - 09.30 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="09.35 - 09.55 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="10.00 - 10.20 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="10.20 - 10.30 น." />
        <div style={{ height: 5 }}></div>
        <Context content="10.30 - 10.50 น." />
        <Context content="&nbsp;&nbsp;" />
      </div>
      <div style={{ position: 'fixed', marginLeft: '19vh', marginTop: '25vh' }}>
        <Context content="ลงทะเบียนผู้เข้าร่วมงาน" />
        <div style={{ height: 5 }}></div>
        <Context content="การแข่งขัน MEA KM-Kaizen Show 2020 รอบตัดสิน" color='#f37021' />
        <Context content="พิธีกรแจ้งกติกา และแนะนำกรรมการ" color='#f37021' />
        <div style={{ marginLeft: 15 }}>
          <Context content="อ.สุพัฒน์ เอื้องพูลสวัสดิ์" color='purple' />
          <Context content="รองประธานพิจารณารางวัล  Thailand Kaizen Award และวิทยากรที่ปรึกษาอิสระ" size="small" />
          <Context content="ทางด้าน Total Productive Management (TPM) และ Process Improvement" size="small" />
          <Context content="อ.ยุทธพงษ์ ศุภกร" color='purple' />
          <Context content="ผู้เชี่ยวชาญอุตสาหกรรม แผนกออกแบบและพัฒนาผลิตภัณฑ์ใหม่ ฝ่ายจัดการ" size="small" />
          <Context content="และพัฒนาความรู้" size="small" />
          <Context content="อ.สวินทร์ พงษ์เก่า" color='purple' />
          <Context content="ที่ปรึกษาอิสระด้านความปลอดภัยฯ" size="small" />
          <Context content="คุณสุรสิทธิ์ ณ นครพนม" color='purple' />
          <Context content="ผู้อำนวยการกองมาตรฐานความปลอดภัยจากฝ่ายความปลอดภัยอาชีวอนามัย" size="small" />
          <Context content="และสิ่งแวดล้อมซึ่งเป็นผู้เชี่ยวชาญด้านความปลอดภัยอาชีวอนามัยและสิ่งแวดล้อม" size="small" />
        </div>
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 1 ตาวิเศษ… เห็นนะ (เท้าช้าง)" color='#f37021' />
        <Context content="โดยหน่วยงาน ฟขท." />
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 2 งานฮอทไลน์ (Hotline) การตัด Break ด้วยรถกระเช้า" color='#f37021' />
        <Context content="โดยไม่เข้าใกล้จุดตัด" color='#f37021' />
        <Context content="โดยหน่วยงาน ฝกส." />
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 3 ถอดแบบหล่อเสาไฟฟ้าขนาด 8.50 ม." color='#f37021' />
        <Context content="โดยหน่วยงาน ฝธข." />
        <div style={{ height: 5 }}></div>
        <Context content=" ทีมที่ 4 PORTABLE CABLE ROLLER" color='#f37021' />
        <Context content=" โดยหน่วยงาน ฟขธ." />
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 5 การปรับปรุงรูปแบบขอบิดเสา (CANT HOOK)" color='#f37021' />
        <Context content="โดยหน่วยงาน ฟขจ." />
        <div style={{ height: 5 }}></div>
        <Context content="พักรับประทานอาหารว่าง" />
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 6 Cable Transformer Discharge" color='#f37021' />
        <Context content="โดยหน่วยงาน ฟขต." />



      </div>
      <div style={{ height: 30, width: '100%', backgroundColor: "#f37021", position: 'fixed', bottom: 0 }}></div>


    </div>
  )
}

export default withRouter(Day1)