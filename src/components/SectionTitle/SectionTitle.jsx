

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-10">
            <p className="text-yellow-600 p-2">---{subHeading}---</p>
            <p className="uppercase text-4xl p-3  border-gray-400 border-y-2 ">{heading}</p>
        </div>
    );
};

export default SectionTitle;