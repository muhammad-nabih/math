export const MathLesson = ({
  lessonNumber,
  lessonTitle,
  lessonContent,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-52 w-12/12 mx-auto px-5 ">
      <div className="p-8 border-blue-300 border min-h-60 my-3 w-8/12 rounded-lg shadow-lg bg-stone-950">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">
          ✍الدرس {lessonNumber}: {lessonTitle}
        </h2>
        <div className="mb-4">{lessonContent}</div>
      </div>
    </div>
  );
};
