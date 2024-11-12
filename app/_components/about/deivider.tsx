const Divider = ({ title }: { title: string }) => {
  return (
    <div className="divider aggroM center">
      <span className="desc__section-items">{title}</span>
    </div>
  );
};

export default Divider;
