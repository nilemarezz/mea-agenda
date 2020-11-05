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
      <img src={process.env.PUBLIC_URL + '/image/back.svg'} style={{ width: '6vh', position: 'fixed', marginTop: '14.7vh', zIndex: 10, marginLeft: '2vh' }} onClick={() => props.history.push('/day/2')} />
      <div style={{ backgroundColor: '#f37021', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '18vh', position: 'fixed', width: '100%' }}>
        <div className="day-grow" style={{ margin: '0px 20px 0px 20px' }} >
          <h1 style={{ lineHeight: 0, fontSize: 45, color: '#f37021' }}>AGENDA</h1>
        </div>
        <h1 style={{ color: 'white', fontSize: 45, marginRight: 20 }}>{getData(props.match.params.id)}</h1>
      </div>

      <img src={process.env.PUBLIC_URL + '/image/content.svg'} style={{ marginTop: '20vh', width: '2vh', marginLeft: '15vh', position: 'fixed' }} />
      <div style={{ position: 'fixed', marginTop: '24vh', marginLeft: '2.7vh' }}>
        <Context content="10.55 – 11.15 น." />
        <Context content="&nbsp;&nbsp;" />

        <div style={{ height: 5 }}></div>
        <Context content="11.20 – 11.40 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="11.45 – 12.00น." />
        <div style={{ height: 5 }}></div>
        <Context content="12.00 - 13.00" />
        <div style={{ height: 5 }}></div>
        <Context content="13.00 - 13.10 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="13.10 - 13.30 น." />
        <div style={{ height: 5 }}></div>
        <Context content="13.30 - 13.50 น." />
        <div style={{ height: 5 }}></div>
        <Context content="13.50 - 14.10 น." />
        <div style={{ height: 5 }}></div>
        <Context content="14.10 - 14.30 น." />
        <div style={{ height: 5 }}></div>
        <Context content="14.30 - 14.40 น." />
        <div style={{ height: 5 }}></div>
        <Context content="14.40 - 15.15 น." />
        <div style={{ height: 5 }}></div>
        <Context content="15.15 - 15.25 น." />
        <div style={{ height: 5 }}></div>
        <Context content="15.25 - 15.30 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="15.30 น." />
      </div>
      <div style={{ position: 'fixed', marginLeft: '19vh', marginTop: '24vh' }}>
        <Context content="ทีมที่ 7 การเปลี่ยน Network Fuse โดยไม่ต้องดับไฟ" color='#f37021' />
        <Context content="โดยหน่วยงาน ฟขบ." />
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 8 การเพิ่มประสิทธิภาพ และความปลอดภัย สำหรับการตรวจสอบ" color='#f37021' />
        <Context content="ชุดสวิตซ์ใบมีด GIS 24 kV โดยไม่เข้าใกล้จุดตัด" color='#f37021' />
        <Context content="โดยหน่วยงาน ฝบร." />
        <div style={{ height: 5 }}></div>
        <Context content="ประกาศ และมอบรางวัล Safety Kaizen Show 2020" color='#f37021' />
        <div style={{ height: 5 }}></div>
        <Context content="พักรับประทานอาหารกลางวัน" />
        <div style={{ height: 5 }}></div>
        <Context content="การแข่งขันตอบคำถามทักษะด้านช่าง" color='#f37021' />
        <Context content="พิธีกรชี้แจงกติกา และแนะนำกรรรมการ" color='#f37021' />
        <div style={{ marginLeft: 15 }}>
          <Context content="คุณอำพล บุญเกิด" color='purple' />
          <Context content="คุณพฤฒิพงษ์ สละกลม" color='purple' />
          <Context content="คุณวีรพล โสสุทธ" color='purple' />
          <Context content="คุณนพวรรณ เสือสวัสดิ์" color='purple' />
        </div>
        <div style={{ height: 5 }}></div>
        <Context content="การแข่งขันตอบคำถามทักษะด้านช่าง รอบคัดเลือกสาย A" color='#f37021' />
        <div style={{ height: 5 }}></div>
        <Context content="การแข่งขันตอบคำถามทักษะด้านช่าง รอบคัดเลือกสาย B" color='#f37021' />
        <div style={{ height: 5 }}></div>
        <Context content="การแข่งขันตอบคำถามทักษะด้านช่าง รอบคัดเลือกสาย C" color='#f37021' />
        <div style={{ height: 5 }}></div>
        <Context content="การแข่งขันตอบคำถามทักษะด้านช่าง รอบคัดเลือกสาย D" color='#f37021' />
        <div style={{ height: 5 }}></div>
        <Context content="โหวตทีมโดนใจ" color='#f37021' />
        <div style={{ height: 5 }}></div>
        <Context content="การแข่งขันตอบคำถามทักษะด้านช่าง รอบชิงชนะเลิศ" color='#f37021' />
        <div style={{ height: 5 }}></div>
        <Context content="ประกาศผล และมอบรางวัล การแข่งขันตอบคำถามทักษะด้านช่าง" color='#f37021' />
        <div style={{ height: 5 }}></div>
        <Context content="MEA Lucky Draw จำนวน 2 รางวัล" color='#f37021' />
        <ul>
          <li><Context content="รางวัลสำหรับผู้โชคดีที่อยู่ภายในงาน" size="small" /></li>
          <li><Context content="รางวัลสำหรับผู้โชคดีที่รับชมทางออนไลน" size="small" /></li>
        </ul>
        <div style={{ height: 5 }}></div>
        <Context content="เสร็จสิ้นพิธีการ" />




        {/* ทีมที่ 2 แจ้งเหตุเตือนไว  พร้อมใช้ระบบสื่อสาร (Line Notify) */}


      </div>
      <div style={{ height: 30, width: '100%', backgroundColor: "#f37021", position: 'fixed', bottom: 0 }}></div>


    </div>
  )
}

export default withRouter(Day1)