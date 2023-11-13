

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center w-4/12 mx-auto space-y-2 mb-10">
            <p className="text-yellow-600 capitalize">--- {subHeading} ---</p>
            <h2 className="text-4xl uppercase border-y-4 py-4">{heading}</h2>
            
        </div>
    );
};

export default SectionTitle;