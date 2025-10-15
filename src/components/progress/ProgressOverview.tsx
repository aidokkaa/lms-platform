import React from 'react'
import styles from './progress.module.css'
type Lesson={
  id:number,
  title:string,
  completed:boolean
}
type Course={
  id:number,
  name:string,
  desc?:string,
  totalLessons:number,
  completedLessons:number,
  lessons?:Lesson[]
}

const ProgressOverview = () => {
  React.useEffect(()=>{
    const progress = coursesProgress.map(item=>(item.completedLessons/item.totalLessons)*100)
    console.log(progress)
  },[])
  const coursesProgress:Course[] = [
  {
    id: 1,
    name: "JavaScript Basics",
    desc: "Learn the fundamentals of JavaScript, including syntax, variables, and basic logic.",
    totalLessons: 3,
    completedLessons: 2, 
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    desc: "Dive deeper into closures, promises, and asynchronous programming in JavaScript.",
    totalLessons: 2,
    completedLessons: 1,
  },
  {
    id: 3,
    name: "React Fundamentals",
    desc: "Build interactive UIs using React components, props, and state management.",
    totalLessons: 5,
    completedLessons: 4,
  },
  {
    id: 4,
    name: "TypeScript Essentials",
    desc: "Understand TypeScript’s type system and how to write safer, cleaner code.",
    totalLessons: 4,
    completedLessons: 1,
  },
];


  return(
    <>
    <div className={styles.progressGrid}>
  {coursesProgress
    .filter((item) => item.completedLessons > 0)
    .map((item) => {
      const progress = Math.round(
        (item.completedLessons / item.totalLessons) * 100
      );
      return (
        <div key={item.id} className={styles.progressCard}>
          <div className={styles.courseName}>{item.name}</div>
          <div className={styles.courseDesc}>{item.desc}</div>

          <div className={styles.progressWrapper}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className={styles.progressText}>{progress}%</span>
          </div>
        </div>
      );
    })}
</div>

    </>
  )
  
}

export default ProgressOverview
