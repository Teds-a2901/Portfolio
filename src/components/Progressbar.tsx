type ProgressBarProps = {
  skill: string;
  percentage: string;
};

const Progressbar: React.FC<ProgressBarProps> = ({ skill, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span>{percentage}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-300 rounded-full animation-progress "
          style={
            {
              "--target-width": percentage,
              "--delay": 0.6,
              width: "0%",
            } as React.CSSProperties
          }
        ></div>
      </div>
    </div>
  );
};

export default Progressbar;
