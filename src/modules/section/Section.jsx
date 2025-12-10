export default function Section({ children }) {
  return (
    <section className="flex-1 bg-stone-900 px-6 py-4 overflow-auto">
      {children}
    </section>
  );
}
