const Tags = ({ skills }: { skills: string[] }) => {
  return (
    <ul className="aggroL">
      {skills.map((e, idx) => {
        return <li key={idx}> #{e}</li>;
      })}
    </ul>
  );
};
export default Tags;
