export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center my-5 section-title">
      <h2 className="fw-bold">{title}</h2>
      {subtitle && <p className="text-muted mb-2">{subtitle}</p>}
      <hr className="border-primary" />
    </div>
  );
}
