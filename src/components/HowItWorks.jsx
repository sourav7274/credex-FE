function HowItWorks() {
  const steps = [
    { title: "Upload License", description: "Submit your license details." },
    { title: "Get Valuation", description: "Receive an instant estimate." },
    { title: "Get Paid", description: "Approve and receive payment." },
  ];
  return (
    <section className="p-10 bg-[#778da9] text-[#0d1b2a] dark:bg-[#0d1b2a] dark:text-[#778da9]">
      <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-around gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="dark:bg-[#778da9]  bg-[#0d1b2a] text-gray-100 p-4 rounded shadow text-center"
          >
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
