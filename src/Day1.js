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
      <img src={process.env.PUBLIC_URL + '/image/back.svg'} style={{ width: '6vh', position: 'fixed', marginTop: '14.7vh', zIndex: 10, marginLeft: '2vh' }} onClick={() => props.history.push('/')} />
      <img src={process.env.PUBLIC_URL + '/image/next.svg'} style={{ width: '6vh', position: 'fixed', marginTop: '14.7vh', zIndex: 10, marginLeft: '48vh' }} onClick={() => props.history.push('/day/1-2')} />
      <div style={{ backgroundColor: '#f37021', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '18vh', position: 'fixed', width: '100%' }}>
        <div className="day-grow" style={{ margin: '0px 20px 0px 20px' }} >
          <h1 style={{ lineHeight: 0, fontSize: 45, color: '#f37021' }}>AGENDA</h1>
        </div>
        <h1 style={{ color: 'white', fontSize: 45, marginRight: 20 }}>{getData(props.match.params.id)}</h1>
      </div>

      <img src={process.env.PUBLIC_URL + '/image/content.svg'} style={{ marginTop: '20vh', width: '2vh', marginLeft: '15vh', position: 'fixed' }} />
      <div style={{ position: 'fixed', marginTop: '24vh', marginLeft: '2.7vh' }}>
        <Context content="07.30 – 08.15 น." />
        <div style={{ height: 5 }}></div>
        <Context content="08.20 – 08.30 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="08.30 – 08.45 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="08.45 - 08.55 น." />
        <Context content="&nbsp;&nbsp;" />
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
        <div style={{ height: 18 }}></div>
        <Context content="09.00 - 09.20 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="09.25 - 09.45 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="09.50 - 10.10 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="10.10 - 10.25 น." />
        <div style={{ height: 5 }}></div>
        <Context content="10.25 - 10.45 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="10.50 - 11.10 น." />
        <Context content="&nbsp;&nbsp;" />
      </div>
      <div style={{ position: 'fixed', marginLeft: '19vh', marginTop: '24vh' }}>
        <Context content="ลงทะเบียนผู้เข้าร่วมงาน" />
        <div style={{ height: 5 }}></div>
        <Context content="พิธีเปิดงาน" color='#f37021' />
        <Context content="CHANGE SHARE & CHALLENG MEA สร้างคุณค่าที่แตกต่าง" color='#f37021' />
        <Context content="โดยคุณกีรพัฒน์ เจียมเศรษฐ์ ผู้ว่าการการไฟฟ้านครหลวง" />
        <div style={{ height: 5 }}></div>
        <Context content='สุนทรพจน์ใน หัวข้อ "MEA Now & Our Sustainable Value"' color='#f37021' />
        <Context content="โดยคุณกีรพัฒน์ เจียมเศรษฐ์ ผู้ว่าการการไฟฟ้านครหลวง" />
        <div style={{ height: 5 }}></div>
        <Context content="การแข่งขัน MEA KM-Kaizen Show 2020 รอบตัดสิน" color='#f37021' />
        <Context content="พิธีกรแจ้งกติกา และแนะนำกรรมการ" color='#f37021' />
        <div style={{ marginLeft: 15 }}>
          <Context content="อ.สุพัฒน์ เอื้องพูลสวัสด" color='purple' />
          <Context content="รองประธานพิจารณารางวัล  Thailand Kaizen Award  และวิทยากรที่ปรึกษาอิสระ" size="small" />
          <Context content="ทางด้าน  Total Productive Management (TPM) และ Process Improvement" size="small" />
          <Context content="อ.ยุทธพงษ์ ศุภกร" color='purple' />
          <Context content="ผู้เชี่ยวชาญอุตสาหกรรม แผนกออกแบบและพัฒนาผลิตภัณฑ์ใหม่ ฝ่ายจัดการ" size="small" />
          <Context content="และพัฒนาความรู้" size="small" />
          <Context content="อ.พรเทพ เหลือทรัพย์สุข" color='purple' />
          <Context content="ที่ปรึกษาอิสระด้าน Lean Six sigma" size="small" />
          <Context content="อ.ธนศีล แท้เที่ยงเจริญ" color='purple' />
          <Context content="วิทยากรด้านบุคลิกภาพจาก NPK Edutainment" size="small" />
        </div>
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 1 สายไม่ยุ่ง ชีวิตไม่แย่ ที่แน่ ๆ ได้เงินเพิ่ม" color='#f37021' />
        <Context content="โดยหน่วยงาน ฝบก." />
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 2 แจ้งเหตุเตือนไวพร้อมใช้ระบบสื่อสาร (Line Notify)" color='#f37021' />
        <Context content="โดยหน่วยงาน ฝคฐ." />
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 3 การเพิ่มประสิทธิภาพกระบวนการตรวจสอบค่าซื้อไฟฟ้า" color='#f37021' />
        <Context content="โดยหน่วยงาน ฝศก." />
        <div style={{ height: 5 }}></div>
        <Context content="พักรับประทานอาหารว่าง" />
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 4 Outrigger Safety guard “เท้าช้างใจดี” " color='#f37021' />
        <Context content="โดยหน่วยงาน ฟขอ." />
        <div style={{ height: 5 }}></div>
        <Context content="ทีมที่ 5 ลดเวลาของกระบวนงานจัดเก็บข้อมูลสถิติอุบัติเหตุ กฟน." color='#f37021' />
        <Context content="โดยหน่วยงาน ฝบก." />

        {/* ทีมที่ 2 แจ้งเหตุเตือนไว  พร้อมใช้ระบบสื่อสาร (Line Notify) */}


      </div>
      <div style={{ height: 30, width: '100%', backgroundColor: "#f37021", position: 'fixed', bottom: 0 }}></div>


    </div>
  )
}

export default withRouter(Day1)