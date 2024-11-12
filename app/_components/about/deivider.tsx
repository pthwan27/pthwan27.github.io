const Divider = ({ title }: { title: string }) => {
  return (
    <div className="divider center">
      <span className="divider-items">{title}</span>
    </div>
  );
};

export default Divider;
