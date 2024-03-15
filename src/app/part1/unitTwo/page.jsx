import { MathLesson } from "@/components/MathLesson/MathLesson";
import { lessons } from "./data";
import styles from "../part.module.css";
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
        );
      </div>{" "}
      <div className="container flex flex-wrap justify-between p-2 rounded-xl gap-3 my-5 mx-auto ">
        <Iframe
          src={"https://www.youtube.com/embed/WutdwKDczIU?si=cLiDDajtB3VPCmq4"}
        />
        <Iframe
          src={"https://www.youtube.com/embed/WutdwKDczIU?si=XNE3mKA55CHFU-fx"}
        />
      </div>
    </>
  );
};

export default UnitTwo;
