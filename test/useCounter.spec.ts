import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should initialize count to 0 and val to 1', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('should increment count by val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should increment count by updated val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(5);
  });

  it('should update val with setVal', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(10);
    });
    expect(result.current.val).toBe(10);
  });

  it('should increment multiple times', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
  });

  it('should increment correctly after changing val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(3);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(3);
  });

  it('should increment with negative val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(-2);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(-2);
  });

  it('should increment with val set to zero', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(0);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(0);
  });

  it('should handle large val values', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(1000);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1000);
  });
});