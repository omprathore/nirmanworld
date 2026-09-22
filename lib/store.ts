'use client';
import { create } from 'zustand';
import type { EnquiryMode } from '@nirman/shared';

type UIState = {
  enquiryMode: EnquiryMode;
  activeStage: string;
  setEnquiryMode: (mode: EnquiryMode) => void;
  setActiveStage: (stage: string) => void;
};

export const useNirmanUI = create<UIState>((set) => ({
  enquiryMode: 'service',
  activeStage: 'planning',
  setEnquiryMode: (enquiryMode) => set({ enquiryMode }),
  setActiveStage: (activeStage) => set({ activeStage })
}));
