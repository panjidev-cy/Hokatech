const SkillsList = ({ skills }) => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-3 gap-x-8  gap-y-2">
        {skills.map((skill, index) => (
            <div key={index} className="list-disc flex items-star relative">
            <div className="w-3 h-3 rounded-full bg-purple  flex-shrink-0 absolute -top-1 -left-1 shadow-sm shadow-slate-300  border-2 border-slate-200"></div>
            <span className="bg-white text-black px-2 py-1 shadow-sm shadow-slate-300 rounded-sm mt-1">{skill}</span>
        </div>
        ))}
    </div>
    );
};


export default SkillsList;