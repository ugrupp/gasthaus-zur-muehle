interface ContainerProps {
  className?: string;
  classNameInner?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  classNameInner = "",
}) => {
  return (
    <div className={`px-20 sm:px-30 lg:px-60 ${className}`}>
      <div className={`max-w-screen-xl mx-auto ${classNameInner}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
