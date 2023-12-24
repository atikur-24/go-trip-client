const SectionTitle = ({ title, content }) => {
    const firstWord = title.split(" ")[0];
    const secondWord = title.split(" ")[1];

  return (
    <div className="mb-6 xl:space-y-2 flex flex-col items-center justify-center space-y-1 md:mb-8 lg:mb-12 lg:space-y-4 ">
      <h2 className="font-semibold lg:font-bold uppercase  text-title-color text-xl lg:text-3xl lg:tracking-wide">
        {firstWord} <span className="text-my-primary">{secondWord}</span>
      </h2>
      <p className="text-justify  text-gray-9 md:w-2/3 lg:mx-32 lg:text-center text-xs md:text-sm xl:text-base">
        {content}
      </p>
    </div>
  );
};

export default SectionTitle;
