import { Stack } from "@/app/_types/types";

const Stacks = ({ data }: { data: Stack[] }) => {
  return (
    <div className="flex row">
      {data.map((item, index) => (
        <div key={index} className="stack-item center flex-col">
          <item.icon />
          <span className="mt-1">{item.stack}</span>
        </div>
      ))}
    </div>
  );
};
export default Stacks;
