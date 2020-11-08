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
      <img src={process.env.PUBLIC_URL + '/image/next.svg'} style={{ width: '6vh', position: 'fixed', marginTop: '14.7vh', zIndex: 10, marginLeft: '48vh' }} onClick={() => props.history.push('/day/3-2')} />
      <div style={{ backgroundColor: '#f37021', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '18vh', position: 'fixed', width: '100%' }}>
        <div className="day-grow" style={{ margin: '0px 20px 0px 20px' }} >
          <h1 style={{ lineHeight: 0, fontSize: 45, color: '#f37021' }}>AGENDA</h1>
        </div>
        <h1 style={{ color: 'white', fontSize: 45, marginRight: 20 }}>{getData(props.match.params.id)}</h1>
      </div>

      <img src={process.env.PUBLIC_URL + '/image/content.svg'} style={{ marginTop: '20vh', width: '2vh', marginLeft: '15vh', position: 'fixed' }} />
      <div style={{ position: 'fixed', marginTop: '24vh', marginLeft: '2.7vh' }}>
        <Context content="07.30 – 08.30 น." />
        <div style={{ height: 5 }}></div>
        <Context content="08.30 – 08.40 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />

        <div style={{ height: 5 }}></div>
        <Context content="08.40 – 08.55 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="09.00 - 09.15 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="09.20 - 09.35 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="09.40 - 09.55 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="10.00 - 10.15 น." />
        <Context content="&nbsp;&nbsp;" />
        <Context content="&nbsp;&nbsp;" />
        <div style={{ height: 5 }}></div>
        <Context content="10.15 - 10.30 น." />
        <div style={{ height: 5 }}></div>
        <Context content="10.30 - 10.45 น." />
        <Context content="&nbsp;&nbsp;" />
      </div>
      <div style={{ position: 'fixed', marginLeft: '19vh', marginTop: '24vh' }}>
        <Context content="ลงทะเบียนผู้เข้าร่วมงาน" />
        <div style={{ height: 5 }}></div>
        <Context content="การนำเสนอบทความทางวิชาการของ กฟน. ประจำปีการศึกษา 2563" color='#f37021' />
        <Context content="พิธีกรกล่าวต้อนรับ และแนะนำ Session Chair" color='#f37021' />
        <div style={{ marginLeft: 15 }}>
          <Context content="คุณไชยวัฒน์ อภิธนวิทย" color='purple' />
          <Context content="นบ.8 หัวหน้าแผนก สังกัด ฝคฟ." size="small" />
          <Context content="คุณกังวาน เจริญครบุร" color='purple' />
          <Context content="วิศวกรไฟฟ้า 8 สังกัด ฝวฟ." size="small" />
          <Context content="คุณสปิตา จิตตสินนวา" color='purple' />
          <Context content="นักประมวลผลข้อมูล 8 ฝคฐ." size="small" />
        </div>
        <div style={{ height: 5 }}></div>
        <Context content="บทความที่ 1  การออกแบบติดตั้งระบบพลังงานแสงอาทิตย์" color='#f37021' />
        <Context content="บนหลังคา และการวิเคราะห์ความเป็นไปได้สำหรับการลงทุน" color='#f37021' />
        <Context content="โดย คุณณัฐพงษ์ บุญราช วิศวกรไฟฟ้า 4 สัง กัด ฝธค." />

        <div style={{ height: 5 }}></div>
        <Context content="บทความที่ 2  ระบบประมวลผลหน่วยไฟฟ้าสูญเสียในระบบไฟฟ้า" color='#f37021' />

        <Context content="แรงดันต่ำแบบอัตโนมัติ" color='#f37021' />
        <Context content="  โดย คุณภัทริน กิจเจริญ วิศวกรไฟฟ้า 4 สังกัด ฝวจ." />
        <div style={{ height: 5 }}></div>

        <div style={{ height: 5 }}></div>
        <Context content="บทความที่ 3  การพัฒนาขอใช้ไฟฟ้าและระบบชำระเงิน" color='#f37021' />
        <Context content="โดย คุณวริทธิ์ เกียรติ์ศักดาวงศ์ วิศวกรไฟฟ้า 7" />
        <Context content="และคุณเบญจพร โกมลฤทธิ์ นักบัญชี 5 สังกัด ฟขร." />
        <div style={{ height: 5 }}></div>
        <Context content="บทความที่ 4  May the Electricity be with You by Field Force" color='#f37021' />
        <Context content="Management System (FFM)" color='#f37021' />
        <Context content="โดย คุณธนา ตั้งก่อเจริญ นักประมวลผลข้อมูล 7 สังกัด ฝพท." />
        <div style={{ height: 5 }}></div>
        <Context content="บทความที่ 5  Implementation of IOT with On-load" color='#f37021' />
        <Context content="Tap changer Transformer in Distribution network" color='#f37021' />
        <Context content="โดย คุณปรัชญา อุดมปริฉัตร วิศวกรไฟฟ้า 6 สังกัด ฝวจ." />
        <div style={{ height: 5 }}></div>
        <Context content="พักรับประทานอาหารว่าง" />
        <div style={{ height: 5 }}></div>
        <Context content="บทความที่ 6  แนวคิดและหลักการพื้นฐานของระบบ Microgrid" color='#f37021' />
        <Context content="เพื่อประยุกต์ใช้งานในพื้นที่ของการไฟฟ้านครหลวง" color='#f37021' />
        <Context content="โดย คุณภัทริน กิจเจริญ วิศวกรไฟฟ้า 4 สังกัด ฝวจ." />


        {/* ทีมที่ 2 แจ้งเหตุเตือนไว  พร้อมใช้ระบบสื่อสาร (Line Notify) */}


      </div>
      <div style={{ height: 30, width: '100%', backgroundColor: "#f37021", position: 'fixed', bottom: 0 }}></div>


    </div>
  )
}

export default withRouter(Day1)