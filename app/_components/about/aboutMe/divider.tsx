const Divider = ({ title }: { title: string }) => {
  return (
    <div className="divider relative center text-left flex mt-4 mb-8 text-16">
      {title}
    </div>
  );
};

export default Divider;
