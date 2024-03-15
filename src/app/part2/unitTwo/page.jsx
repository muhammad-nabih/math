import { MathLesson } from "@/components/MathLesson/MathLesson";
import styles from "../part.module.css";
import { lessons } from "./data.js";
import Iframe from "@/components/Iframe/Iframe";
const UnitTwo = () => {
  return (
    <>
      <div className={styles.body}>
        {lessons.map((lesson) => (
          <MathLesson
            key={lesson.lessonNumber}
            lessonNumber={lesson.lessonNumber}
            lessonTitle={lesson.lessonTitle}
            lessonContent={lesson.lessonContent}
          ></MathLesson>
        ))}
      </div>
      <div className="container flex flex-wrap justify-between p-2 rounded-xl gap-8 my-16 mx-auto">
        <Iframe
          src={"https://www.youtube.com/embed/OLZt62Ee7Go?si=7IlL22ZRh7uXd4lB"}
        />
        <Iframe
          src={"https://www.youtube.com/embed/l22YAUkisRI?si=Yl4bkieuiZqoBNRp"}
        />
      </div>
    </>
  );
};

export default UnitTwo;
