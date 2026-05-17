const BOOK_DETAILS = {
  1: {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    summary:
      "This book explains how human behavior affects financial decisions more than technical knowledge.",
  },
  2: {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    summary:
      "A mindset-focused book explaining assets, liabilities, and financial independence.",
  },
  3: {
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    summary:
      "A classic value-investing guide focused on long-term disciplined investing.",
  },
};

export default async function BookSummaryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const book =
    BOOK_DETAILS[id as keyof typeof BOOK_DETAILS];

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:text-white">
        Book not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-black px-6 py-14">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold dark:text-white mb-3">
          {book.title}
        </h1>

        <p className="text-[#888] mb-8">
          by {book.author}
        </p>

        <div className="bg-white dark:bg-[#141414] border border-[#E8E8E8] dark:border-[#2a2a2a] rounded-2xl p-8">
          <h2 className="text-2xl font-semibold dark:text-white mb-4">
            Summary
          </h2>

          <p className="text-[15px] leading-8 text-[#555] dark:text-[#aaa]">
            {book.summary}
          </p>
        </div>
      </div>
    </div>
  );
}