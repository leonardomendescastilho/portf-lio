/**
 * @file useSwipeToDismiss.ts
 * @description Gesto de arrastar para o lado (swipe-to-back, estilo mobile).
 *   Segue o dedo horizontalmente e dispara onDismiss ao passar do limiar.
 *   Só reage a toque (mobile); ignora arrasto vertical (scroll).
 */
import { useCallback, useRef, useState } from "react";
import type { CSSProperties, TouchEvent } from "react";

interface SwipeOptions {
  /** Distância (px) para confirmar o fechamento. */
  threshold?: number;
}

interface SwipeToDismiss {
  handlers: {
    onTouchStart: (e: TouchEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
    onTouchEnd: () => void;
  };
  style: CSSProperties;
}

/**
 * @function useSwipeToDismiss
 * @param {() => void} onDismiss - Chamado ao concluir o gesto de voltar.
 * @param {SwipeOptions} [options] - Configuração do limiar.
 * @returns {SwipeToDismiss} Handlers de toque e estilo de transform.
 */
export const useSwipeToDismiss = (
  onDismiss: () => void,
  options?: SwipeOptions
): SwipeToDismiss => {
  const threshold = options?.threshold ?? 110;
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const locked = useRef(false); // true quando confirmamos ser gesto horizontal
  const [dx, setDx] = useState(0);
  const [dragging, setDragging] = useState(false);

  const onTouchStart = useCallback((e: TouchEvent) => {
    const t = e.touches[0];
    startX.current = t.clientX;
    startY.current = t.clientY;
    locked.current = false;
  }, []);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (startX.current === null || startY.current === null) return;
    const t = e.touches[0];
    const diffX = t.clientX - startX.current;
    const diffY = t.clientY - startY.current;

    // decide uma vez: se predominar vertical, é scroll -> não sequestra
    if (!locked.current) {
      if (Math.abs(diffX) < 8 && Math.abs(diffY) < 8) return;
      if (Math.abs(diffY) > Math.abs(diffX)) {
        startX.current = null; // aborta gesto até o próximo touchstart
        return;
      }
      locked.current = true;
    }

    // só arrasto para a direita (voltar)
    const next = diffX < 0 ? 0 : diffX;
    setDragging(true);
    setDx(next);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (dx > threshold) onDismiss();
    setDx(0);
    setDragging(false);
    startX.current = null;
    startY.current = null;
    locked.current = false;
  }, [dx, threshold, onDismiss]);

  const style: CSSProperties = {
    transform: dx ? `translateX(${dx}px)` : undefined,
    transition: dragging ? "none" : "transform 0.2s ease-out, opacity 0.2s ease-out",
    opacity: dx ? Math.max(1 - dx / 400, 0.4) : undefined,
    touchAction: "pan-y", // permite scroll vertical nativo
  };

  return { handlers: { onTouchStart, onTouchMove, onTouchEnd }, style };
};
