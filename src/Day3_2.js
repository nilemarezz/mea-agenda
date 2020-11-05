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
      <img src={process.env.PUBLIC_URL + '/image/back.svg'} style={{ width: '6vh', position: 'fixed', marginTop: '14.7vh', zIndex: 10, marginLeft: '2vh' }} onClick={() => props.history.push('/day/3')} />
      <div style={{ backgroundColor: '#f37021', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '18vh', position: 'fixed', width: '100%' }}>
        <div className="day-grow" style={{ margin: '0px 20px 0px 20px' }} >
          <h1 style={{ lineHeight: 0, fontSize: 45, color: '#f37021' }}>AGENDA</h1>
        </div>
        <h1 style={{ color: 'white', fontSize: 45, marginRight: 20 }}>{getData(props.match.params.id)}</h1>
      </div>

      <img src={process.env.PUBLIC_URL + '/image/content.svg'} style={{ marginTop: '20vh', width: '2vh', marginLeft: '15vh', position: 'fixed' }} />
      <div style={{ position: 'fixed', marginTop: '25vh', marginLeft: '2.7vh' }}>
        <Context content="10.50 – 11.05 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 3 }}></div>
        <Context content="11.10 – 11.25 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 3 }}></div>
        <Context content="11.30 – 11.45น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 3 }}></div>
        <Context content="11.45 - 12.00" />
        <div style={{ height: 5 }}></div>
        <Context content="12.00 - 13.00 น." />
        <div style={{ height: 3 }}></div>
        <Context content="13.00 - 13.10 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 1 }}></div>
        <Context content="13.10 - 13.30 น." />
        <Context content="13.30 - 13.50 น." />
        <Context content="13.50 - 14.10 น." />
        <Context content="14.10 - 14.30 น." />
        <div style={{ height: 3 }}></div>
        <Context content="14.30 - 14.40 น." />
        <div style={{ height: 3 }}></div>
        <Context content="14.40 - 15.15 น." />
        <div style={{ height: 3 }}></div>
        <Context content="15.15 - 15.25 น." />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 1 }}></div>
        <Context content="15.25 - 15.30 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 0.2 }}></div>
        <Context content="15.30 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
      </div>
      <div style={{ position: 'fixed', marginLeft: '19vh', marginTop: '25vh' }}>
        <Context content="บทความที่ 7 สัญญาณรบกวน" color='#f37021' />
        <Context content="โดย คุณศุภเชษฐ์ เนียมโสภา" />
        <Context content="ผู้ช่วยผู้อำนวยการกองระบบสื่อสาร สังกัด ฝคฐ." />
        <div style={{ height: 3 }}></div>
        <Context content="บทความที่ 8 บริการเครือข่ายอินเทอร์เน็ตพื้นฐานและบริการที่รองรัย" color='#f37021' />
        <Context content="IPv6 ของการไฟฟ้านครหลวง" color='#f37021' />
        <Context content="โดย คุณธวัชชัย มัทนัง นักประมวลผลข้อมูล 6 สังกัด ฝคฐ." />
        <div style={{ height: 3 }}></div>
        <Context content="บทความที่ 9 โครงการลดก๊าซเรือนกระจกภาคสมัครใจตามมาตรฐาน" color='#f37021' />
        <Context content="ของประเทศไทย (T-VER) กรณีศึกษา การปรับเปลี่ยนเครื่องทำน้ำเย็น" color='#f37021' />
        <Context content="ประสิทธิภาพสูงของอาคาร ณ ที่ทำการการไฟฟ้านครหลวง" color='#f37021' />
        <Context content="โดย คุณนวลจันทร์ อัศวรังษี นักวิชาการ 6 สังกัด ฝสส." />
        <div style={{ height: 3 }}></div>
        <Context content="มอบเกียรติบัตร เงินรางวัล และถ่ายภาพร่วมกัน" color='#f37021' />
        <div style={{ height: 3 }}></div>
        <Context content="พักรับประทานอาหารกลางวัน" />
        <div style={{ height: 3 }}></div>
        <Context content="การแข่งขันตอบคำถามทักษะด้านสำนักงาน" color='#f37021' />
        <Context content="พิธีกรชี้แจงกติกา และแนะนำกรรมการ" color='#f37021' />
        <div style={{ height: 3 }}></div>
        <Context content="การแข่งขันตอบคำถามทักษะด้านสำนักงาน รอบคัดเลือกสาย A" />
        <Context content="การแข่งขันตอบคำถามทักษะด้านสำนักงาน รอบคัดเลือกสาย B" />
        <Context content="การแข่งขันตอบคำถามทักษะด้านสำนักงาน รอบคัดเลือกสาย C" />
        <Context content="การแข่งขันตอบคำถามทักษะด้านสำนักงาน รอบคัดเลือกสาย D" />
        <div style={{ height: 3 }}></div>
        <Context content="โหวตทีมโดนใจ " color='#f37021' />
        <div style={{ height: 3 }}></div>
        <Context content="การแข่งขันตอบคำถามทักษะด้านสำนักงาน รอบชิงชนะเลิศ" color='#f37021' />
        <div style={{ height: 3 }}></div>
        <Context content="ประกาศผล และมอบรางวัล" color='#f37021' />
        <Context content="การแข่งขัน ตอบคำถามทักษะด้านสำนักงาน" color='#f37021' />
        <div style={{ height: 3 }}></div>
        <Context content="MEA Lucky Draw จำนวน 2 รางวัล" />

        <ul>
          <li><Context content="รางวัลสำหรับผู้โชคดีที่อยู่ภายในงาน" size="small" /></li>
          <li><Context content="รางวัลสำหรับผู้โชคดีที่รับชมทางออนไลน์" size="small" /></li>
        </ul>

        <div style={{ height: 4 }}></div>
        <Context content="เสร็จสิ้นพิธีการ" />
        {/* ทีมที่ 2 แจ้งเหตุเตือนไว  พร้อมใช้ระบบสื่อสาร (Line Notify) */}


      </div>
      <div style={{ height: 30, width: '100%', backgroundColor: "#f37021", position: 'fixed', bottom: 0 }}></div>


    </div>
  )
}

export default withRouter(Day1)