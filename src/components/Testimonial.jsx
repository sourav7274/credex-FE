function Testimonials() {
  const reviews = [
    {
      text: "SoftSell made it super easy to offload our extra Office 365 licenses.",
      name: "Lisa Ray",
      role: "IT Manager, ByteTech Inc.",
    },
    {
      text: "I was skeptical, but we got paid within 48 hours!",
      name: "Mike Tran",
      role: "CTO, CloudNest",
    },
  ];
  return (
    <section className="bg-[#778da9] text-[#0d1b2a] py-8 dark:bg-[#0d1b2a] dark:text-[#778da9] px-10">
      <p className="text-4xl font-bold mb-6 text-center">
        What Our Customers Say
      </p>
      <div className="space-y-6">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="dark:bg-[#778da9] dark:text-[#0d1b2a] bg-[#0d1b2a] text-[#778da9]  p-4 rounded shadow"
          >
            <p className="italic">"{review.text}"</p>
            <p className="mt-2 font-semibold">
              - {review.name}, {review.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
