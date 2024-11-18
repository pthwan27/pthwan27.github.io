import { stack } from "@/app/_types/types";

const Stacks = ({ stacks }: { stacks: stack[] }) => {
  return (
    <div className="flex">
      {stacks.map((item, index) => (
        <div key={index} className="stack-item center column">
          <item.icon />
          <span className="mt-4">{item.stack}</span>
        </div>
      ))}
    </div>
  );
};
export default Stacks;
