import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect, vi } from "vitest";
import { Faq } from "components/faq";

interface FaqInfoProps {
  question: string;
  answer: string;
}

vi.mock("components/faqInfo", () => ({
  FaqInfo: ({ question, answer }: FaqInfoProps) => (
    <div data-testid="faq-info">
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  ),
}));

describe("Faq component", () => {
  test("should render FAQ title", () => {
    render(<Faq />);
    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });

  test("should render all FAQ questions and answers", () => {
    render(<Faq />);

    const questions = [
      "How can I track the status of my order?",
      "What payment methods do you accept?",
      "How can I return or exchange an item?",
    ];

    questions.forEach((question) => {
      expect(screen.getByText(question)).toBeInTheDocument();
    });
  });
});
