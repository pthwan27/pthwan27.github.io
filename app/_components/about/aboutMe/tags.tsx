const Tags = ({ skills }: { skills: string[] }) => {
  return (
    <span className="py-1">
      {skills.map((skill, idx) => (
        <div key={idx}>
          <span className=""># {skill}</span>
        </div>
      ))}
    </span>
  );
};
export default Tags;
