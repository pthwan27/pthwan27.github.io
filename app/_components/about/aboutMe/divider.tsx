const Divider = ({ title }: { title: string }) => {
  return (
    <div className="divider center mt-16 mb-8 text-16">
      <span className="divider-items px-8">{title}</span>
    </div>
  );
};

export default Divider;
