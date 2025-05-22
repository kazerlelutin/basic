// Counter.test.tsx
import { describe, it, beforeEach, afterEach, mock, spyOn, expect } from "bun:test";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
//IMPORT ALL THE MODULE TO BE ABLE TO SPY ON THE USECOUNTER FUNCTION
import * as CounterModule from "./counter.ctrl";
import { Counter } from "./Counter";

import { jest } from "bun:test";

describe("Counter component", () => {
  let handleIncrement: jest.Mock;
  let handleDecrement: jest.Mock;
  let useCounterSpy: ReturnType<typeof spyOn>;

  beforeEach(() => {
    mock.restore();

    handleIncrement = jest.fn();
    handleDecrement = jest.fn();

    useCounterSpy = spyOn(CounterModule, "useCounter").mockImplementation(() => ({
      count: 0,
      handleIncrement,
      handleDecrement,
    }));
  });

  afterEach(() => {
    mock.restore();
  });

  it("affiche le compteur initial à 0", () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("appelle handleIncrement quand on clique sur Increment", async () => {
    render(<Counter />);
    act(() => fireEvent.click(screen.getByText("Increment")));

    await waitFor(() => {
      expect(handleIncrement).toHaveBeenCalledTimes(1);
    });
  });

});
