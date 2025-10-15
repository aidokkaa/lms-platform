import styles from './coursePage.module.css'
import React from 'react';
import TopNav from '../../components/headers/HeaderForOthers'

const CoursePage = () => {
const [openBox, setOpenBox] = React.useState<number | null>(null);

const sections = [
  { id: 1, title: "Materials", content: "Все материалы курса: видео, PDF, задания..." },
  { id: 2, title: "Требования", content: "Базовые знания JavaScript, браузер, VSCode..." },
  { id: 3, title: "Описание курса", content: "Курс охватывает основы и продвинутые темы JS..." },
];

  return (
    <div>
      <TopNav></TopNav>
      <main className={styles.mainGray}>
        <section className={styles.flexDiv}>
          <div className={styles.leftDiv}>

            <div className={styles.leftTop}>
              <p>category1</p>

              <h1>CourseTopic</h1>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos corrupti numquam, voluptatibus deleniti possimus, expedita, repudiandae
                tenetur dicta pariatur aut voluptatem eaque in magni quo officia! Non, rerum iste.</p>
              <div className={styles.btn}>Course details </div>
            </div>
            <div className={styles.leftBottom}>
              {/* <div className={styles.leftBtmList}>
                <div className={styles.listItem}>Overview</div>
                <div className={styles.div}>|</div>
                <div className={styles.listItem}>Course Content</div>
                <div className={styles.div}>|</div>
                <div className={styles.listItem}>Reviews</div>
              </div> */}
              <h3> 📚Описание курса</h3>
              <div className={styles.loremObj}>
                {/* {
                  loremArr.map((item, i) => (
                    <p key={i}>✅ {item}</p>
                  ))
                } */}
                <p>
В курсе используется последняя версия React - 18!

Если вы хотите стать успешным React программистом - этот курс для вас.</p>
              </div>
            </div>
          </div>
          <div className={styles.rightDiv}>
            <div className={styles.imgOrVid}>Photo
              <img src="https://www.unicraft.org/wp-content/uploads/2021/05/Asset-61@1000x-8.png.webp" alt="" />
            </div>

            <div className={styles.includings}>
              <div className={styles.btn}>Start course</div>This course includes
              <ul>
                <li>506 min video</li>
                <li> 15 sprints</li>
                <li>271 tasks</li>
                <li>Projects</li>
                <li>Help and support</li>
                <li>Fixing bugs</li>
                <li>Unlimited access</li>
              </ul>
            </div>
          </div>
        </section>
        <div className={styles.fullDetails}>
         <div className={styles.detailsCourse}>
    <h2>Полное описание курса</h2>
    {sections.map((sec) => (
      <div
        key={sec.id}
        className={`${styles.infoBox} ${openBox === sec.id ? styles.open : ""}`}
        onClick={() => setOpenBox(openBox === sec.id ? null : sec.id)}
      >
        <h3>{sec.title}</h3>
        <p>{sec.content}</p>
      </div>
    ))}
  </div>
        </div>
      </main>
    </div>
  )
}

export default CoursePage
