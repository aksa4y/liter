export {}
declare global {
  interface Window {
    yaContextCb?: Array<() => void>
    Ya?: { Context?: { AdvManager?: { render: (options: { blockId: string; renderTo: string }) => void } } }
  }
}
