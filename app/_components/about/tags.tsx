const Tags = ({ skills }: { skills: string[] }) => {
  return (
    <ul className="pLight">
      {skills.map((e, idx) => {
        return <li key={idx}> #{e}</li>;
      })}
    </ul>
  );
};
export default Tags;
