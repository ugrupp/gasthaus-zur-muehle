interface ContainerProps {
  className?: string;
  classNameInner?: string;
}

const Container: React.FC<ContainerProps & React.HTMLProps<HTMLDivElement>> = ({
  children,
  className = "",
  classNameInner = "",
  ...props
}) => {
  return (
    <div className={`px-20 sm:px-30 lg:px-60 ${className}`} {...props}>
      <div className={`max-w-7xl mx-auto ${classNameInner}`}>{children}</div>
    </div>
  );
};

export default Container;
