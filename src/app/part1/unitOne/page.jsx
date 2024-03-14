import { MathLesson } from "@/components/MathLesson/MathLesson";
import { lessons } from "./data";
import styles from "../part.module.css";
import Content from "@/components/content/Content";
import Iframe from "@/components/Iframe/Iframe";
const UnitOne = () => {
  return (
    <div className={styles.body}>
      {" "}
      {lessons.map((lesson) => (
        <MathLesson
          key={lesson.lessonNumber}
          lessonNumber={lesson.lessonNumber}
          lessonTitle={lesson.lessonTitle}
          lessonContent={lesson.lessonContent}
          list={lesson.list}
        ></MathLesson>
      ))}
      <Content />
      <div className="container flex flex-wrap justify-between p-2 rounded-xl gap-3 my-5 mx-auto ">
        <Iframe
          src={"https://www.youtube.com/embed/0f_ZIGtRQ7s?si=KtDYgp5rgBfCuU3F"}
        />
        <Iframe
          src={"https://www.youtube.com/embed/nmTyv_uhmNU?si=FTym87TEssHewj7d"}
        />
        <Iframe
          src={"https://www.youtube.com/embed/coDygkM6y3c?si=zE95L8-oINsNIlmk"}
        />
        <Iframe
          src={"https://www.youtube.com/embed/ZbJth-09VQw?si=D4eNS-uJjdbLq5bv"}
        />
        <Iframe
          src={"https://www.youtube.com/embed/_5CyXc3RqiA?si=pBxh2sYfNKgB6d7a"}
        />
        <Iframe
          src={"https://www.youtube.com/embed/AhdP8kCiPcc?si=uwHBH6AjgEWQCwv7"}
        />
      </div>
      );
    </div>
  );
};

export default UnitOne;
