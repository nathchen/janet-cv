export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/10 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-foreground/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {year} Janet Kim. All rights reserved.</p>
        <p className="text-foreground/50">Portfolio · Design · Creativity</p>
      </div>
    </footer>
  );
}


