import Card from "@/components/card/Card";

function PartOne() {
  return (
    <section
      className={
        "container grid px-5 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center gap-x-24 gap-y-5 w-11/12 mx-auto items-center my-4 "
      }
    >
      <Card
        info={
          "في هذه الوحدة يتم دراسة عدة مفاهيم مثل التكيف والبقاء وكيف تعمل الحواس والضوء وحاسة البصر"
        }
        urlImage={"/images/unitone.avif"}
        title={"الذهاب للوحدة الاولي"}
        urlLink={"/part1/unitOne"}
      />
      <Card
        info={
          "في هذه الوحدة يتم دراسة عدة مفاهيم مثل  الحركة والتوقف والتصادم  "
        }
        urlImage={"/images/unit-two-term1.jpg"}
        title={"الذهاب للوحدة الثانية"}
        urlLink={"/part1/unitTwo"}
      />
    </section>
  );
}

export default PartOne;
