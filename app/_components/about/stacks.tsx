import Image from "next/image";

const Stacks = ({ stacks }: { stacks: string[] }) => {
  return (
    <div className="flex">
      {stacks.map((stack, idx) => {
        return (
          <div key={stack + idx} className="center column m-4">
            <span>
              <Image src={`/images/profile.jpg`} width={80} height={80} alt="" />
            </span>
            <div>{stack}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Stacks;
