"use client";
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { delay, motion } from "framer-motion";
import "./landing.css";
import styles from "./Landing.module.css";
import Image from "next/image";

export default function Landing() {
  const typeWriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typeWriterRef.current, {
      loop: true,
      delay: 90, // سرعة الطباعة
    });

    typewriter
      .typeString(
        `اهلا في مقرر 
    <span class='text_blue_400'> العلوم</span> للصف الرابع الابتدائي`
      )
      .pauseFor(2000) // إيقاف لمدة ثانية
      .deleteAll() // مسح النص
      .start();

    return () => {
      typewriter.stop(); // توقف التأثير عندما يتم تفريغ المكون
    };
  }, []);

  return (
    <section className={styles.landing}>
      <div className={styles.flowerContainer}>
        <Image
          src={"/images/manMath.png"}
          width={300}
          height={500}
          priority={true}
          alt="Flowers"
        />
      </div>
      <div className={styles.womanContainer}>
        <Image
          src={"/images/pencil.png"}
          width={300}
          height={500}
          priority={true}
          alt="Woman Read"
        />
      </div>

      {/* Start Text Info Section */}
      <article className={styles.textInfo}>
        <h1
          className={`${styles.headText}`}
          ref={typeWriterRef} // إضافة المرجع للطابعة
        ></h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`text-xl  text-gray-400 leading-9 font-bold ${styles.description}`}
        >
          يُعدّ منهج الرياضيات للصف الثاني الابتدائي رحلة ممتعة تهدف إلى تنمية
          مهارات الطلاب في التفكير المنطقي وحل المشكلات. يُغطّي المنهج مجموعة
          واسعة من المواضيع، بدءًا من الأعداد الأساسية والعمليات الحسابية
          البسيطة، مرورًا بالقياس والبيانات، وصولًا إلى الأشكال الهندسية
          والكسور.
        </motion.p>
      </article>
    </section>
  );
}
