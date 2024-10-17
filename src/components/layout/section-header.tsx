export default function SectionHeader({
  children,
  headerStyle,
  title,
}: {
  children?: React.ReactNode;
  headerStyle?: string;
  title: string;
}) {
  return (
    <div className="flex justify-between items-center flex-wrap gap-2">
      <h2
        className={`text-primary text-2xl lg:text-3xl font-semibold flex gap-2 items-center mb-4 ${headerStyle}`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}