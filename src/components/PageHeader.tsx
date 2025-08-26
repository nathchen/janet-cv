type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 mb-8">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h1>
      {subtitle ? (
        <p className="mt-2 text-foreground/70 max-w-2xl">{subtitle}</p>
      ) : null}
    </div>
  );
}


