const Tags = ({ skills }: { skills: string[] }) => {
  return (
    <span className="py-4">
      {skills.map((e, idx) => (
        <span key={idx}>
          {" "}
          <span className="">#</span>
          {e}
        </span>
      ))}
    </span>
  );
};
export default Tags;
