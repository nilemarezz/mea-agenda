import React from 'react'
import { withRouter } from 'react-router-dom'
import Context from './Context'
const Day1 = (props) => {
  const getData = (value) => {
    if (value === "1" || value === "1-2") {
      return "11 พฤศจิกายน 2563"
    } else if (value === "2" || value === "2-2") {
      return "12 พฤศจิกายน 2563"
    } else {
      return "13 พฤศจิกายน 2563"
    }
  }
  return (

    <div >
      <img src={process.env.PUBLIC_URL + '/image/header.svg'} alt="bg" style={{ position: 'fixed', width: '60vh' }} />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '12.7vh', position: 'fixed', zIndex: 10, marginLeft: '2vh' }} onClick={() => props.history.push('/day/1')}>
        <img src={process.env.PUBLIC_URL + '/image/arrow-left.svg'} style={{ width: '1.5vh', marginRight: 10 }} />
        <p style={{ fontSize: 25 }}><strong>BACK</strong></p>
      </div >
      <div style={{ backgroundColor: '#f37021', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '18vh', position: 'fixed', width: '100%' }}>
        <div className="day-grow" style={{ margin: '0px 20px 0px 20px' }} >
          <h1 style={{ lineHeight: 0, fontSize: 30, color: '#f37021' }}>AGENDA</h1>
        </div>
        <h1 style={{ color: 'white', fontSize: 30, marginRight: 20 }}>{getData(props.match.params.id)}</h1>
      </div>

      <img src={process.env.PUBLIC_URL + '/image/content.svg'} style={{ marginTop: '20vh', width: '2vh', marginLeft: '15vh', position: 'fixed' }} />
      <div style={{ position: 'fixed', marginTop: '25vh', marginLeft: '2.7vh' }}>
        <Context content="11.15 – 11.35 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="11.40– 12.00 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="12.00 – 13.00 น." />
        <div style={{ height: 5 }}></div>
        <Context content="13.00 - 13.20 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="13.25 - 13.45 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="13.50 - 14.10 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="14.10 - 14.25 น." />
        <div style={{ height: 5 }}></div>
        <Context content="14.25 - 14.45 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="14.50 - 15.10 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="15.15 - 15.25 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="15.25 - 15.30 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="15.30 น." />
        <Context content="&nbsp;&nbsp;" />
      </div>
      <div style={{ position: 'fixed', marginLeft: '19vh', marginTop: '25vh' }}>
        <Context content="ทีมที่ 6 ลดระยะเวลาการจัดทำบันทึกขออนุมัติขยายสัญญา" color='#f37021' />
        <Context content="การงด/ลดค่าปรับ" color='#f37021' />
        <Context content="โดยหน่วยงาน ฝจห." />
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 7 โครงการ MEA OK" color='#f37021' />
        <Context content="โดยหน่วยงาน ฟขป." />
        <div style={{ height: 5 }}></div>
        <Context content="พักรับประทานอาหารกลางวัน" />
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 8 Ground Supporter" color='#f37021' />
        <Context content="โดยหน่วยงาน ฟขง." />
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 9 การลดระยะเวลาทำงานเสริมคอบ่อพักสายไฟฟ้าใต้ดิน" color='#f37021' />
        <Context content="โดยหน่วยงาน ฝกส." />
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 10 การเพิ่มประสิทธิภาพการติดตามงานด้วย Project" color='#f37021' />
        <Context content="Monitoring Chart" color='#f37021' />
        <Context content="โดยหน่วยงาน ฝบค." />
        <div style={{ height: 5 }}></div>
        <Context content="พักรับประทานอาหารว่าง" />
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 11 K-BOT ระบบแจ้งเตือนออนไลน์ ด้วย Chat Bot" color='#f37021' />
        <Context content="โดยหน่วยงาน ฝพด." />
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 12 การปรับปรุง MEA Connext Mobile Application" color='#f37021' />
        <Context content="โดยหน่วยงาน ฝพป." />

        <div style={{ height: 5 }}></div>
        <Context content="ประกาศผล และมอบรางวัล" color='#f37021' />
        <Context content="การแข่งขัน MEA KM-Kaizen Show 2020" color='#f37021' />

        <div style={{ height: 5 }}></div>
        <p style={{ fontSize: 23, lineHeight: 0 }}><span style={{ color: '#f37021' }}>MEA Lucky Draw </span>จำนวน  <span style={{ color: '#f37021' }}>2</span> รางวัล</p>
        <ul>
          <li><Context content="รางวัลสำหรับผู้โชคดีที่อยู่ภายในงาน" size="small" /></li>
          <li><Context content="รางวัลสำหรับผู้โชคดีที่รับชมทางออนไลน์" size="small" /></li>
        </ul>

        <div style={{ height: 5 }}></div>
        <Context content="เสร็จสิ้นพิธีการ" />




      </div >
      <div style={{ height: 30, width: '100%', backgroundColor: "#f37021", position: 'fixed', bottom: 0 }}></div>


    </div >
  )
}

export default withRouter(Day1)