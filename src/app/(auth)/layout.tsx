interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return <div className="flex min-h-screen items-center justify-center">{children}</div>;
};

export default layout;
