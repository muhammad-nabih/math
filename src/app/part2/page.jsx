import Card from "@/components/card/Card";

function PartTwo() {
  return (
    <section
      className={
        "container grid px-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center gap-x-24 gap-y-5 w-11/12 mx-auto items-center my-4 "
      }
    >
      <Card
        info={
          "في هذه الوحدة يتم شرح الاجهزة والطاقة والوقود والمصادر المتجددة "
        }
        urlImage={"/images/unitOne-term2.jpg"}
        title={"الذهاب للوحدة الثالثة"}
        urlLink={"/part2/unitOne"}
      />
      <Card
        info={"في هذه  الوحدة يتم شرح  مفهوم تفتت الصحور وتغير السطح والقوي التي تشكل السطح "}
        urlImage={"/images/unitfour.jpg"}
        title={"الذهاب للوحدة الرابعة"}
        urlLink={"/part2/unitTwo"}
      />
    </section>
  );
}

export default PartTwo;
