const SectionTitle = ({ title, content, align }) => {
  return (
    <div className={`mb-6 space-y-1 md:mb-8 lg:mb-12 lg:space-y-4 flex flex-col justify-center ${align}`}>
      <p className="bg-my-primary/10 text-my-secondary py-2 px-5 uppercase rounded-md text-sm lg:text-base w-fit">{title}</p>
      <h2 className="font-semibold lg:font-bold text-title-color text-xl lg:text-3xl lg:tracking-wide">
      {content}
     </h2>
    </div>
  );
};

export default SectionTitle;
