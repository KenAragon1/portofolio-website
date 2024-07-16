import { ReactNode } from "react";

type ComponentProps = {
  children: ReactNode;
};

const GridBackground: React.FC<ComponentProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full from bg-dot-gray-500/[0.45] z-[-1] relative flex items-center justify-center">
      {children}
    </div>
  );
};

export default GridBackground;
