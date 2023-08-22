import { useState } from 'react'
import './App.css'
import cards from './component/cards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid d-flex flex-row justify-content-end px-5 py-3 gap-5 fw-light">
            <p className="pt-3">الأكاديميات التابعة</p>
            <p className="pt-3">حول الأكاديمية</p>
            <p className="pt-3">المعسكرات والبرامج</p>
            <p className="pt-3">الرئيسية</p>
            <img className = "nav-logo" src="logo.svg"></img>
    </div>

    <div className="secound-part1 pb-3">
    <div className="secound-part p-3 rounded-3 mt-5 container shadow-sm d-flex flex-row justify-content-around">

            <button className="bg-gray-400 rounded-circle border border-0 p-3">
                <img className = "fillter-img" src="filter.svg"></img>
            </button>
<div>
    <button className="btn-young bg-white btn px-5 rounded-pill fs-5 fw-light">الناشئون</button>
    <button className="btn-old btn px-5 border rounded-pill fs-5 fw-light">الكبار</button>
</div>

<div><p className="fs-2 fw-bold">المعسكرات والبرامج</p></div>
    </div>
</div>

<div className="card-con d-flex">
    <div className="border-end border-primary border-5 rounded d-flex flex-column p-5">
    <Cards
    typen = "لقاء"
    name = "مستقبل الأمن السيبراني في الخدمات السحابية"
    place = "الرياض"
    duration = "يوم"
    date = "يبدأ في 21-08-2023"
    />

<Cards
    typen = "برنامج"
    name = "التحقيق الرقمي والاستجابة للحوادث"
    place = "الرياض"
    duration = "اسبوعان"
    date = "يبدأ في 27-08-2023"
    />


<Cards
    typen = "معسكر"
    name = "علم المعلومات والحوسبة الكمية"
    place = "الرياض"
    duration = "6اسابيع "
    date = "يبدأ في 03-09-2023"
    />



<Cards
    typen = "معسكر"
    name = "طويق للأمن السيبراني"
    place = "الرياض"
    duration = "18 اسبوع"
    date = "يبدأ في 01-10-2023"
    />


<Cards
    typen = "برنامج"
    name = "أمن المعلومات (Security + Certification)"
    place = "الرياض"
    duration = "اسبوعان"
    date = "يبدأ في 20-08-2023"
    />


<Cards
    typen = "لقاء"
    name = "مستقبل الأمن السيبراني في الخدمات السحابية"
    place = "الرياض"
    duration = "يوم"
    date = "يبدأ في 21-08-2023"
    />
    </div>
</div>

<div className="footer p-5 d-flex flex-column justify-content-center align-items-center justify-content-around gap-5 text-white">
    <div className="d-flex flex-row p-5 justify-content-evenly gap-4">
        <img src="/logos.svg"></img>
        <div className="d-flex flex-column">
            <div className="d-flex flex-row gap-1">
                <img className="w-full h-full " src="linkedin-icon.svg" alt="Tuwaiq Academy Linkedin Account"></img>
            <img className="w-full h-full" src="snapchat-icon.svg" alt="Tuwaiq Academy Snapchat Account"></img>
            <img className="w-full h-full" src="youtube-icon.svg" alt="Tuwaiq Academy Youtube Account"></img>
            <img className="w-full h-full" src="twitter-icon.svg"></img>
            <img style="width: 24px;" src="discord-icon.svg"></img>
            </div>
            
            <p>@TuwaiqAcademy</p>
        </div>
        <div className="d-flex flex-column">
<p>الشروط والآحكام</p>
<p>سياسة الخصوصية</p>
        </div>
        <div className="d-flex flex-column">
            <p>شارك كمدرب</p>
            <p>حول الأكاديمية</p>
                    </div>
                    <img className = "foot-logo" src="logo.svg"></img>
    </div>
    <div className="rights fw-lighter">جميع الحقوق محفوظة لأكاديمية طويق 2023</div>
</div>
    </>
  )
}

export default App
