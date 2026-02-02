import Logo from "@/assets/Logo.png";

interface PageLoaderProps {
  visible: boolean;
  pageName: string;
}

const PageLoader = ({ visible, pageName }: PageLoaderProps) => {
  return (
    <div
      className={`
        fixed inset-0 z-[100] bg-white
        flex flex-col items-center justify-center
        transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <img
        src={Logo}
        alt="Logo"
        className="w-40 mb-8 animate-fade-in"
      />

      <p className="text-lg tracking-wide text-[#394D57] mb-6">
        Loading {pageName}...
      </p>

      <div className="w-64 h-1 bg-gray-200 overflow-hidden rounded">
        <div className="h-full bg-[#577583] animate-loading-bar" />
      </div>
    </div>
  );
};

export default PageLoader;
