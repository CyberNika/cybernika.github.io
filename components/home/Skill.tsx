import cn from "classnames";
import dynamic from "next/dynamic";

const SkillGraph = dynamic(() => import("./SkillGraph"), {
  ssr: false,
});

const HomeSkill = () => {
  return (
    <div className="home-section h-screen text-center">
      <h3 className="home-section-title">
        <p>我热爱编程</p>
        <p>
          相信优雅的代码和艺术
          <span className="home-section-title-magic">可以改变人们的生活</span>
        </p>
      </h3>

      <h3 className="home-section-title">
        <p>我钟爱挑战</p>
        <p>
          认为不断尝试和勇于探索
          <span className="home-section-title-magic">可以让我们成长</span>
        </p>
      </h3>

      <div className="mt-6 overflow-hidden">
        <SkillGraph className={cn("w-170 h-80", "max-md:w-full max-md:h-30")} />
      </div>
    </div>
  );
};

export default HomeSkill;
