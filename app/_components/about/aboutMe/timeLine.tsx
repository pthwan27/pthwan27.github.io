import { TimeLine } from "@/app/_types/types";

const Experience = ({ data }: { data: TimeLine[] }) => {
  const getTimelineRange = () => {
    const startDates = data.map((item) => new Date(item.start).getTime());
    const endDates = data.map((item) => new Date(item.end).getTime());
    return {
      minDate: Math.min(...startDates),
      maxDate: Math.max(...endDates),
    };
  };

  const getLeftPosition = (start: string) => {
    const { minDate, maxDate } = getTimelineRange();
    const totalDuration = maxDate - minDate;

    const startTime = new Date(start).getTime();

    const usableWidth = 70; // 사용할 전체 너비
    const margin = (100 - usableWidth) / 5; // 양쪽 여백

    const leftPosition = ((startTime - minDate) / totalDuration) * usableWidth + margin;

    return { left: `${leftPosition}%` };
  };

  return (
    <div className="timeline-wrapper">
      <div className="timeline-container center">
        <div className="timeline-line" />
        {data.map((item, idx) => (
          <div key={idx} className="timeline-item" style={getLeftPosition(item.start)}>
            <div className="timeline-dot br-full" />
            <div className="content-hover">
              <div className="timeline-content">
                <div className="title text-14 pBold">{item.title}</div>
                <div className="date text-10">{item.start}</div>
                <div className="date text-10">{item.end}</div>
                <div className="hover-content p-4 br-12">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
