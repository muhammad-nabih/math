import { MathLesson } from "@/components/MathLesson/MathLesson";
import styles from "../part.module.css";
import { lessons } from "./data";
import Iframe from "@/components/Iframe/Iframe";

function UnitOne() {
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
          src={"https://www.youtube.com/embed/NCNAld8Z52U?si=_EyJhZVRfS5wU8nR"}
        />
        <Iframe
          src={"https://www.youtube.com/embed/pkEZI-ekpdM?si=v2EJA0-vw6xXVxtX"}
        />
        <Iframe
          src={"https://www.youtube.com/embed/aeTUMNfc-y0?si=nAIHolbJPaSlJ8wi"}
        />
        <Iframe
          src={"https://www.youtube.com/embed/yeqSaAWrcdY?si=o-K9fdS-AQUuP5eL"}
        />
      </div>
    </>
  );
}

export default UnitOne;
