import React from "react";
const achievements = [
  { figure: "3.9k+", text1: "Successfully", text2: "Trained" },
  { figure: "15.8k+", text1: "Classes", text2: "Completed" },
  { figure: "97.5k+", text1: "Satisfaction", text2: "Rate" },
  { figure: "100.2k+", text1: "Students", text2: "Community" },
];
function Achievements() {
  return (
    <section className="w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-primary text-white">
        {achievements.map((item, idx) => {
          return (
            <div
              key={idx}
              className="min-w-1/4 h-50 flex flex-col items-center justify-center border-b sm:border-r"
            >
              <h1 className="text-5xl font-bold">{item.figure}</h1>
              <p className="text-xl">
                <span className="font-bold">{item.text1} </span> {item.text2}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Achievements;
