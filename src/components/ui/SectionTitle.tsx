type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10 sm:mb-12">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {subtitle && <p className="paragraph mt-3 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
