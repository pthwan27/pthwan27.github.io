const Divider = ({ title }: { title: string }) => {
  return (
    <div className="divider center pRegular mb-4">
      <span className="divider-items">{title}</span>
    </div>
  );
};

export default Divider;
