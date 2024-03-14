import Card from "@/components/card/Card";

function PartTwo() {
  return (
    <section
      className={
        "container grid px-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center gap-4 w-11/12 mx-auto items-center "
      }
    >
      <Card
        info={"في هذه  الوحدة يتم شرح  عملية الضرب والتعرف علي جدول الضرب "}
        urlImage={"/images/Multiplication.jpg"}
        title={"الذهاب للوحدة الاولي"}
        urlLink={"/part2/unitOne"}
      />
      <Card
        info={"في هذه  الوحدة يتم شرح عملية القسمه وخواصها واجاد خارجها "}
        urlImage={"/images/division.jpg"}
        title={"الذهاب للوحدة الثانية"}
        urlLink={"/part2/unitTwo"}
      />

      <Card
        info={"في هذه  الوحدة يتم شرح  الكسور والارقام العشرية  "}
        urlImage={"/images/الكسور.avif"}
        title={"الذهاب للوحدة الثالثة"}
        urlLink={"/part2/unitThree"}
      />
      <Card
        info={"في هذه  الوحدة يتم شرح الاعداد من الرقم  واحد الي الرقم  عشرين "}
        urlImage={"/images/data.jpg"}
        title={"الذهاب للوحدة الرابعة"}
        urlLink={"/part2/unitFour"}
      />
    </section>
  );
}

export default PartTwo;
