function WhyChooseUs() {
  const reasons = [
    { title: "Fast and Easy Process", desc: "No long forms or delays." },
    { title: "Secure Buyers", desc: "Verified and trusted license buyers." },
    { title: "Best Price Guarantee", desc: "We find you the best rates." },
    { title: "Dedicated Support", desc: "Get real help from real people." },
  ];
  return (
    <section className=" px-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="dark:bg-[#1b263b] dark:text-[#e0e1dd] bg-[#0d1b2a] text-[#e0e1dd] p-4 rounded shadow"
          >
            <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
            <p>{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
