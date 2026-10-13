interface SectionHeaderProps {
  title: string;
  subTitle: string;
}

export const SectionHeader = ({ title, subTitle }: SectionHeaderProps) => {
  return (
    <div className="mx-auto text-centre max-w-2xl py-8 sm:px-4">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
};
