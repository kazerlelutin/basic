import { describe, expect, test, beforeEach, afterEach, mock } from "bun:test";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useCounter } from "./counter.ctrl";
import { it } from "bun:test";

describe("useCounter hook", () => {

  it("retourne les bonnes valeurs initiales", () => {
    const hook = renderHook(() => useCounter());
    expect(hook.result.current.count).toBe(0);
    expect(typeof hook.result.current.handleIncrement).toBe("function");
    expect(typeof hook.result.current.handleDecrement).toBe("function");
  });

  it("incrémente le compteur", async () => {
    const hook = renderHook(() => useCounter());
    act(() => {
      hook.result.current.handleIncrement();
    });
    await waitFor(() => {
      expect(hook.result.current.count).toBe(1);
    });
  });

  it("décrémente le compteur", async () => {
    const hook = renderHook(() => useCounter());
    act(() => {
      hook.result.current.handleDecrement();
    });
    await waitFor(() => {
      expect(hook.result.current.count).toBe(-1);
    });
  });

  it("peut incrémenter et décrémenter plusieurs fois", async () => {
    const hook = renderHook(() => useCounter());
    act(() => {
      hook.result.current.handleIncrement();
    });
    act(() => {
      hook.result.current.handleIncrement();
    });
    await waitFor(() => {
      expect(hook.result.current.count).toBe(2);
    });

    act(() => {
      hook.result.current.handleDecrement();
    });
    await waitFor(() => {
      expect(hook.result.current.count).toBe(1);
    });
  });
}); 