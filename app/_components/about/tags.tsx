const Tags = ({ skills }: { skills: string[] }) => {
  return (
    <ul className="pExtraThin py-8">
      {skills.map((e, idx) => {
        return (
          <li key={idx}>
            {" "}
            <span className="pMedium"># </span>
            {e}
          </li>
        );
      })}
    </ul>
  );
};
export default Tags;
